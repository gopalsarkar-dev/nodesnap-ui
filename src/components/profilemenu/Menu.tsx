import { clientEnv } from "@/lib/env/clientEnv";
import { User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import getAuthProfile from "../hooks/getAuthProfile";
import UserLogout from "../logout/UserLogout";
import DarkMode from "../theme/DarkMode";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "../ui/dropdown-menu";

const Menu = async () => {
	const { data } = await getAuthProfile();
	if (data === null) {
		return <></>;
	}

	const avatarUrl = `${clientEnv.NEXT_PUBLIC_DATABASE_API_URL}/assets/${data.avatar}`;
	return (
		<>
			<DropdownMenu>
				<DropdownMenuTrigger
					asChild
					className="cursor-pointer">
					<Image
						src={data.avatar ? `${avatarUrl}` : "/node.jpg"}
						alt="favicon.ico"
						height={40}
						width={40}
						className="h-[40px] rounded-full object-cover"
					/>
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
