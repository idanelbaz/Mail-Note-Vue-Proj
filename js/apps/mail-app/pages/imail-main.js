import appHeader from '../cmp/imail-header.cmp.js';
import appSideBar from '../cmp/app-side-bar.cmp.js';
import appList from '../cmp/imail.mail-list.cmp.js'



export default {
    mounted() {
        console.log('App has been Mounted!');
    },
    template: `
      <div>
    <app-header></app-header>
    <app-side-bar></app-side-bar>
    <app-list></app-list>
    </div>
    `,
    components: {
        appHeader,
        appSideBar,
        appList,

    },
}