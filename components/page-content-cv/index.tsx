import Head from 'next/head';
import { i18nText } from '$components/i18n-text';
import { JobExperience } from '$components/job-experience';
import { i18n } from '$i18n';
import { Profile } from '$components/profile';
import { ELocale } from '$types';
import { contextLocale } from '$components/context-locale';
import { Header } from '$components/header';

interface IProps {
	locale: ELocale;
}

export default function PageContentCV(props: IProps) {
	const { locale } = props;

	return (
		<contextLocale.Provider value={locale}>
			<Head>
				<title>{i18nText(i18n.pageCV.meta.title, locale)}</title>
				<meta name="description" content={i18nText(i18n.pageCV.meta.description, locale)} />
				<meta name="keywords" content={i18n.pageCV.meta.keywords.join(' ')} />
			</Head>
			<Header />
			<Profile />
			<JobExperience />
		</contextLocale.Provider>
	);
}
