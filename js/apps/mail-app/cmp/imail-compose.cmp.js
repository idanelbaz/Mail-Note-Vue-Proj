import appHeader from '../../mail-app/cmp/imail-header.cmp.js';
import appSideBar from '../cmp/app-side-bar.cmp.js';

export default {
    name: 'compose',
    template: `
            <section class="compose">
            <app-header></app-header>
            <app-side-bar></app-side-bar>
            </section>    
    
    `,
    props: ['mail'],
    data() {
        return {

        }
    },
    created() {

    },
    methods: {

    },
    components: {
        appHeader,
        appSideBar,
    },
}