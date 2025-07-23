"use client";

import { SignupFormType } from "@/lib/type";
import { signupFormSchema } from "@/lib/zodSchema";
import { zodResolver } from "@hookform/resolvers/zod";
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
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";

const SignupForm = () => {
	const lForm = useForm<SignupFormType>({
		resolver: zodResolver(signupFormSchema),
		defaultValues: { first_name: "", email: "", password: "" },
		mode: "all",
	});

	const handelSignupFn = (sInfo: SignupFormType) => {
		console.log(sInfo);
		lForm.reset();
	};

	return (
		<>
			<div className="grid h-[80dvh] place-items-center">
				<Form {...lForm}>
					<form onSubmit={lForm.handleSubmit(handelSignupFn)}>
						<Card className="w-[320px]">
							<CardHeader className="grid gap-2">
								<CardTitle>Create to your account</CardTitle>
								<CardDescription>
									Enter your first_name, email and password below to create your
									account.
								</CardDescription>
							</CardHeader>
							<CardContent className="space-y-5">
								<FormField
									control={lForm.control}
									name="first_name"
									render={({ field }) => (
										<FormItem>
											<FormLabel>First_name</FormLabel>
											<FormControl>
												<Input
													type="text"
													placeholder="enter your first_name..."
													{...field}
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
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
									Signup
								</Button>
								<div className="flex items-center justify-center gap-1.5 text-sm">
									Already have an account?{" "}
									<Link
										href="/auth/login"
										className="font-bold underline underline-offset-4">
										Login
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

export default SignupForm;
