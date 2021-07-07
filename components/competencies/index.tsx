import { Section } from '$components/section';
import { competencies } from '$data/competencies';

import styles from './competencies.module.css';

export function Competencies() {
	return (
		<Section className={styles.competencies}>
			<ul className={styles.competenciesList}>
				{competencies.map(competency => (
					<li key={competency} className={styles.competency}>
						{competency}
					</li>
				))}
			</ul>
		</Section>
	);
}
