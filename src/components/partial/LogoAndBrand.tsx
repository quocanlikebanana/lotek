import React from 'react'
import Image from 'next/image'

export default function LogoAndBrand() {
	return (
		<div className="text-center mb-8 flex flex-col items-center">
			<Image
				src={'/Logo.svg'}
				alt="Lotek"
				width={64}
				height={64}
				className="w-16 h-16"
			/>
			<h1
				className="text-2xl font-bold"
			>
				<span className="text-blue-900">Lo</span>
				<span className="text-amber-700">Tek</span>
			</h1>
		</div>
	)
}
