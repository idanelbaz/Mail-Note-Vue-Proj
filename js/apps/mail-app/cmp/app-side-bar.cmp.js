export default {
    name: 'app-side-bar',
    template: `
            <section class="app-side-bar">
                <nav>
                    <router-link  to="/">Inbox</router-link><br>
                    <router-link to="/favorites">Favorites</router-link><br>
                    <router-link to="/trash">Trash</router-link><br>
                    <router-link to="/sent-mail">Sent mail</router-link> 
                    <router-link to="/compose">Conpose</router-link> 
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