import React from 'react';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from '@/components/ui/navigation-menu';
import LanguageToggle from '@/components/components/LanguageToggle';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import HeaderMobileMenu from './HeaderMobileMenu';
import LoTek from '/Logo.svg';
import Image from 'next/image';

export default function Header() {
	const t = useTranslations();

	return (
		<header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
			<div className="flex h-16 items-center justify-between px-4 md:px-6">
				{/* Logo Section */}
				<div className="flex items-center space-x-2 md:w-1/4 w-auto">
					<Link
						href="/"
						className="flex items-center space-x-2 px-2 py-1 rounded-md hover:opacity-80 hover:bg-gray-100 transition-opacity"
					>
						<Image src="/Logo.svg" alt="LoTek" width={56} height={56} />
						<span className="font-bold text-xl text-gray-900 hidden sm:inline-block">
							LoTek
						</span>
					</Link>
				</div>

				{/* Middle Navigation */}
				<NavigationMenu className="hidden md:flex md:w-1/2 w:auto">
					<NavigationMenuList>
						<NavigationMenuItem>
							<NavigationMenuLink asChild>
								<Link
									href="/about"
									className={cn(
										"group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
									)}
								>
									{t('navigation.about')}
								</Link>
							</NavigationMenuLink>
						</NavigationMenuItem>
						<NavigationMenuItem>
							<NavigationMenuLink asChild>
								<Link
									href="/contact"
									className={cn(
										"group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
									)}
								>
									{t('navigation.contact')}
								</Link>
							</NavigationMenuLink>
						</NavigationMenuItem>
					</NavigationMenuList>
				</NavigationMenu>

				{/* Right Section - Auth & Language */}
				<div className="flex items-center justify-end space-x-2 md:space-x-4 md:w-1/4 w-auto">
					<LanguageToggle />

					{/* Auth Buttons */}
					<div className="flex items-center space-x-2">
						<Button variant="ghost" size="sm" asChild className="hidden sm:inline-flex">
							<Link href="/auth/login">
								{t('header.signIn')}
							</Link>
						</Button>
						<Button size="sm" asChild className="bg-orange-500 hover:bg-orange-600 text-white">
							<Link href="/auth/register">
								{t('header.joinUs')}
							</Link>
						</Button>
					</div>

					{/* Mobile Menu Button and Menu */}
					<HeaderMobileMenu />
				</div>
			</div>
		</header>
	);
}