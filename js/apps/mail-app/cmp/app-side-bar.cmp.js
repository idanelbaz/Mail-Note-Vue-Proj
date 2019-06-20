export default {
    name: 'app-side-bar',
    template: `
            <section class="app-side-bar">
                <button>Compose</button>
                <nav>
                    <router-link  to="/">Inbox</router-link><br>
                    <router-link to="/book">Favorites</router-link><br>
                    <router-link to="/about">Trash</router-link><br>
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