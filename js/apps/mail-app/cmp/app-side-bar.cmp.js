export default {
    name: 'app-side-bar',
    template: `
            <section class="app-side-bar">
                <nav>
                    <router-link to="/compose"><i class="el-icon-position side-bar-icon"></i> New Mail</router-link><br>
                    <router-link  to="/imail"><i class="el-icon-message side-bar-icon"></i>Inbox</router-link><br>
                    <router-link to="/favorites"><i class="el-icon-star-off side-bar-icon"></i>Favorites</router-link><br>
                    <router-link to="/trash"><i class="el-icon-delete side-bar-icon"></i>Trash</router-link><br>
                    <router-link to="/sent-mail"><i class="el-icon-folder-opened side-bar-icon"></i>Sent mail</router-link><br>
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