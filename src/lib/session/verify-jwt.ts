import 'server-only'

import { jwtVerify } from "jose";
import { AccessPayload } from '../definition/access-payload';

const accessSecret = process.env.JWT_ACCESS_SECRET;
const encodedKey = new TextEncoder().encode(accessSecret);

export async function verifyJwt(accessToken: string): Promise<AccessPayload | undefined> {
	if (!accessSecret) {
		throw new Error('JWT access secret is not defined');
	}
	try {
		const { payload } = await jwtVerify(accessToken, encodedKey, {
			algorithms: ["HS256"]
		});
		const userId = payload.userId as string;
		const privilege = payload.privilege as string;
		if (!userId || !privilege) {
			return undefined;
		}
		return {
			userId,
			privilege,
		}
	} catch (error) {
		return undefined;
	}
}