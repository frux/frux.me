import { ELocale, II18n } from '$types';

export const COMPANY = {
	followWay: {
		title: {
			[ELocale.en]: 'FollowWay',
			[ELocale.ru]: 'FollowWay',
		},
		description: {
			[ELocale.en]: 'Dance sport social network',
			[ELocale.ru]: 'Социальная сеть сообщества спортивного бального танца'
		},
		url: {
			[ELocale.en]: 'https://web.archive.org/web/20190825061310/http://followway.com/',
			[ELocale.ru]: 'https://web.archive.org/web/20190825061310/http://followway.com/',
		},
	},
	intec: {
		title: {
			[ELocale.en]: 'INTEC',
			[ELocale.ru]: 'INTEC',
		},
		description: {
			[ELocale.en]: 'Website development agency',
			[ELocale.ru]: 'Интернет-агентство, занимающееся разработкой сайтов и продвижением в интернете',
		},
		url: {
			[ELocale.en]: 'http://intecsite.com',
			[ELocale.ru]: 'https://intecweb.ru',
		},
	},
	yandex: {
		title: {
			[ELocale.en]: 'Yandex',
			[ELocale.ru]: 'Яндекс',
		},
		description: {
			[ELocale.en]: 'Russian corporation providing over 70 Internet-related products and services, including transportation, search and information services, e-commerce, navigation and online advertising',
			[ELocale.ru]: 'Российская компания, предоставляющая более 70 продуктов и сервисов, включая транспорт, поисковые и информационные сервисы, e-commerce, навигацию и онлайн-рекламу'
		},
		url: {
			[ELocale.en]: 'https://yandex.com',
			[ELocale.ru]: 'https://yandex.ru'
		},
	},
} as const;

export interface ICompany {
	title: II18n;
	description?: II18n;
	url?: II18n;
}
