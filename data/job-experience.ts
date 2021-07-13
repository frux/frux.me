import { COMPANY, ICompany } from './constants/company';
import { POSITION } from './constants/position';
import { ELocale, II18n } from '../types';

export const jobExperience: Readonly<IJob[]> = [
	{
		company: COMPANY.yandex,
		position: POSITION.frontendDeveloper,
		start: new Date('2014-12-08:00:00Z'),
		activities: [
			{
				[ELocale.en]: 'Made frontend of some public and internal services (Local, Cloud, Sport)',
				[ELocale.ru]: 'В разное время разрабатывал фронтенд публичных и внутренних сервисов (Район, Облако, Спорт)',
			},
			{
				[ELocale.en]: 'Made promo websites for different events and services',
				[ELocale.ru]: 'Делал промо-сайты для различных мероприятий и сервисов Яндекса',
			},
			{
				[ELocale.en]: 'Designed complex features, decomposed large tasks, planned development process',
				[ELocale.ru]: 'Проектировал сложные фичи, декомпозировал большие задачи, планировал процесс разработки',
			},
			{
				[ELocale.en]: 'Wrote code, reviewed, configured CI/CD',
				[ELocale.ru]: 'Писал код, верстал, ревьюил, настраивал CI/CD',
			},
			{
				[ELocale.en]: 'DevOps (instances, balancers, logs, monitorings and so on)',
				[ELocale.ru]: '«Девопсил» (инстансы, балансеры, логи, мониторинги, вот это всё)',
			},
			{
				[ELocale.en]: 'Planned, calculated and ordered resources for service',
				[ELocale.ru]: 'Планировал, расчитывал и заказывал «железо» для сервиса',
			},
			{
				[ELocale.en]: 'Maintained some infrastructure tools and libraries',
				[ELocale.ru]: 'Мэйнтэйнил несколько инфраструктурных инструментов и библиотек',
			},
			{
				[ELocale.en]: 'Improved reliability of high-load service',
				[ELocale.ru]: 'Участвовал в повышении стабильности высоконагруженного сервиса',
			},
			{
				[ELocale.en]: 'Tuned development processes in my team',
				[ELocale.ru]: 'Участвовал в «настройке» процессов разработки в команде',
			},
		],
	},
	{
		company: COMPANY.followWay,
		position: POSITION.fullstackDeveloper,
		start: new Date('2012-03-01T00:00:00Z'),
		end: new Date('2014-11-30T00:00:00Z'),
		activities: [
			{
				[ELocale.en]: 'Developed frontend and backend',
				[ELocale.ru]: 'Разрабатывал фронтенд и бэкенд',
			},
			{
				[ELocale.en]: 'Managing database',
				[ELocale.ru]: 'Администрировал базу данных',
			},
			{
				[ELocale.en]: 'Maintaining legacy codebase',
				[ELocale.ru]: 'Поддерживал легаси-код',
			},
		],
	},
	{
		company: COMPANY.intec,
		position: POSITION.fullstackDeveloper,
		start: new Date('2011-03-01T00:00:00Z'),
		end: new Date('2012-02-01T00:00:00Z'),
		activities: [
			{
				[ELocale.en]: 'Developed corporate websites based on CMS',
				[ELocale.ru]: 'Разрабатывал корпоративные сайты на базе CMS',
			},
		],
	},
];

export interface IJob {
	company: ICompany,
	position: II18n;
	activities: II18n[],
	start: Date;
	end?: Date;
}
