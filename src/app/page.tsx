import FeedCard from "@/components/Feed/FeedCard";
import getAllFeedPost from "@/components/hooks/post/getAllFeedPost";
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

const page = async () => {
	const { data } = await getAllFeedPost();
	if (data === null) {
		return <></>;
	}
	return (
		<>
			<div className="grid gap-6">
				{data.map((items) => {
					return (
						<FeedCard
							fInfo={items}
							key={items.id}
						/>
					);
				})}
			</div>
		</>
	);
};

export default page;
