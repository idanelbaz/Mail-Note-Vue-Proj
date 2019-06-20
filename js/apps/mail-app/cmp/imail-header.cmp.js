import searchFilter from './search-filter.cmp.js';


export default {
    name: 'imail-header',
    template: `
        <section class="imail-header">
            <search-filter></search-filter>
            <img src="../../../../imgs/logo.png" alt="">
            <p>little menu</p>
        </section>    
        `,
    components: {
        searchFilter,
    }
}