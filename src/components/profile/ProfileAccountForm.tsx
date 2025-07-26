"use client";

import { EditProfileType } from "@/lib/type";
import { editProfileSchema } from "@/lib/zodSchema";
import { zodResolver } from "@hookform/resolvers/zod";
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

const ProfileAccountForm = () => {
	const lForm = useForm<EditProfileType>({
		resolver: zodResolver(editProfileSchema),
		defaultValues: {
			first_name: "Gopal",
			last_name: "Sarkar",
			description: "Hi i am Gopal sarkar, Full-Stack Developer",
			tags: "DEV",
		},
		mode: "all",
	});

	const handelLoginFn = (eInfo: EditProfileType) => {
		console.log(eInfo);
	};

	return (
		<>
			<div className="grid place-items-center">
				<Form {...lForm}>
					<form onSubmit={lForm.handleSubmit(handelLoginFn)}>
						<Card className="w-[320px]">
							<CardHeader className="grid gap-2">
								<CardTitle>Edit to your Profile account</CardTitle>
								<CardDescription className="hidden"></CardDescription>
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
													{...field}
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>

								<FormField
									control={lForm.control}
									name="last_name"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Lirst_name</FormLabel>
											<FormControl>
												<Input
													type="text"
													{...field}
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									control={lForm.control}
									name="tags"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Tags name</FormLabel>
											<FormControl>
												<Input
													type="text"
													{...field}
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									control={lForm.control}
									name="description"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Description</FormLabel>
											<FormControl>
												<Input
													type="text"
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
									Update
								</Button>
							</CardFooter>
						</Card>
					</form>
				</Form>
			</div>
		</>
	);
};

export default ProfileAccountForm;
