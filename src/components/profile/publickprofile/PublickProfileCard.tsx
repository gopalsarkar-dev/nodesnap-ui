import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { clientEnv } from "@/lib/env/clientEnv";
import { UserProfileType } from "@/lib/type";
import Image from "next/image";

type PublickProps = {
	pInfo: UserProfileType;
};

const PublickProfileCard = ({ pInfo }: PublickProps) => {
	const pubAva = `${clientEnv.NEXT_PUBLIC_DATABASE_API_URL}/assets/${pInfo.avatar}`;
	const last_name = `${pInfo.last_name === null ? "" : pInfo.last_name}`;
	return (
		<>
			<Card>
				<CardHeader>
					<CardTitle className="flex items-center gap-5 sm:gap-10">
						<Image
							src={pInfo.avatar ? `${pubAva}` : "/node.jpg"}
							alt="favicon.ico"
							height={150}
							width={150}
							className="h-[150px] rounded-full object-cover"
						/>
						<div className="flex flex-col gap-2">
							<div className="text-lg font-bold sm:text-2xl">{`${pInfo.first_name} ${last_name}`}</div>
							<div className="line-clamp-2 text-sm sm:text-base">
								Bio : {pInfo.description}
							</div>
						</div>
					</CardTitle>
				</CardHeader>
			</Card>
		</>
	);
};

export default PublickProfileCard;
