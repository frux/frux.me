import { NativeScroll } from '$components/native-scroll';
import { Section } from '$components/section';
import { competencies } from '$data/competencies';

import styles from './competencies.module.css';

export function Competencies() {
	return (
		<Section className={styles.competencies}>
			<NativeScroll contentClassName={styles.scroll}>
				<ul className={styles.competenciesList}>
					{competencies.map(competency => (
						<li key={competency} className={styles.competency}>
							{competency}
						</li>
					))}
				</ul>
			</NativeScroll>
		</Section>
	);
}
