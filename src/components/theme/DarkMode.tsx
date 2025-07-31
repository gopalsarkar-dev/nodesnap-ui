"use client";

import { MoonStar, Sun } from "lucide-react";
import { useTheme } from "next-themes";

const DarkMode = () => {
	const { theme, setTheme } = useTheme();

	const handelDarkmodeFn = () => {
		setTheme(theme === "light" ? "dark" : "light");
	};
	return (
		<>
			<div
				className="cursor-pointer font-semibold"
				onClick={handelDarkmodeFn}>
				{theme === "light" ? (
					<div className="flex items-center gap-2">
						<MoonStar />
						<span>Dark</span>
					</div>
				) : (
					<div className="flex items-center gap-2">
						<Sun />
						<span>Light</span>
					</div>
				)}
			</div>
		</>
	);
};

export default DarkMode;
