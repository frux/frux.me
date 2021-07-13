import { ELocale } from 'types';

export const POSITION = {
	frontendDeveloper: {
		[ELocale.en]: 'Frontend developer',
		[ELocale.ru]: 'Фронтенд-разработчик',
	},
	fullstackDeveloper: {
		[ELocale.en]: 'Fullstack developer',
		[ELocale.ru]: 'Фуллстэк-разработчик',
	},
} as const;
