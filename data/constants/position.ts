import { ELocale } from 'types';

export const POSITION = {
	frontendDeveloper: {
		[ELocale.en]: 'Frontend developer',
		[ELocale.ru]: 'Разработчик интерфейсов',
	},
	fullstackDeveloper: {
		[ELocale.en]: 'Fullstack developer',
		[ELocale.ru]: 'Фуллстэк-разработчик',
	},
} as const;
