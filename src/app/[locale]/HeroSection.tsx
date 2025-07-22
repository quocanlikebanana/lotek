import { Button } from '@/components/ui/button'
import { useTranslations } from 'next-intl';
import React from 'react'

export default function HeroSection() {
	const hero = useTranslations('homepage.hero');
	return (
		<section className="relative min-h-screen bg-gradient-to-br from-orange-900 to-blue-900 text-white flex flex-col items-center justify-center py-16 px-4">
			<div className="max-w-7xl mx-auto text-center">
				<h1 className="text-4xl md:text-6xl font-bold mb-6">
					{hero('title')}
				</h1>
				<p className="text-xl md:text-2xl mb-4 text-blue-100">
					{hero('subtitle')}
				</p>
				<p className="text-lg mb-8 text-blue-200 max-w-2xl mx-auto">
					{hero('description')}
				</p>
				<div className="flex flex-col sm:flex-row gap-4 justify-center">
					<Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
						{hero('getStarted')}
					</Button>
					<Button size="lg" className="bg-blue-700 hover:bg-blue-800 text-white">
						{hero('learnMore')}
					</Button>
				</div>
			</div>
		</section>
	)
}
