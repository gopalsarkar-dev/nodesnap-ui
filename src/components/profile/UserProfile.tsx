import Image from "next/image";
import { Card, CardHeader, CardTitle } from "../ui/card";
import EditProfileDrawer from "./EditProfileDrawer";
import getAuthProfile from "../hooks/getAuthProfile";
import { clientEnv } from "@/lib/env/clientEnv";

const UserProfile = async () => {
	const { data } = await getAuthProfile();
	if (data === null) {
		return <></>;
	}

	const avatarUrl = `${clientEnv.NEXT_PUBLIC_DATABASE_API_URL}/assets/${data.avatar}`;

	const last_name = `${data.last_name === null ? "" : data.last_name}`;

	return (
		<>
			<Card>
				<CardHeader>
					<CardTitle className="flex items-center gap-5 sm:gap-10">
						<Image
							src={data.avatar ? `${avatarUrl}` : "/node.jpg"}
							alt="favicon.ico"
							height={150}
							width={150}
							className="h-[150px] rounded-full object-cover"
						/>
						<div className="flex flex-col gap-2">
							<div className="text-lg font-bold sm:text-2xl">{`${data.first_name} ${last_name}`}</div>
							<div className="line-clamp-2 text-sm sm:text-base">
								Bio : {data.description}
							</div>
							<div className="flex">
								<EditProfileDrawer />
							</div>
						</div>
					</CardTitle>
				</CardHeader>
			</Card>
		</>
	);
};

export default UserProfile;
