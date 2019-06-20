import appHeader from './cmp/imail-header.cmp.js';
import appSideBar from './cmp/app-side-bar.cmp.js';



export default {
    el: '#app',
    mounted() {
        console.log('App has been Mounted!');
    },
    template: `
      <div>
          <h1>wow</h1>
    <app-header></app-header>
    <app-side-bar></app-side-bar>
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
}