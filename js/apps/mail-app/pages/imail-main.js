import appHeader from '../cmp/imail-header.cmp.js';
import appSideBar from '../cmp/app-side-bar.cmp.js';
import appList from '../cmp/imail.mail-list.cmp.js'



export default {
    mounted() {
        console.log('App has been Mounted!');
    },
    template: `
<<<<<<< HEAD
      <div>
    <app-header></app-header>
    <app-side-bar></app-side-bar>
    <app-list></app-list>
    </div>
=======
        <div class="imail-main">
            <app-header></app-header>
            <app-side-bar></app-side-bar>
            <app-list></app-list>
        </div>
>>>>>>> 4d79bb58f1e04ae24fce48f7727e0455f61c80ce
    `,
    components: {
        appHeader,
        appSideBar,
        appList,

    },
}