import { AppProps } from 'next/app';
import { BLOB, getCSP, NONE, SELF, UNSAFE_INLINE } from 'csp-header';
import Head from 'next/head';
import { Metrika } from '$components/metrika';

import './styles/global.css';
import styles from './_app.module.css';

export default function MyApp({ Component, pageProps }: AppProps) {
	const isDev = process.env.NODE_ENV === 'development';
	const csp = getCSP({
		directives: {
			'default-src': [NONE],
			'script-src': [SELF, 'https://mc.yandex.ru', '\'sha256-AzF/TbZdm7fbX/Fsw9otKG39z1WBYub2Vz+HElT2Yfc=\''],
			'style-src': [isDev ? UNSAFE_INLINE : SELF, 'https://fonts.googleapis.com'],
			'img-src': [SELF, 'https://mc.yandex.ru'],
			'font-src': ['https://fonts.gstatic.com'],
			'connect-src': [isDev ? SELF : '', 'https://mc.yandex.ru'],
			'child-src': [BLOB, 'https://mc.yandex.ru'],
			'frame-src': [BLOB, 'https://mc.yandex.ru'],
			'manifest-src': [SELF],
		},
	});

	return (
		<main className={styles.page}>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta
					httpEquiv="Content-Security-Policy"
					content={csp}
					/>
				<link rel="manifest" href="/site.webmanifest"></link>
				<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
				<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
				<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
			</Head>
			<Component {...pageProps} />
			<Metrika />
		</main>
	);
}
