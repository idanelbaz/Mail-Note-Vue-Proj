import searchFilter from './search-filter.cmp.js';


export default {
    name: 'imail-header',
    template: `
        <section class="imail-header">
            <img src="../../../../imgs/logo.png" alt="">
            <search-filter></search-filter>
        </section>    
        `,
    components: {
        searchFilter,
    }
}