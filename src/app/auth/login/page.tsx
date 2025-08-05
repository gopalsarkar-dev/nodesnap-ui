import LoginForm from "@/components/auth/LoginForm";
import { Metadata } from "next";

export const generateMetadata: () => Metadata = () => ({
	title: "Nodesnap | Login",
	description:
		"Nodesnap is a full-stack progect built on Microservices architecture",
	keywords: [
		"Nodesnap",
		"Snapshot",
		"Nodejs project",
		"Full-Stack Project",
		"Nextjs-Project",
		"Post a Snapshot",
		"Login Page",
	],
});

const page = () => {
	return (
		<>
			<LoginForm />
		</>
	);
};

export default page;
