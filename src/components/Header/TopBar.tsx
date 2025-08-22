import { serverEnv } from "@/lib/env/serverEnv";
import { cookies } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import { GoHome } from "react-icons/go";
import PostDrawer from "../post/PostDrawer";
import Menu from "../profilemenu/Menu";
import { Button } from "../ui/button";

const TopBar = async () => {
	const token = (await cookies()).get(serverEnv.SESSION_COOKIE_NAME)
		?.value as string;

	return (
		<header className="sticky top-0 w-full border border-b shadow backdrop-blur-sm">
			<div className="container mx-auto flex max-w-2xl items-center justify-between px-6 py-4">
				<Link href="/">
					<Image
						src="/nodesnap.jpg"
						alt="node"
						height={40}
						width={40}
						className="h-[40px] rounded-full object-cover"
					/>
				</Link>

				{token ? (
					<div className="flex items-center justify-center gap-5 sm:gap-8">
						<Link href="/">
							<GoHome size={26} />
						</Link>

						<PostDrawer />
						<Menu />
					</div>
				) : (
					<Link href="/auth/login">
						<Button>Login</Button>
					</Link>
				)}
			</div>
		</header>
	);
};

export default TopBar;
