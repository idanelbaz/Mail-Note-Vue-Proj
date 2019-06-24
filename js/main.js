import homePage from './pages/homepage.cmp.js';
import appHeader from './pages/app-header.cmp.js'
import theRoutes from './routes.js'
const myRouter = new VueRouter({ routes: theRoutes })




new Vue({
    el: '#app',
    template: `
        <div>
            <app-header></app-header>
                <transition name="router-anim" enter-active-class="animated fadeInRight delay-1s" leave-active-class="animated fadeOutRight">
            <router-view></router-view>
                </transition>
        </div>    
    `,
    components: {
        homePage,
        appHeader
    },
    router: myRouter
})