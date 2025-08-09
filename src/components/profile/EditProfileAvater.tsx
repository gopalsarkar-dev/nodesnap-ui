"use client";

import { clientEnv } from "@/lib/env/clientEnv";
import { UserProfileType } from "@/lib/type";
import { Close } from "@radix-ui/react-dialog";
import Image from "next/image";
import { useState } from "react";
import { toast } from "react-toastify";
import { useFilePicker } from "use-file-picker";
import {
	reValidateDeleteAvatar,
	reValidateTageProfile,
} from "../hooks/action/actions";
import deleteAvatar from "../hooks/deleteAvatar";
import updateProfileAvater from "../hooks/updateProfileAvater";
import { Button } from "../ui/button";

type ProfileProviderProps = {
	proInfo: UserProfileType;
};

const EditProfileAvater = ({ proInfo }: ProfileProviderProps) => {
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

	const updateAvatarFn = async () => {
		const { message, success } = await updateProfileAvater(
			proInfo.avatar,
			plainFiles[0],
		);

		if (!success) {
			toast.error(message);
		}

		if (success) {
			toast.success(message);

			await reValidateTageProfile();
		}
	};

	// avatar delet function

	const deleteAvatarFn = async () => {
		const { message, success } = await deleteAvatar(proInfo.avatar);

		if (!success) {
			toast.error(message);
		}

		if (success) {
			toast.success(message);

			await reValidateDeleteAvatar();
		}
	};

	const avatarUrl = `${clientEnv.NEXT_PUBLIC_DATABASE_API_URL}/assets/${proInfo.avatar}`;

	return (
		<>
			{!isFile && (
				<>
					<button
						className="grid cursor-pointer place-items-center"
						onClick={openFilePicker}>
						<Image
							src={proInfo.avatar ? `${avatarUrl}` : "/node.jpg"}
							alt={proInfo.first_name}
							height={150}
							width={150}
							className="h-[150px] rounded-full object-cover"
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
						className="h-[150px] rounded-full object-cover"
					/>
					<br />
				</div>
			))}

			{isFile ? (
				<>
					<div className="flex gap-4">
						<Close asChild>
							<Button
								className="cursor-pointer"
								onClick={updateAvatarFn}>
								update Avatar
							</Button>
						</Close>
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
						{proInfo.avatar && proInfo.avatar !== "/node.jpg" && (
							<Close asChild>
								<Button
									className="cursor-pointer"
									onClick={deleteAvatarFn}>
									Remove Avatar
								</Button>
							</Close>
						)}
					</div>
				</>
			)}
		</>
	);
};

export default EditProfileAvater;
