import appHeader from './cmp/imail-header.cmp.js';
import appSideBar from './cmp/app-side-bar.cmp.js';
import theRoutes from './routes.js'

const myRouter = new VueRouter({ routes: theRoutes })

export default {
    el: '#app',
    mounted() {
        console.log('App has been Mounted!');
    },
    template: `
      <div>
    <app-header></app-header>
    <app-side-bar></app-side-bar>
    <router-view></router-view>
    </div>
    `,

    data: {

    },

    computed: {

    },
    methods: {


    },
    components: {
        appHeader,
        appSideBar,
    },
    router: myRouter
}