import { useContext } from 'react';
import { Contacts } from '$components/contacts';
import IconLocation from '$components/icons/location.svg';
import { contextLocale } from '$components/context-locale';
import { i18nText, I18nText } from '$components/i18n-text';
import { Link } from '$components/link';
import { Section } from '$components/section';
import { Title } from '$components/title';
import { Hashtags } from '$components/hashtags';
import { profile } from '$data/profile';
import { i18n } from '$i18n';

import styles from './profile.module.css';

export function Profile() {
	const locale = useContext(contextLocale);

	return (
		<Section>
			<div className={styles.topLine}>
				<Title className={styles.name} level={1}>
					<I18nText text={profile.firstName} />
					{' '}
					<I18nText text={profile.lastName} />
				</Title>
				<Contacts className={styles.contacts} />
			</div>
			<Hashtags />
			<ul className={styles.profile}>
				<li className={styles.profileItem}>
					<IconLocation className={styles.itemIcon} />
					<I18nText text={profile.summary.location} />
				</li>
				<li className={styles.profileItem}>
					<span className={styles.profileKey}>
						<I18nText text={i18n.profile.education} />
					</span>
					<Link href={i18nText(profile.summary.university.url, locale)}>
						<I18nText text={profile.summary.university.name} />
					</Link>
					&nbsp;({profile.summary.university.year})
				</li>
			</ul>
		</Section>
	);
}
