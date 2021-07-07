import { contextLocale } from '$components/context-locale';
import { useContext } from 'react';

interface IProps extends Intl.DateTimeFormatOptions {
	date: Date;
}

export function I18nDateTime(props: IProps) {
	const { date, ...intlOptions } = props;
	const locale = useContext(contextLocale);

	return (
		<time dateTime={date.toISOString()}>{new Intl.DateTimeFormat(locale, intlOptions).format(date)}</time>
	);
}
