import 'server-only'
import { cookies } from 'next/headers'

export default async function createSession(
	accessToken: string,
	refreshToken: string,
): Promise<void> {
	const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) // 7 days expiration

	// TODO: check if secure is working in development (localhost)

	const cookieStore = await cookies();
	cookieStore.set('accessToken', accessToken, {
		httpOnly: true,
		secure: true,
		expires: expiresAt,
		sameSite: 'lax',
		path: '/',
	});

	cookieStore.set('refreshToken', refreshToken, {
		httpOnly: true,
		secure: true,
		expires: expiresAt,
		sameSite: 'lax',
		path: '/',
	});
}