import { I18nDateTime } from '$components/i18n-date-time';
import { I18nText } from '$components/i18n-text';
import { Title } from '$components/title';
import { Section } from '$components/section';
import { jobExperience } from '$data/job-experience';
import { Link } from '$components/link';
import { i18n } from '$i18n';

import styles from './job-experience.module.css';
import { useContext } from 'react';
import { contextLocale } from '$components/context-locale';

export function JobExperience() {
	const locale = useContext(contextLocale);

	return (
		<Section title={<I18nText text={i18n.jobExperience.title} />}>
			<ul className={styles.jobList}>
				{jobExperience.map((job, index) => (
					<li key={index} className={styles.job}>
						<div className={styles.companyHeader}>
							<Title className={styles.companyTitle} level={3}>
								{job.company.url?.[locale] ?
									(
										<Link
											href={job.company.url[locale]}
											target="_blank"
											>
											<I18nText text={job.company.title}/>
										</Link>
									) :
									<I18nText text={job.company.title}/>}
								{job.company.description && (
									<span className={styles.companyDescription}>
										<I18nText text={job.company.description} />
									</span>
								)}
							</Title>
							<div className={styles.position}>
								<span className={styles.positionName}>
									<I18nText text={job.position} />
								</span>
								<span className={styles.period}>
									<I18nDateTime
										date={job.start}
										month="long"
										year="numeric"
										/>
									&nbsp;–&nbsp;
									{job.end ?
										(
											<I18nDateTime
												date={job.end}
												month="long"
												year="numeric"
												/>
										) :
										(
											<I18nText text={i18n.jobExperience.untilNow} />
										)}
								</span>
							</div>
						</div>
						<ul className={styles.activities}>
							{job.activities.map((activity, index) => (
								<li key={index} className={styles.acitivity}>
									<I18nText text={activity} />
								</li>
							))}
						</ul>
					</li>
				))}
			</ul>
		</Section>
	);
}
