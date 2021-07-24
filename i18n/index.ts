import { ELocale } from 'types';

export const i18n = {
	pageCV: {
		meta: {
			title: {
				[ELocale.en]: 'Vladimir Kudinov | Frontend-engineer',
				[ELocale.ru]: 'Владимир Кудинов | Фронтенд-разработчик',
			},
			description: {
				[ELocale.en]: 'Vladimir Kudinov is a frontend developer from Saint-Petersburg, Russia',
				[ELocale.ru]: 'Владимир Кудинов – фронтенд-разработчик из Санкт-Петербурга',
			},
			keywords: [
				'Vladimir Kudinov',
				'frontend',
				'developer',
				'cv',
				'Владимир Кудинов',
				'фронтенд',
				'разработчик',
				'резюме',
			],
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
		},
	},
	profile: {
		education: {
			[ELocale.en]: 'Education',
			[ELocale.ru]: 'Образование',
		},
	},
};
