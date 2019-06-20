export default {
    name: 'app-side-bar',
    template: `
            <section class="app-side-bar">
                <button>Compose</button>
                <nav>
                    <router-link  to="/">Inbox</router-link> | 
                    <router-link to="/book">Favorites</router-link> |
                    <router-link to="/about">Trash</router-link> |
                    <router-link to="/addBook">Sent mail</router-link> 
                </nav>
                <p>unread status</p>
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

    }
}