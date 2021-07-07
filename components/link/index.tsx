import { AnchorHTMLAttributes } from 'react';
import NextLink from 'next/link';
import styles from './link.module.css';

interface IProps extends AnchorHTMLAttributes<HTMLAnchorElement> {}

export function Link(props: IProps) {
	const { children, className, href, ...htmlAttributes } = props;

	return (
		<NextLink href={String(href)} passHref>
			<a className={`${styles.link} ${className}`} {...htmlAttributes}>{children}</a>
		</NextLink>
	);
}
