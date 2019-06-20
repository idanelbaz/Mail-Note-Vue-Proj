import searchFilter from './search-filter.cmp.js';


export default {
    name: 'imail-header',
    template: `
            <section class="imail-header">
            <img src="" alt="">
            <search-filter></search-filter>
            <p>little menu</p>
            </section>    
    
    `,
    components: {
        searchFilter,
    }
}