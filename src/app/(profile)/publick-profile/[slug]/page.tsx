import FeedCard from "@/components/Feed/FeedCard";
import singleUserId from "@/components/hooks/post/singleUserId";
import publicUserAllPost from "@/components/hooks/publicuser/publicUserAllPost";
import PublickProfileCard from "@/components/profile/publickprofile/PublickProfileCard";

type IdProps = {
	params: Promise<{ slug: string }>;
};

const page = async ({ params }: IdProps) => {
	const { slug } = await params;

	const { data } = await singleUserId(slug);

	const { data: allPst } = await publicUserAllPost(slug);

	if (data === null || allPst === null) {
		return <></>;
	}

	return (
		<>
			<div className="space-y-6">
				<PublickProfileCard pInfo={data} />
				<hr />

				{allPst.map((items) => {
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
