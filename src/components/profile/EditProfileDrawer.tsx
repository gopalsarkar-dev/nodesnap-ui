import { User } from "lucide-react";
import { IoCloseOutline } from "react-icons/io5";
import { Button } from "../ui/button";
import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerDescription,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger,
} from "../ui/drawer";
import EditProfileAvater from "./EditProfileAvater";
import ProfileAccountForm from "./ProfileAccountForm";
import getAuthProfile from "../hooks/getAuthProfile";

const EditProfileDrawer = async () => {
	const { data } = await getAuthProfile();
	if (data === null) {
		return <></>;
	}
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
				<DrawerContent className="container mx-auto max-w-2xl">
					<DrawerHeader className="hidden">
						<DrawerTitle></DrawerTitle>
						<DrawerDescription className="hidden"></DrawerDescription>
					</DrawerHeader>

					<div className="flex max-h-[85vh] flex-col space-y-5">
						<div className="flex items-center justify-between px-6">
							<div className="text-lg font-bold">Edit profile account</div>
							<DrawerClose asChild>
								<Button
									className="cursor-pointer"
									variant="outline"
									size="icon">
									<IoCloseOutline />
								</Button>
							</DrawerClose>
						</div>

						<div className="space-y-5 overflow-y-auto px-6">
							<ProfileAccountForm aInfo={data} />
							<div className="text-lg font-bold">Edit Profile Avater</div>
							<div className="grid place-items-center pb-24">
								<EditProfileAvater proInfo={data} />
							</div>
						</div>
					</div>
				</DrawerContent>
			</Drawer>
		</>
	);
};

export default EditProfileDrawer;
