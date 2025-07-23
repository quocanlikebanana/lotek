"use server"

import client from "@/api/client";
import { ErrorResponse } from "@/lib/definition/error-response";
import createSession from "@/lib/session/create-session";

export default async function loginAction({
	phone,
	password
}: {
	phone: string;
	password: string;
}): Promise<ErrorResponse | void> {
	const res = await client.POST("/auth/login", {
		body: { phone, password }
	});
	if (res.error) {
		const { statusCode, message } = res.error;
		return {
			message,
			statusCode,
			title: "Login Failed",
		};
	}
	const { accessToken, refreshToken } = res.data;
	await createSession(accessToken, refreshToken);
}