import Image from "next/image";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "../ui/card";
import { PostType } from "@/lib/type";
import { clientEnv } from "@/lib/env/clientEnv";
import singleUserId from "../hooks/post/singleUserId";
import getAuthProfile from "../hooks/getAuthProfile";
import Link from "next/link";

type FeedProps = {
	fInfo: PostType;
};

const FeedCard = async ({ fInfo }: FeedProps) => {
	const { data } = await singleUserId(fInfo.user_created);

	//  Get current logged-in user
	const { data: currentUser } = await getAuthProfile();

	if (data === null || currentUser === null) {
		return <></>;
	}

	const avatarUrl = `${clientEnv.NEXT_PUBLIC_DATABASE_API_URL}/assets/${data.avatar}`;

	const last_name = `${data.last_name === null ? "" : data.last_name}`;

	const imgUrl = `${clientEnv.NEXT_PUBLIC_DATABASE_API_URL}/assets/${fInfo.post_img}`;

	// publick profile page-link
	const publickProfile =
		currentUser.id === data.id ? "/profile" : `/publick-profile/${data.id}`;

	return (
		<>
			<Card>
				<CardHeader className="flex flex-col gap-0.5">
					<Link href={publickProfile}>
						<CardTitle className="flex items-center justify-center gap-3">
							<Image
								src={data.avatar ? `${avatarUrl}` : "/node.jpg"}
								alt="node"
								width={60}
								height={60}
								className="h-[60px] rounded-full object-cover"
							/>

							<div className="font-bold">{`${data.first_name} ${last_name}`}</div>
						</CardTitle>
					</Link>
					<CardDescription>{fInfo.post_title}</CardDescription>
				</CardHeader>
				<CardContent>
					<Image
						src={imgUrl}
						alt={fInfo.id}
						width={300}
						height={300}
						className="h-[300px] w-[1000px] rounded-md object-cover"
					/>
				</CardContent>
			</Card>
		</>
	);
};

export default FeedCard;
