import { FiPlusSquare } from "react-icons/fi";
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
import UserPost from "./UserPost";

const PostDrawer = () => {
	return (
		<>
			<Drawer>
				<DrawerTrigger className="cursor-pointer">
					<FiPlusSquare size={26} />
				</DrawerTrigger>
				<DrawerContent className="container mx-auto grid max-w-2xl">
					<DrawerHeader className="hidden">
						<DrawerTitle className=""></DrawerTitle>
						<DrawerDescription className="hidden"></DrawerDescription>
					</DrawerHeader>
					<div className="flex max-h-[85vh] flex-col space-y-5">
						<div className="flex items-center justify-between px-6">
							<div className="text-lg font-bold">Post</div>
							<DrawerClose asChild>
								<Button
									className="cursor-pointer"
									variant="outline"
									size="icon">
									<IoCloseOutline />
								</Button>
							</DrawerClose>
						</div>

						<div className="space-y-5 overflow-y-auto pb-24">
							<UserPost />
						</div>
					</div>
				</DrawerContent>
			</Drawer>
		</>
	);
};

export default PostDrawer;
