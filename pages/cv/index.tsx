import PageContentCV from '$components/page-content-cv';
import { ELocale } from '$types';

export default function IndexPage() {
	return (
		<PageContentCV locale={ELocale.ru} />
	);
}
