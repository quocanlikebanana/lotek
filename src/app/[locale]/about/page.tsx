import { useTranslations } from 'next-intl';
import LanguageToggle from '../../../components/LanguageToggle';
import { Link } from '../../../i18n/routing';

export default function About() {
	const t = useTranslations('about');
	const tNav = useTranslations('navigation');

	return (
		<div className="font-sans min-h-screen p-8">
			{/* Language Toggle */}
			<div className="fixed top-4 right-4 z-10">
				<LanguageToggle />
			</div>

			{/* Navigation */}
			<nav className="mb-8">
				<Link
					href="/"
					className="text-blue-600 hover:text-blue-800 underline"
				>
					← {tNav('home')}
				</Link>
			</nav>

			<main className="max-w-4xl mx-auto">
				<h1 className="text-4xl font-bold mb-6 text-foreground">
					{t('title')}
				</h1>
				<p className="text-lg mb-8 text-muted-foreground">
					{t('description')}
				</p>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					<div className="p-6 border border-gray-200 rounded-lg">
						<h2 className="text-xl font-semibold mb-3 text-foreground">
							{t('mission')}
						</h2>
						<p className="text-muted-foreground">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						</p>
					</div>

					<div className="p-6 border border-gray-200 rounded-lg">
						<h2 className="text-xl font-semibold mb-3 text-foreground">
							{t('vision')}
						</h2>
						<p className="text-muted-foreground">
							Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
						</p>
					</div>

					<div className="p-6 border border-gray-200 rounded-lg">
						<h2 className="text-xl font-semibold mb-3 text-foreground">
							{t('values')}
						</h2>
						<p className="text-muted-foreground">
							Ut enim ad minim veniam, quis nostrud exercitation ullamco.
						</p>
					</div>
				</div>
			</main>
		</div>
	);
}
