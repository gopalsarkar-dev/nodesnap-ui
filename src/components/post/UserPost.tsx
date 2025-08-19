"use client";

import { UserpostType } from "@/lib/type";
import { userPostSchema } from "@/lib/zodSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useFilePicker } from "use-file-picker";
import { Button } from "../ui/button";
import { Card, CardContent, CardFooter } from "../ui/card";

import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Close } from "@radix-ui/react-dialog";
import feedPost from "../hooks/post/feedPost";
import { toast } from "react-toastify";
import { redirectToHomepage } from "../hooks/action/actions";

const UserPost = () => {
	const [isFile, setIsfile] = useState(false);

	const { plainFiles, filesContent, openFilePicker, clear } = useFilePicker({
		multiple: false,
		accept: "image/*",
		readAs: "DataURL",

		onFilesSuccessfullySelected: () => setIsfile(true),

		onClear: () => setIsfile(false),
	});

	const lForm = useForm<UserpostType>({
		resolver: zodResolver(userPostSchema),
		defaultValues: { post_title: "" },
		mode: "all",
	});

	const handelPostFn = async (pInfo: UserpostType) => {
		const { message, success } = await feedPost(pInfo, plainFiles[0]);
		if (!success) {
			toast.error(message);
		}

		if (success) {
			toast.success(message);

			await redirectToHomepage();
		}
	};

	const hndelCancelPost = () => {
		clear();
		setIsfile(false);
		lForm.reset();
	};
	return (
		<>
			<Form {...lForm}>
				<form
					onSubmit={lForm.handleSubmit(handelPostFn)}
					className="grid place-items-center">
					<Card>
						<CardContent className="space-y-5">
							<FormField
								control={lForm.control}
								name="post_title"
								render={({ field }) => (
									<FormItem>
										<FormLabel>post_title</FormLabel>
										<FormControl>
											<Input
												className="h-12 text-lg sm:text-3xl"
												type="text"
												placeholder="What's your mind....!"
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>

							{!isFile && (
								<div
									className="grid place-items-center"
									onClick={openFilePicker}>
									<Image
										src="/uplode.jpg"
										alt="uplode"
										height={250}
										width={250}
										className="h-[250px] w-[400px] cursor-pointer rounded-lg object-cover"
									/>
								</div>
							)}

							{filesContent.map((file, index) => (
								<div
									key={index}
									className="grid place-items-center">
									<Image
										alt={file.name}
										src={file.content}
										height={250}
										width={250}
										className="h-[250px] w-[400px] rounded-lg object-cover"
									/>
								</div>
							))}
						</CardContent>

						{isFile && (
							<CardFooter className="grid gap-2">
								<Close asChild>
									<Button
										type="submit"
										className="w-full cursor-pointer">
										Post
									</Button>
								</Close>
								<Close asChild>
									<Button
										onClick={hndelCancelPost}
										className="w-full cursor-pointer">
										Cancel Post
									</Button>
								</Close>
							</CardFooter>
						)}
					</Card>
				</form>
			</Form>
		</>
	);
};

export default UserPost;
