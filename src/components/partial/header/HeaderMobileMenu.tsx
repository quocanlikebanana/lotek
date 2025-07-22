"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useTranslations } from "next-intl";
import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger,
} from "@/components/ui/drawer";

export default function HeaderMobileMenu() {
	const t = useTranslations();

	return (
		<Drawer direction="top">
			<DrawerTrigger asChild>
				<Button
					variant="ghost"
					size="sm"
					className="md:hidden"
				>
					<Menu className="h-6 w-6" />
					<span className="sr-only">Open menu</span>
				</Button>
			</DrawerTrigger>

			<DrawerContent className="h-auto max-h-[70vh]">
				<DrawerHeader className="sr-only">
					<DrawerTitle>Navigation Menu</DrawerTitle>
				</DrawerHeader>

				<div className="flex flex-col space-y-1 p-4 pb-8">
					{/* Navigation Links */}
					<DrawerClose asChild>
						<Link
							href="/about"
							className="flex items-center py-4 text-base font-medium text-gray-700 hover:text-blue-700 hover:bg-gray-50 transition-all rounded-md px-3 -mx-3"
						>
							{t("navigation.about")}
						</Link>
					</DrawerClose>

					<DrawerClose asChild>
						<Link
							href="/contact"
							className="flex items-center py-4 text-base font-medium text-gray-700 hover:text-blue-700 hover:bg-gray-50 transition-all rounded-md px-3 -mx-3"
						>
							{t("navigation.contact")}
						</Link>
					</DrawerClose>

					{/* Divider */}
					<div className="border-t border-gray-200 my-4"></div>

					{/* Auth Buttons */}
					<div className="space-y-3">
						<DrawerClose asChild>
							<Button
								variant="ghost"
								size="lg"
								asChild
								className="w-full justify-center text-base"
							>
								<Link href="/auth/login">
									{t("header.signIn")}
								</Link>
							</Button>
						</DrawerClose>

						<DrawerClose asChild>
							<Button
								size="lg"
								asChild
								className="w-full justify-center bg-orange-500 hover:bg-orange-600 text-white text-base"
							>
								<Link href="/auth/register">
									{t("header.joinUs")}
								</Link>
							</Button>
						</DrawerClose>
					</div>
				</div>
			</DrawerContent>
		</Drawer>
	);
}
