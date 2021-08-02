import { NativeScroll } from '$components/native-scroll';
import { Section } from '$components/section';
import { hashtags } from '$data/hashtags';

import styles from './hashtags.module.css';

interface IProps {
	className?: string;
}

export function Hashtags(props: IProps) {
	const { className = '' } = props;

	return (
		<Section className={`${styles.hashtags} ${className}`}>
			<NativeScroll contentClassName={styles.scroll}>
				<ul className={styles.hashtagsList}>
					{hashtags.map(hashtag => (
						<li key={hashtag} className={styles.hashtag}>
							{hashtag}
						</li>
					))}
				</ul>
			</NativeScroll>
		</Section>
	);
}
