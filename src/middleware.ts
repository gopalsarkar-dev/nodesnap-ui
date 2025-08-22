import { NextResponse, NextRequest } from "next/server";
import { serverEnv } from "./lib/env/serverEnv";
import { jwtVerify } from "jose";

// This function can be marked `async` if using `await` inside
export const middleware = async (request: NextRequest) => {
	const secret = new TextEncoder().encode(serverEnv.API_SECRET_KEY);

	const cookie = request.cookies.get(serverEnv.SESSION_COOKIE_NAME)
		?.value as string;

	// console.log(cookie);
	try {
		await jwtVerify(cookie, secret);
	} catch (error) {
		console.log(error);

		const customRes = NextResponse.redirect(
			new URL("/auth/login", request.url),
		);
		customRes.cookies.delete(serverEnv.SESSION_COOKIE_NAME);

		return customRes;
	}
};

export const config = {
	matcher: ["/", "/profile", "/publick-profile/:path*"],
};
