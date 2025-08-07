"use client";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import ReactToastify from "../ReactToastify";

type ThemeProviderProps = React.ComponentProps<typeof NextThemesProvider>;

const ThemeProvider = ({ children, ...props }: ThemeProviderProps) => {
	return (
		<NextThemesProvider {...props}>
			{children}
			<ReactToastify />
		</NextThemesProvider>
	);
};

export default ThemeProvider;
