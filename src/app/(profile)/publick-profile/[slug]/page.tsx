import singleUserId from "@/components/hooks/post/singleUserId";
import PublickProfileCard from "@/components/profile/publickprofile/PublickProfileCard";

type IdProps = {
	params: Promise<{ slug: string }>;
};

const page = async ({ params }: IdProps) => {
	const { slug } = await params;

	const { data } = await singleUserId(slug);
	if (data === null) {
		return <></>;
	}

	return (
		<>
			<PublickProfileCard pInfo={data} />
		</>
	);
};

export default page;
