import { ELocale } from '$types';

export const profile = {
	firstName: {
		[ELocale.en]: 'Vladimir',
		[ELocale.ru]: 'Владимир',
	},
	lastName: {
		[ELocale.en]: 'Kudinov',
		[ELocale.ru]: 'Кудинов',
	},
} as const;
