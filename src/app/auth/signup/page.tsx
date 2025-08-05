import SignupForm from "@/components/auth/SignupForm";
import { Metadata } from "next";

export const generateMetadata: () => Metadata = () => ({
	title: "Nodesnap | Signup",
	description:
		"Nodesnap is a full-stack progect built on Microservices architecture",
	keywords: [
		"Nodesnap",
		"Snapshot",
		"Nodejs project",
		"Full-Stack Project",
		"Nextjs-Project",
		"Post a Snapshot",
		"Signup Page",
	],
});
const page = () => {
	return (
		<>
			<SignupForm />
		</>
	);
};

export default page;
