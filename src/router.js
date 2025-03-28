import { Router } from '@vaadin/router';

export function initRouter(outlet) {
	const router = new Router(outlet);

	router.setRoutes([
		{
			path: '/',
			component: 'main-layout',
			children: [
				{ path: '/', component: 'employee-page' },
				{ path: '/employees', component: 'employee-page' },
			]
		}
	]);
}
