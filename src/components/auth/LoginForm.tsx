"use client";

import { LoginFormType } from "@/lib/type";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "../ui/card";
import { Input } from "../ui/input";

import { loginFormSchema } from "@/lib/zodSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";
import { redirectToHomepage } from "../hooks/action/actions";
import logIn from "../hooks/logIn";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "../ui/form";

const LoginForm = () => {
	const lForm = useForm<LoginFormType>({
		resolver: zodResolver(loginFormSchema),
		defaultValues: { email: "", password: "" },
		mode: "all",
	});

	const handelLoginFn = async (lInfo: LoginFormType) => {
		const { message, success } = await logIn(lInfo);

		if (!success) {
			toast.error(message);
		}

		if (success) {
			toast.success(message);
			lForm.reset();
			await redirectToHomepage();
		}
	};

	return (
		<>
			<div className="grid h-[80dvh] place-items-center">
				<Form {...lForm}>
					<form onSubmit={lForm.handleSubmit(handelLoginFn)}>
						<Card className="w-[320px]">
							<CardHeader className="grid gap-2">
								<CardTitle>Login to your account</CardTitle>
								<CardDescription>
									Enter your email and password below to login to your account.
								</CardDescription>
							</CardHeader>
							<CardContent className="space-y-5">
								<FormField
									control={lForm.control}
									name="email"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Email</FormLabel>
											<FormControl>
												<Input
													type="email"
													placeholder="enter your email..."
													{...field}
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>

								<FormField
									control={lForm.control}
									name="password"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Password</FormLabel>
											<FormControl>
												<Input
													type="password"
													placeholder="enter your password..."
													{...field}
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
							</CardContent>
							<CardFooter className="grid gap-2">
								<Button
									type="submit"
									className="w-full cursor-pointer">
									Login
								</Button>
								<div className="flex items-center justify-center gap-1.5 text-sm">
									Don&apos;t have an account?{" "}
									<Link
										href="/auth/signup"
										className="font-bold underline underline-offset-4">
										Sign up
									</Link>
								</div>
							</CardFooter>
						</Card>
					</form>
				</Form>
			</div>
		</>
	);
};

export default LoginForm;
