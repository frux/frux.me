import styles from './native-scroll.module.css';

interface IProps {
	children: React.ReactNode;
	className?: string;
	contentClassName?: string;
}

export function NativeScroll(props: IProps) {
	const { children, className = '', contentClassName = '' } = props;

	return (
		<div className={`${styles.nativeScroll} ${className}`}>
			<div className={`${styles.content} ${contentClassName}`}>
				{children}
			</div>
		</div>
	);
}
