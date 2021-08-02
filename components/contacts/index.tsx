import { Button } from '$components/button';
import IconMail from '$components/icons/mail.svg';
import IconGithub from '$components/icons/github.svg';
import { profile } from '$data/profile';

import styles from './contacts.module.css';

interface IProps {
	className?: string;
}

export function Contacts(props: IProps) {
	const { className } = props;

	return (
		<address className={`${styles.contacts} ${className}`}>
			<ul className={styles.links}>
				<li className={styles.link}>
					<Button rel="noopener nofollow" href={`mailto:${profile.contacts.email}`}>
						<IconMail />
					</Button>
				</li>
				<li className={styles.link}>
					<Button target="_blank" rel="noopener nofollow" href="https://github.com/frux">
						<IconGithub />
					</Button>
				</li>
			</ul>
		</address>
	);
}
