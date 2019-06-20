import imailApp from './apps/mail-app/iMail.js';
import theRoutes from './routes.js'

const myRouter = new VueRouter({ routes: theRoutes })

var app = new Vue({
    el: '#app',
    mounted() {

    },
    template: `
      <div>
    <imail-app></imail-app>
    <!-- <inote-app></inote-app> -->
    </div>
    `,

    data: {

    },

    computed: {

    },
    methods: {


    },
    components: {
        imailApp,
    },
    router: myRouter
})