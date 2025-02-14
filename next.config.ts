import { NextConfig } from "next";

const config: NextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "placehold.co",
			},
		],
		dangerouslyAllowSVG: true,
		contentDispositionType: "attachment",
	},
};

export default config;
