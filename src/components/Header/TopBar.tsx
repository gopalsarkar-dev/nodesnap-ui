import Link from "next/link";
import { GoHome } from "react-icons/go";
import PostDrawer from "../post/PostDrawer";
import Menu from "../profilemenu/Menu";

const TopBar = () => {
	return (
		<header className="fixed top-0 w-full border border-b shadow backdrop-blur-sm">
			<div className="container mx-auto flex max-w-2xl items-center justify-between px-6 py-4">
				<Link
					href="/"
					className="text-2xl font-bold">
					NodeSnap
				</Link>
				<div className="flex items-center justify-center gap-5 sm:gap-8">
					<Link href="/">
						<GoHome size={26} />
					</Link>

					<PostDrawer />
					<Menu />
				</div>
			</div>
		</header>
	);
};

export default TopBar;
