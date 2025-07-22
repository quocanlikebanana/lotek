'use client';

import { useTranslations } from 'next-intl';
import { Link } from '../../../i18n/routing';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

export default function LongFooter() {
	const t = useTranslations('footer');
	const tNav = useTranslations('navigation');

	return (
		<footer className="bg-blue-900 text-white">
			<div className="container mx-auto px-4 py-12">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
					{/* Company Info */}
					<div className="lg:col-span-2">
						<h3 className="text-xl font-bold mb-4">{t('companyName')}</h3>
						<p className="text-blue-100 mb-6 leading-relaxed">
							{t('companyDescription')}
						</p>

						{/* Social Media Links */}
						<div>
							<h4 className="text-lg font-semibold mb-3">{t('followUs')}</h4>
							<div className="flex space-x-4">
								<a
									href="#"
									className="text-blue-100 hover:text-white hover:bg-blue-600 p-2 rounded-full transition-colors"
									aria-label="Facebook"
								>
									<Facebook size={20} />
								</a>
								<a
									href="#"
									className="text-blue-100 hover:text-white hover:bg-blue-600 p-2 rounded-full transition-colors"
									aria-label="Twitter"
								>
									<Twitter size={20} />
								</a>
								<a
									href="#"
									className="text-blue-100 hover:text-white hover:bg-blue-600 p-2 rounded-full transition-colors"
									aria-label="Instagram"
								>
									<Instagram size={20} />
								</a>
								<a
									href="#"
									className="text-blue-100 hover:text-white hover:bg-blue-600 p-2 rounded-full transition-colors"
									aria-label="Youtube"
								>
									<Youtube size={20} />
								</a>
							</div>
						</div>
					</div>

					{/* Quick Links */}
					<div>
						<h4 className="text-lg font-semibold mb-4">{t('quickLinks')}</h4>
						<ul className="space-y-2">
							<li>
								<Link
									href="/"
									className="text-blue-100 hover:text-white transition-colors"
								>
									{tNav('home')}
								</Link>
							</li>
							<li>
								<Link
									href="/about"
									className="text-blue-100 hover:text-white transition-colors"
								>
									{tNav('about')}
								</Link>
							</li>
							<li>
								<a
									href="#products"
									className="text-blue-100 hover:text-white transition-colors"
								>
									{tNav('products')}
								</a>
							</li>
							<li>
								<a
									href="#contact"
									className="text-blue-100 hover:text-white transition-colors"
								>
									{tNav('contact')}
								</a>
							</li>
						</ul>
					</div>

					{/* Contact Info */}
					<div>
						<h4 className="text-lg font-semibold mb-4">{t('contact')}</h4>
						<div className="space-y-3">
							<div className="flex items-start space-x-3">
								<Mail size={16} className="text-orange-500 mt-1 flex-shrink-0" />
								<a
									href={`mailto:${t('email')}`}
									className="text-blue-100 hover:text-white transition-colors"
								>
									{t('email')}
								</a>
							</div>
							<div className="flex items-start space-x-3">
								<Phone size={16} className="text-orange-500 mt-1 flex-shrink-0" />
								<a
									href={`tel:${t('phone')}`}
									className="text-blue-100 hover:text-white transition-colors"
								>
									{t('phone')}
								</a>
							</div>
							<div className="flex items-start space-x-3">
								<MapPin size={16} className="text-orange-500 mt-1 flex-shrink-0" />
								<span className="text-blue-100">
									{t('address')}
								</span>
							</div>
						</div>
					</div>
				</div>

				{/* Bottom Section */}
				<div className="border-t border-blue-700 mt-8 pt-8">
					<div className="flex flex-col md:flex-row justify-between items-center">
						<div className="text-blue-100 text-sm mb-4 md:mb-0">
							© {new Date().getFullYear()} {t('companyName')}. {t('allRightsReserved')}
						</div>
						<div className="flex space-x-6 text-sm">
							<a
								href="#privacy"
								className="text-blue-100 hover:text-white transition-colors"
							>
								{t('privacyPolicy')}
							</a>
							<a
								href="#terms"
								className="text-blue-100 hover:text-white transition-colors"
							>
								{t('termsOfService')}
							</a>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
