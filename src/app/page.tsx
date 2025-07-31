import FeedCard from "@/components/Feed/FeedCard";

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
