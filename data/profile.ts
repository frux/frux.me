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
	contacts: {
		email: 'mail@frux.me',
	},
	summary: {
		university: {
			name: {
				[ELocale.en]: 'South Ural state university',
				[ELocale.ru]: 'Южно-Уральский государственный университет',
			},
			url: {
				[ELocale.en]: 'https://www.susu.ru/en',
				[ELocale.ru]: 'https://www.susu.ru',
			},
			year: 2013,
		},
		location: {
			[ELocale.en]: 'Saint Petersburg, Russia',
			[ELocale.ru]: 'Россия, Санкт-Петербург',
		},
	},
};
