import { FiPlusSquare } from "react-icons/fi";
import { Button } from "../ui/button";
import { IoCloseOutline } from "react-icons/io5";

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

const PostDrawer = () => {
	return (
		<>
			<Drawer>
				<DrawerTrigger className="cursor-pointer">
					<FiPlusSquare size={26} />
				</DrawerTrigger>
				<DrawerContent className="container mx-auto grid max-w-2xl px-6">
					<DrawerHeader className="">
						<DrawerTitle className="flex items-center justify-between">
							Are you absolutely sure?
							<DrawerClose>
								<Button
									asChild
									className="cursor-pointer"
									variant={"outline"}
									size={"icon"}>
									<IoCloseOutline />
								</Button>
							</DrawerClose>
						</DrawerTitle>
						<DrawerDescription className="hidden"></DrawerDescription>
					</DrawerHeader>

					<DrawerFooter></DrawerFooter>
				</DrawerContent>
			</Drawer>
		</>
	);
};

export default PostDrawer;
