import homePage from './pages/homepage.cmp.js';
import iMailApp from './apps/mail-app/pages/imail-main.js';
import mailDetails from './apps/mail-app/cmp/imail-details.cmp.js';
import imialCompose from './apps/mail-app/cmp/imail-compose.cmp.js';
import iNoteApp from './apps/inote-app/inote-app.cmp.js'



export default [
    { path: '/', component: homePage },
    { path: '/imail', component: iMailApp },
    { path: '/imail/:theMailId', component: mailDetails },
    { path: '/compose', component: imialCompose },
    { path: '/trash', component: iMailApp },
    { path: '/favorites', component: iMailApp },
    { path: '/inote', component: iNoteApp },
]