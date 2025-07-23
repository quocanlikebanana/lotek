'use client';

import { useTranslations, useLocale } from 'next-intl';
import { useRouter, usePathname } from '../../i18n/routing';
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Globe, ChevronDown, Check } from "lucide-react";
import { US, VN } from 'country-flag-icons/react/3x2';

export default function LanguageToggle() {
	const t = useTranslations('common');
	const locale = useLocale();
	const router = useRouter();
	const pathname = usePathname();

	const changeLanguage = (newLocale: string) => {
		router.replace(pathname, { locale: newLocale });
	};

	const languages = [
		{
			code: 'en',
			label: t('english'),
			flag: US,
			flagEmoji: '🇺🇸'
		},
		{
			code: 'vi',
			label: t('vietnamese'),
			flag: VN,
			flagEmoji: '🇻🇳'
		},
	];

	// Use the current locale from useLocale hook
	const selectedLanguage = languages.find(lang => lang.code === locale) || languages[0]!;

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button
					variant="outline"
					size="sm"
					className="flex items-center gap-2 md:min-w-[100px]"
				>
					<selectedLanguage.flag className="h-4 w-6 rounded-sm" />
					<span className="hidden sm:inline">{selectedLanguage.label}</span>
					<ChevronDown className="h-4 w-4 ml-auto" />
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end" className="w-48">
				{languages.map((language) => {
					const isSelected = language.code === locale;
					return (
						<DropdownMenuItem
							key={language.code}
							onClick={() => changeLanguage(language.code)}
							className="flex items-center gap-3 cursor-pointer"
						>
							<language.flag className="h-4 w-6 rounded-sm flex-shrink-0" />
							<span className="flex-1">{language.label}</span>
							{isSelected && (
								<Check className="h-4 w-4 text-primary" />
							)}
						</DropdownMenuItem>
					);
				})}
			</DropdownMenuContent>
		</DropdownMenu>
	);
}