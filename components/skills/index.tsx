import { NativeScroll } from '$components/native-scroll';
import { Section } from '$components/section';
import { skills } from '$data/skills';

import styles from './skills.module.css';

export function Skills() {
	return (
		<Section className={styles.skills}>
			<NativeScroll contentClassName={styles.scroll}>
				<ul className={styles.skillsList}>
					{skills.map(skill => (
						<li key={skill} className={styles.skill}>
							{skill}
						</li>
					))}
				</ul>
			</NativeScroll>
		</Section>
	);
}
