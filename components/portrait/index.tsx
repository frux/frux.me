import imagePortrait from './assets/portrait.png';

import styles from './portrait.module.css';

interface IProps {
	className?: string;
}

export function Portrait(props: IProps) {
	const { className = '' } = props;

	return (
		<div className={`${styles.portrait} ${className}`}>
			<img className={styles.image} src={imagePortrait.src} />
		</div>
	);
}
