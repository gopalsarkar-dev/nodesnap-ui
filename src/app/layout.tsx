import TopBar from "@/components/Header/TopBar";
import "./globals.css";

type RootLayoutPropsProvider = {
	children: React.ReactNode;
};

const RootLayout = ({ children }: RootLayoutPropsProvider) => {
	return (
		<html lang="en">
			<body>
				<TopBar />
				<main className="container mx-auto mt-24 max-w-2xl px-6">
					{children}
				</main>
			</body>
		</html>
	);
};

export default RootLayout;
