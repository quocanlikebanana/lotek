import Providers from './providers'

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="vi">
			<head />
			<body>
				<Providers>{children}</Providers>
			</body>
		</html>
	)
}