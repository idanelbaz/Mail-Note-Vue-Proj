import homePage from './pages/homepage.cmp.js';
import theRoutes from './routes.js'
const myRouter = new VueRouter({ routes: theRoutes })




new Vue({
    el: '#app',
    template: `
        <div>
            <router-view></router-view>
        </div>    
    `,
    components: {
        homePage
    },
    router: myRouter
})