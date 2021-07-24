import { Link } from '$components/link';
import { profile } from '$data/profile';

export function Contacts() {
	return (
		<address>
			<Link href={`mailto:${profile.contacts.email}`}>{profile.contacts.email}</Link>
		</address>
	);
}
