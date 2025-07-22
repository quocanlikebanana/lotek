import { Button } from '@/components/ui/button'
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import React from 'react'

export default function CallToActionSection() {
	const nav = useTranslations('navigation');
	const cta = useTranslations("homepage.callToAction");


	return (
		<section className="py-16 px-4 bg-blue-800 text-white md:min-h-[500px] flex flex-col items-center justify-center">
			<div className="max-w-4xl mx-auto text-center">
				<h2 className="text-3xl md:text-4xl font-bold mb-4">
					{cta('title')}
				</h2>
				<p className="text-lg mb-8 text-blue-100">
					{cta('description')}
				</p>
				<div className="flex flex-col sm:flex-row gap-4 justify-center">
					<Link href={`/auth/register`}>
						<Button size="lg" className="bg-orange-600 hover:bg-orange-500 text-white">
							{cta('joinNow')}
						</Button>
					</Link>

					<Link href={`/auth/login`}>
						<Button size={"lg"} className="bg-gray-50  hover:bg-gray-100 text-blue-800">
							{cta('alreadyMember')}
						</Button>
					</Link>
				</div>
			</div>
		</section>
	)
}
