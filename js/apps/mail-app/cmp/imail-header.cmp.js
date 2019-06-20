import filter from '../cmp/search-filter.cmp.js';


export default {
    name: 'imail-header',
    template: `
            <section class="imail-header">
            <img src="" alt="">
            <search-filter></search-filter>
            <p>little menu</p>
            </section>    
    
    `,
    data() {
        return {

        }
    },
    created() {

    },
    methods: {

    },
    components: {
        filter,
    }
}