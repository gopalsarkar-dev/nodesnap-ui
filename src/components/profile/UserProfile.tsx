import { User } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";
import { Card, CardHeader, CardTitle } from "../ui/card";

const UserProfile = () => {
	return (
		<>
			<Card>
				<CardHeader>
					<CardTitle className="flex items-center gap-5 sm:gap-10">
						<Image
							src="/favicon.ico"
							alt="favicon.ico"
							height={150}
							width={150}
							className="rounded-full"
						/>
						<div className="flex flex-col gap-2">
							<div className="text-lg font-bold sm:text-2xl">Gopal Sarkar</div>
							<div className="line-clamp-2 text-sm sm:text-base">
								Bio : Full-stack developer with a focus on building modern web
								apps using Next.js, React, and Node.js. Experienced in working
								with Directus, Prisma, and real-time technologies.
							</div>
							<div className="flex">
								<Button>
									Edit Profile <User />
								</Button>
							</div>
						</div>
					</CardTitle>
				</CardHeader>
			</Card>
		</>
	);
};

export default UserProfile;
