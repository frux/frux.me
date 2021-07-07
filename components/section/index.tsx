import { Title } from '$components/title';

import styles from './section.module.css';

interface IProps {
	children: React.ReactNode;
	className?: string;
	title?: React.ReactNode;
}

export function Section(props: IProps) {
	const { children, className, title } = props;

	return (
		<section className={`${styles.section} ${className}`}>
			{title && <Title className={styles.title} level={2}>{title}</Title>}
			{children}
		</section>
	);
}
