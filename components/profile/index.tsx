import { I18nText } from '$components/i18n-text';
import { Section } from '$components/section';
import { Title } from '$components/title';
import { profile } from '$data/profile';

export function Profile() {
	return (
		<Section>
			<Title level={1}>
				<I18nText text={profile.firstName} />
				{' '}
				<I18nText text={profile.lastName} />
			</Title>
		</Section>
	);
}
