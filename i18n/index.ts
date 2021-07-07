import { ELocale } from 'types';

export const i18n = {
	pageIndex: {
		meta: {
			title: {
				[ELocale.en]: 'Vladimir Kudinov | Frontend-engineer',
				[ELocale.ru]: 'Владимир Кудинов | Фронтэнд-разработчик',
			},
		},
	},
	jobExperience: {
		title: {
			[ELocale.en]: 'Job experience',
			[ELocale.ru]: 'Опыт работы',
		},
		untilNow: {
			[ELocale.en]: 'now',
			[ELocale.ru]: 'настоящее время',
		}
	},
} as const;
