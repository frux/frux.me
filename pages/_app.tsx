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
			'img-src': ['https://mc.yandex.ru'],
			'font-src': ['https://fonts.gstatic.com'],
			'connect-src': [isDev ? SELF : '', 'https://mc.yandex.ru'],
			'child-src': [BLOB, 'https://mc.yandex.ru'],
			'frame-src': [BLOB, 'https://mc.yandex.ru'],
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
			</Head>
			<Component {...pageProps} />
			<Metrika />
		</main>
	);
}
