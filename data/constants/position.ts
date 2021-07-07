import { ELocale } from 'types';

export const POSITION = {
	frontendEngineer: {
		[ELocale.en]: 'Frontend engineer',
		[ELocale.ru]: 'Разработчик интерфейсов',
	},
	fullstackDeveloper: {
		[ELocale.en]: 'Fullstack developer',
		[ELocale.ru]: 'Фуллстэк-разработчик',
	},
} as const;
