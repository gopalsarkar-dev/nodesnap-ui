import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "http",
				hostname: "localhost",
				port: "8055",
				pathname: "/assets/**",
			},
		],
	},
	/* config options here */
};

export default nextConfig;
