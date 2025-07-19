import Link from "next/link";

const TopBar = () => {
	return (
		<header className="fixed top-0 w-full border border-b shadow backdrop-blur-sm">
			<div className="container mx-auto flex max-w-2xl items-center justify-between px-6 py-4">
				<Link
					href="/"
					className="text-2xl font-bold">
					NodeSnap
				</Link>

				<div className="">ProfileMenu</div>
			</div>
		</header>
	);
};

export default TopBar;
