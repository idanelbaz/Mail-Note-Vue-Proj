import appHeader from '../cmp/imail-header.cmp.js';
import appSideBar from '../cmp/app-side-bar.cmp.js';



export default {
    template: `
      <div>
          <h1>wow</h1>
    <app-header></app-header>
    <app-side-bar></app-side-bar>
    </div>
    `,
    components: {
        appHeader,
        appSideBar,
    },
}