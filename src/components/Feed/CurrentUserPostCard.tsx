import currentUserAllPost from "../hooks/post/currentUserAllPost";
import FeedCard from "./FeedCard";

const CurrentUserPostCard = async () => {
	const { data } = await currentUserAllPost();
	if (data === null) {
		return <></>;
	}
	return (
		<>
			{data.map((item) => {
				return (
					<FeedCard
						fInfo={item}
						key={item.id}
					/>
				);
			})}
		</>
	);
};

export default CurrentUserPostCard;
