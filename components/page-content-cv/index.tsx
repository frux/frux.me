import Head from 'next/head';
import { i18nText } from '$components/i18n-text';
import { Competencies } from '$components/competencies';
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
		<>
			<contextLocale.Provider value={locale}>
				<Header />
				<Profile />
				<Competencies />
				<Head>
					<title>{i18nText(i18n.pageIndex.meta.title, locale)}</title>
				</Head>
				<JobExperience />
			</contextLocale.Provider>
		</>
	);
}
