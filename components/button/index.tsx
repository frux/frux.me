import { AnchorHTMLAttributes } from 'react';

import styles from './button.module.css';

interface IProps extends AnchorHTMLAttributes<HTMLAnchorElement> {}

export function Button(props: IProps) {
	const { className, ...htmlAttributes } = props;

	return (
		<a className={`${styles.button} ${className}`} {...htmlAttributes} />
	);
}
