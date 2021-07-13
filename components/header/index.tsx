import { contextLocale } from '$components/context-locale';
import { Link } from '$components/link';
import { config } from '$config';
import { ELocale } from '$types';
import { useRouter } from 'next/dist/client/router';
import { useContext } from 'react';

import styles from './header.module.css';

export function Header() {
	const currentLocale = useContext(contextLocale);
	const router = useRouter();

	return (
		<header className={styles.header}>
			<ul className={styles.locales}>
			{[ELocale.en, ELocale.ru].map(locale => locale !== currentLocale && (
				<li key={locale}>
					<Link href={replaceLocale(router.pathname, currentLocale, locale)}>
						{locale}
					</Link>
				</li>
			))}
			</ul>
		</header>
	);
}

function replaceLocale(pathname: string, from: ELocale, to: ELocale) {
	const fromPrefix = config.locales.basePath[from];
	const toPrefix = config.locales.basePath[to];

	if (pathname.startsWith(fromPrefix)) {
		console.log(pathname, pathname.replace(fromPrefix, toPrefix));
		return pathname.replace(fromPrefix, toPrefix);
	}

	return pathname;
}
