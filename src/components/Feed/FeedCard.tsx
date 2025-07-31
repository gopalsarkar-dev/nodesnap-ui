import Image from "next/image";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "../ui/card";

const FeedCard = () => {
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
					<CardDescription>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis,
						tempore ullam. Provident.Quis, tempore ullam. Provident.
					</CardDescription>
				</CardHeader>
				<CardContent>
					<Image
						src={"/node.jpg"}
						alt="node"
						width={1024}
						height={300}
						className="rounded-md"
					/>
				</CardContent>
			</Card>
		</>
	);
};

export default FeedCard;
