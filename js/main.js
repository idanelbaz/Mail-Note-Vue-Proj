import homePage from './pages/homepage.cmp.js';
import theRoutes from './routes.js'
const myRouter = new VueRouter({ routes: theRoutes })




new Vue({
    el:'#app',
    template: `
        <div>
            <home-page></home-page>
        </div>    
    `,
    components: {
        homePage
    },
    router: myRouter
})