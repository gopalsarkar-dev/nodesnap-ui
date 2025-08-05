import FeedCard from "@/components/Feed/FeedCard";
import type { Metadata } from "next";

export const generateMetadata: () => Metadata = () => ({
	title: "Nodesnap | Snapshot Feed",
	description:
		"Nodesnap is a full-stack progect built on Microservices architecture",
	keywords: [
		"Nodesnap",
		"Snapshot",
		"Nodejs project",
		"Full-Stack Project",
		"Nextjs-Project",
		"Post a Snapshot",
		"Feed Page",
	],
});

const page = () => {
	return (
		<>
			<div className="grid gap-6">
				<FeedCard />
				<FeedCard />
				<FeedCard />
				<FeedCard />
			</div>
		</>
	);
};

export default page;
