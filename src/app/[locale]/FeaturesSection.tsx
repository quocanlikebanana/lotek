
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card'
import { BadgeCheck, Globe, MessagesSquare } from 'lucide-react';
import { useTranslations } from 'next-intl'
import React from 'react'

export default function FeaturesSection() {
	const fea = useTranslations("homepage.features");

	const features = [
		{
			icon: (
				<div className="w-16 h-16 bg-blue-800 text-white rounded-full flex items-center justify-center mx-auto mb-4">
					<BadgeCheck className="w-8 h-8" />
				</div>
			),
			title: fea('feature1.title'),
			description: fea('feature1.description')
		},
		{
			icon: (
				<div className="w-16 h-16 bg-orange-500 text-white rounded-full flex items-center justify-center mx-auto mb-4">
					<MessagesSquare className="w-8 h-8" />
				</div>
			),
			title: fea('feature2.title'),
			description: fea('feature2.description')
		},
		{
			icon: (
				<div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
					<Globe className="w-8 h-8" />
				</div>
			),
			title: fea('feature3.title'),
			description: fea('feature3.description')
		}
	];

	function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
		return (
			<Card className="text-center hover:shadow-lg transition-shadow">
				<CardHeader>
					{icon}
					<CardTitle>{title}</CardTitle>
				</CardHeader>
				<CardContent>
					<CardDescription>{description}</CardDescription>
				</CardContent>
			</Card>
		);
	}

	return (
		<section className="py-16 px-4 bg-gray-50 min-h-screen flex items-center">
			<div className="max-w-7xl mx-auto">
				<div className="text-center mb-12">
					<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
						{fea('title')}
					</h2>
					<p className="text-lg text-gray-600 max-w-2xl mx-auto">
						{fea('description')}
					</p>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-auto">
					{features.map((feature, idx) => (
						<FeatureCard key={idx} {...feature} />
					))}
				</div>
			</div>
		</section>
	);
}
