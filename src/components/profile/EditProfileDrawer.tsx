"use client";
import { User } from "lucide-react";
import { Button } from "../ui/button";
import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerDescription,
	DrawerFooter,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger,
} from "../ui/drawer";
import ProfileAccountForm from "./ProfileAccountForm";
import { IoCloseOutline } from "react-icons/io5";

const EditProfileDrawer = () => {
	return (
		<>
			<Drawer>
				<DrawerTrigger
					asChild
					className="cursor-pointer">
					<Button>
						Edit Profile <User />
					</Button>
				</DrawerTrigger>
				<DrawerContent className="container mx-auto grid max-w-2xl px-6">
					<DrawerHeader className="">
						<DrawerTitle className="flex items-center justify-between text-lg">
							Edit profile account
							<DrawerClose asChild>
								<Button
									className="cursor-pointer"
									variant={"outline"}
									size={"icon"}>
									<IoCloseOutline />
								</Button>
							</DrawerClose>
						</DrawerTitle>
						<DrawerDescription className="hidden"></DrawerDescription>
					</DrawerHeader>
					{/* profileAccountForm  from profile folder*/}
					<ProfileAccountForm />

					<DrawerFooter></DrawerFooter>
				</DrawerContent>
			</Drawer>
		</>
	);
};

export default EditProfileDrawer;
