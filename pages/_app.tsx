import { Metrika } from '$components/metrika';
import { AppProps } from 'next/app';
import Head from 'next/head';

import './styles/global.css';
import styles from './_app.module.css';

export default function MyApp({ Component, pageProps }: AppProps) {
	return (
		<main className={styles.page}>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<Metrika />
			</Head>
			<Component {...pageProps} />
		</main>
	);
}
