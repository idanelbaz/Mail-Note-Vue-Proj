import homePage from './pages/homepage.cmp.js';
import iMailApp from './apps/mail-app/pages/imail-main.js';
import mailDetails from './apps/mail-app/cmp/imail-details.cmp.js'



export default [
    { path: '/', component: homePage },
    { path: '/imail', component: iMailApp },
    { path: '/imail/:theMailId', component: mailDetails },
]