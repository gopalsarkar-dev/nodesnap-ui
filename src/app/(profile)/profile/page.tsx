import UserProfile from "@/components/profile/UserProfile";
import { Metadata } from "next";

export const generateMetadata: () => Metadata = () => ({
	title: "Nodesnap | Profile",
	description:
		"Nodesnap is a full-stack progect built on Microservices architecture",
	keywords: [
		"Nodesnap",
		"Snapshot",
		"Nodejs project",
		"Full-Stack Project",
		"Nextjs-Project",
		"Post a Snapshot",
		"Profile Page",
	],
});

const page = () => {
	return (
		<>
			<UserProfile />
		</>
	);
};

export default page;
