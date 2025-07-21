import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';

export const routing = defineRouting({
	// A list of all locales that are supported
	locales: ['en', 'vi'],

	// Used when no locale matches
	defaultLocale: 'vi',

	// The `pathnames` object holds pairs of internal and
	// external paths. Based on the locale, the external
	// paths are rewritten to the shared, internal ones.
	pathnames: {
		// If all locales use the same pathname, a single
		// string or a template string can be provided.
		// Template strings are supported.
		'/': '/',

		// If locales use different paths, you can
		// specify each external path per locale.
		'/about': {
			en: '/about',
			vi: '/gioi-thieu'
		}
	}
});

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const { Link, redirect, usePathname, useRouter } =
	createNavigation(routing);
