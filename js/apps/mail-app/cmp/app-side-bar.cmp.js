export default {
    name: 'app-side-bar',
    template: `
            <section class="app-side-bar">
                <button @click="openCompose">Compose</button>
                <nav>
                    <router-link  to="/">Inbox</router-link><br>
                    <router-link to="/favorites">Favorites</router-link><br>
                    <router-link to="/trash">Trash</router-link><br>
                    <router-link to="/sent-mail">Sent mail</router-link> 
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
        openCompose() {
            this.$router.push({ path: '/imail/compose' })
        }
    },
    components: {

    }
}