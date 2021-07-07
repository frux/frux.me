import { contextLocale } from '$components/context-locale';
import { useContext } from 'react';
import { ELocale, II18n } from 'types';

interface IProps {
	locale?: ELocale;
	text: II18n;
}

export function I18nText(props: IProps) {
	const { text } = props;
	const locale = props.locale ?? useContext(contextLocale);

	return (
		<>{text[locale]}</>
	);
}

export function i18nText(text: II18n, locale: ELocale) {
	return text[locale];
}
