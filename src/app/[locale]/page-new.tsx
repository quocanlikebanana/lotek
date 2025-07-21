import { useTranslations } from 'next-intl';
import LanguageToggle from '../../components/LanguageToggle';

export default function Home() {
	const t = useTranslations('homepage');

	return (
		<div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
			{/* Language Toggle */}
			<div className="fixed top-4 right-4 z-10">
				<LanguageToggle />
			</div>

			<main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
				<div className="text-center sm:text-left">
					<h1 className="text-4xl font-bold mb-4 text-foreground">
						{t('title')}
					</h1>
					<p className="text-xl mb-2 text-muted-foreground">
						{t('subtitle')}
					</p>
					<p className="text-base text-muted-foreground max-w-2xl">
						{t('description')}
					</p>
				</div>

				<div className="flex gap-4 items-center flex-col sm:flex-row">
					<button className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto">
						{t('getStarted')}
					</button>
					<button className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]">
						{t('learnMore')}
					</button>
				</div>
			</main>
		</div>
	);
}
