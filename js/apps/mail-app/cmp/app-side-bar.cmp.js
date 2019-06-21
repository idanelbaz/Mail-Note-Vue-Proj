export default {
    name: 'app-side-bar',
    template: `
            <section class="app-side-bar">
                <img src="../../../../imgs/logo.png" alt="">
                <nav>
                    <!-- <router-link to="/compose"><i class="el-icon-position side-bar-icon"></i> New Mail</router-link><br>
                    <router-link  to="/imail"><i class="el-icon-message side-bar-icon"></i>Inbox</router-link><br>
                    <router-link to="/favorites"><i class="el-icon-star-off side-bar-icon"></i>Favorites</router-link><br>
                    <router-link to="/trash"><i class="el-icon-delete side-bar-icon"></i>Trash</router-link><br>
                    <router-link to="/sent-mail"><i class="el-icon-folder-opened side-bar-icon"></i>Sent mail</router-link><br> -->
                </nav>
                <el-tabs :tab-position="tabPosition" style="height: 200px;">
                    <el-tab-pane label="New Mail"><router-link to="/compose"><i class="el-icon-position side-bar-icon"></i> New Mail</router-link></el-tab-pane>
                    <el-tab-pane label="Inbox"><router-link  to="/imail"><i class="el-icon-message side-bar-icon"></i>Inbox</router-link></el-tab-pane>
                    <el-tab-pane label="Starred"><router-link to="/favorites"><i class="el-icon-star-off side-bar-icon"></i>Starred</router-link></el-tab-pane>
                    <el-tab-pane label="Trash"><router-link to="/trash"><i class="el-icon-delete side-bar-icon"></i>Trash</router-link></el-tab-pane>
                    <el-tab-pane label="Sent Mails"><router-link to="/sent-mail"><i class="el-icon-folder-opened side-bar-icon"></i>Sent mail</router-link></el-tab-pane>
                </el-tabs>
                <p>unread status</p>
            </section>    
    
    `,
    data() {
        return {
            tabPosition: 'left'
        }
    },
    created() {

    },
    methods: {

    },
    components: {

    }
}