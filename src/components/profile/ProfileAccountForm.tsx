"use client";

import { EditProfileType, UserProfileType } from "@/lib/type";
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
import profileAccountUpdate from "../hooks/profileAccountUpdate";
import { toast } from "react-toastify";
import { Close } from "@radix-ui/react-dialog";
import { reValidateTageProfile } from "../hooks/action/actions";

type AccountProps = {
	aInfo: UserProfileType;
};

const ProfileAccountForm = ({ aInfo }: AccountProps) => {
	const lForm = useForm<EditProfileType>({
		resolver: zodResolver(editProfileSchema),
		defaultValues: {
			first_name: aInfo.first_name,
			last_name: aInfo.last_name ? aInfo.last_name : "",
			description: aInfo.description ? aInfo.description : "",
			tags: aInfo.tags ? aInfo.tags : "",
		},
		mode: "all",
	});

	const handelLoginFn = async (eInfo: EditProfileType) => {
		const { message, success } = await profileAccountUpdate(eInfo);
		if (!success) {
			toast.error(message);
		}

		if (success) {
			toast.success(message);
			await reValidateTageProfile();
		}
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
													placeholder="update your first_name"
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
													placeholder="update your last_name"
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
													placeholder="update your tags_name"
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
													placeholder="update your description"
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
								<Close asChild>
									<Button
										type="submit"
										className="w-full cursor-pointer">
										Update
									</Button>
								</Close>
							</CardFooter>
						</Card>
					</form>
				</Form>
			</div>
		</>
	);
};

export default ProfileAccountForm;
