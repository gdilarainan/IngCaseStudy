import './src/main-layout.js';
import './src/components/nav-menu.js';
import './src/pages/employee-page.js';

import { initRouter } from './src/router.js';

const outlet = document.getElementById('outlet');
initRouter(outlet);
