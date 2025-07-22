import Link from "next/link";
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
import { Label } from "../ui/label";

const LoginForm = () => {
	return (
		<>
			<div className="grid h-[85dvh] place-items-center">
				<form>
					<Card className="w-[320px]">
						<CardHeader className="grid gap-2">
							<CardTitle>Login to your account</CardTitle>
							<CardDescription>
								Enter your email and password below to login to your account.
							</CardDescription>
						</CardHeader>
						<CardContent>
							<div className="flex flex-col gap-6">
								<div className="grid gap-2">
									<Label htmlFor="email">Email</Label>
									<Input
										type="email"
										placeholder="enter your email..."
									/>
								</div>
								<div className="grid gap-2">
									<Label htmlFor="password">Password</Label>
									<Input
										type="password"
										placeholder="enter your password..."
									/>
								</div>
							</div>
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
			</div>
		</>
	);
};

export default LoginForm;
