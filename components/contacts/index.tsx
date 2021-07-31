import { Button } from '$components/button';
import IconMail from '$components/icons/mail.svg';
import { profile } from '$data/profile';

interface IProps {
	className?: string;
}

export function Contacts(props: IProps) {
	const { className } = props;

	return (
		<address className={className}>
			<Button href={`mailto:${profile.contacts.email}`}>
				<IconMail />
			</Button>
		</address>
	);
}
