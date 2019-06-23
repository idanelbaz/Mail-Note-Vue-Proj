import searchFilter from './search-filter.cmp.js';


export default {
    name: 'imail-header',
    template: `
        <section class="imail-header">
                    <search-filter v-if="notDetails"></search-filter>
        </section> 
        `,
    components: {
        searchFilter,
    },
    computed: {
        notDetails() {
            console.log(this.$route.path)
            if (this.$route.path === '/imail' || this.$route.path === '/trash' || this.$route.path === '/favorites' || this.$route.path === '/sent-mail')
                return true;
            else return false;
        }
    }
}