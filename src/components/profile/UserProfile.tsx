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
							<div className="text-lg font-bold sm:text-2xl">Gopal Sarkar</div>
							<div className="line-clamp-2 text-sm sm:text-base">
								Bio : Full-stack developer with a focus on building modern web
								apps using Next.js, React, and Node.js. Experienced in working
								with Directus, Prisma, and real-time technologies.
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
