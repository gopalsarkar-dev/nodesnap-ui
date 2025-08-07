import { useTheme } from "next-themes";
import { ToastContainer } from "react-toastify";
const ReactToastify = () => {
	const { theme } = useTheme();

	return (
		<>
			<ToastContainer theme={theme === "light" ? "dark" : "light"} />
		</>
	);
};

export default ReactToastify;
