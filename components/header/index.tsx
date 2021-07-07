import { contextLocale } from '$components/context-locale';
import { Link } from '$components/link';
import { ELocale } from '$types';
import { useContext } from 'react';

import styles from './header.module.css';

export function Header() {
	const currentLocale = useContext(contextLocale);

	return (
		<header className={styles.header}>
			<ul className={styles.locales}>
			{[ELocale.en, ELocale.ru].map(locale => locale !== currentLocale && (
				<li key={locale}>
					<Link href={locale === ELocale.ru ? '/' : `/${locale}`}>
						{locale}
					</Link>
				</li>
			))}
			</ul>
		</header>
	);
}
