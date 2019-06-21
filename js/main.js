import homePage from './pages/homepage.cmp.js';
import appHeader from './pages/app-header.cmp.js'
import theRoutes from './routes.js'
const myRouter = new VueRouter({ routes: theRoutes })




new Vue({
    el: '#app',
    template: `
        <div>
            <app-header></app-header>
            <router-view></router-view>
        </div>    
    `,
    components: {
        homePage,
        appHeader
    },
    router: myRouter
})