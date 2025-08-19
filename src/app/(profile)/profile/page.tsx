import CurrentUserPostCard from "@/components/Feed/CurrentUserPostCard";
import getAuthProfile from "@/components/hooks/getAuthProfile";
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

const page = async () => {
	await getAuthProfile();
	return (
		<>
			<div className="space-y-6">
				<UserProfile />
				<hr />
				<div className="mt-6 space-y-6">
					<CurrentUserPostCard />
				</div>
			</div>
		</>
	);
};

export default page;
