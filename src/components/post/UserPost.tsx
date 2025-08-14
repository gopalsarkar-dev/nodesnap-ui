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

	const handelPostFn = (pInfo: UserpostType) => {
		const formData = new FormData();

		formData.append("image", plainFiles[0]);
		console.log(plainFiles[0], pInfo);
		// console.log(pInfo);
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
										disabled={
											lForm.formState.isSubmitting &&
											lForm.formState.isValid &&
											!isFile
										}
										type="submit"
										className="w-full cursor-pointer">
										Post
									</Button>
								</Close>
								<Close asChild>
									<Button
										disabled={lForm.formState.isSubmitting && !isFile}
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
