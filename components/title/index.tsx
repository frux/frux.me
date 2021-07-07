import styles from './title.module.css';

interface IProps {
	children: React.ReactNode;
	className?: string;
	level: 1 | 2 | 3 | 4 | 5 | 6;
}

export function Title(props: IProps) {
	const { children, className = '', level } = props;
	const TagName = `h${level}` as const;

	return (
		<TagName className={`${styles.title} ${styles[`level${level}`]} ${className}`}>{children}</TagName>
	);
}
