import { ELocale } from '$types';

export const config = {
	locales: {
		available: [ELocale.en, ELocale.ru],
		basePath: {
			[ELocale.en]: '/en/',
			[ELocale.ru]: '/',
		},
	},
};
