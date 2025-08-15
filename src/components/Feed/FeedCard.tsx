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

type FeedProps = {
	fInfo: PostType;
};

const FeedCard = ({ fInfo }: FeedProps) => {
	const imgUrl = `${clientEnv.NEXT_PUBLIC_DATABASE_API_URL}/assets/${fInfo.post_img}`;
	return (
		<>
			<Card>
				<CardHeader className="flex flex-col gap-0.5">
					<CardTitle className="flex items-center justify-center gap-3">
						<Image
							src={"/node.jpg"}
							alt="node"
							width={60}
							height={60}
							className="h-[60px] rounded-full object-cover"
						/>

						<div className="font-bold">Ram Sarkar</div>
					</CardTitle>
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
