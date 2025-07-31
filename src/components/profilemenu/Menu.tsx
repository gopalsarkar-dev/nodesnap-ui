"use client";

import Link from "next/link";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import DarkMode from "../theme/DarkMode";
import { User } from "lucide-react";
import UserLogout from "../logout/UserLogout";

const Menu = () => {
	return (
		<>
			<DropdownMenu>
				<DropdownMenuTrigger
					asChild
					className="cursor-pointer">
					<div className="">
						Ram
						{/* <UserProfile /> */}
					</div>
				</DropdownMenuTrigger>
				<DropdownMenuContent
					className="mt-6 w-56"
					align="end">
					<DropdownMenuLabel>My Account</DropdownMenuLabel>
					<DropdownMenuSeparator />
					<DropdownMenuGroup>
						<DropdownMenuItem>
							<Link
								href="/profile"
								className="flex items-center gap-2 font-semibold">
								<User />
								<span>Profile</span>
							</Link>
						</DropdownMenuItem>

						<DropdownMenuItem>
							<DarkMode />
						</DropdownMenuItem>
					</DropdownMenuGroup>
					<DropdownMenuSeparator />

					<DropdownMenuItem>
						<UserLogout />
					</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
		</>
	);
};

export default Menu;
