"use client";

import Image from "next/image";
import { useState } from "react";
import { useFilePicker } from "use-file-picker";
import { Button } from "../ui/button";

const EditProfileAvater = () => {
	const [isFile, setIsfile] = useState(false);

	const { plainFiles, filesContent, openFilePicker, clear } = useFilePicker({
		multiple: false,
		accept: "image/*",
		readAs: "DataURL",
		onFilesSuccessfullySelected: () => setIsfile(true),

		onClear: () => setIsfile(false),
	});

	const discardAvatarFn = () => {
		clear();
		setIsfile(false);
	};

	const updateAvatarFn = () => {
		const formData = new FormData();

		formData.append("image", plainFiles[0]);
		console.log(plainFiles[0]);
	};

	return (
		<>
			{!isFile && (
				<>
					<button
						className="grid cursor-pointer place-items-center"
						onClick={openFilePicker}>
						<Image
							src="/favicon.ico"
							alt="favicon.ico"
							height={150}
							width={150}
							className="rounded-full object-cover"
						/>
					</button>
				</>
			)}

			{filesContent.map((file, index) => (
				<div
					key={index}
					className="grid cursor-pointer place-items-center">
					<Image
						alt={file.name}
						src={file.content}
						height={150}
						width={150}
						className="h-[150px] w-[150px] rounded-full object-cover"
					/>
					<br />
				</div>
			))}

			{isFile ? (
				<>
					<div className="flex gap-4">
						<Button
							className="cursor-pointer"
							onClick={updateAvatarFn}>
							update Avatar
						</Button>
						<Button
							onClick={discardAvatarFn}
							className="cursor-pointer">
							Discard Avatar
						</Button>
					</div>
				</>
			) : (
				<>
					<div className="mt-6">
						<Button className="cursor-pointer">Remove Avatar</Button>
					</div>
				</>
			)}
		</>
	);
};

export default EditProfileAvater;
