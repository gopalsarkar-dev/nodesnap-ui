import TopBar from "@/components/Header/TopBar";
import "./globals.css";
import ThemeProvider from "@/components/theme/ThemeProvider";

type RootLayoutPropsProvider = {
	children: React.ReactNode;
};

const RootLayout = ({ children }: RootLayoutPropsProvider) => {
	return (
		<html
			lang="en"
			suppressHydrationWarning>
			<body>
				<ThemeProvider
					attribute="class"
					defaultTheme="light"
					enableSystem={false}>
					<TopBar />
					<main className="container mx-auto mt-24 max-w-2xl px-6">
						{children}
					</main>
				</ThemeProvider>
			</body>
		</html>
	);
};

export default RootLayout;
