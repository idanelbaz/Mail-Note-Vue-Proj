import { mailService } from '../../../services/imail-service.js';



export default {
    name: 'app-side-bar',
    template: `
            <section class="app-side-bar">
                <img src="../../../../imgs/logo.png" alt="">
                <!-- <nav> 
                    <router-link to="/compose"><i class="el-icon-position side-bar-icon"></i> New Mail</router-link><br>
                    <el-badge :value="12" class="item"><router-link  to="/imail"><i class="el-icon-message side-bar-icon"></i>Inbox</router-link></el-badge><br>
                    <router-link to="/favorites"><i class="el-icon-star-off side-bar-icon"></i>Starred</router-link><br>
                    <router-link to="/trash"><i class="el-icon-delete side-bar-icon"></i>Trash</router-link><br>
                    <router-link to="/sent-mail"><i class="el-icon-folder-opened side-bar-icon"></i>Sent mail</router-link><br>
                </nav> -->
                
        <el-row class="tac">
    <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
    <el-menu-item index="1">
    <i class="el-icon-position side-bar-icon"></i>
    <router-link to="/compose"><span><el-badge :value="12" class="item">New Mail</el-badge></span></router-link>
      </el-menu-item>
    <el-menu-item index="2">
    <i class="el-icon-message side-bar-icon"></i>
    <router-link  to="/imail"><span>Inbox</span></router-link>
      </el-menu-item>
      <el-menu-item index="3">
      <i class="el-icon-star-off side-bar-icon"></i>
      <router-link to="/favorites"><span>Starred</span></router-link>
      </el-menu-item>
      <el-menu-item index="4">
      <i class="el-icon-delete side-bar-icon"></i>
      <router-link to="/trash"><span>Trash</span></router-link>
      </el-menu-item>
      <el-menu-item index="5">
      <i class="el-icon-folder-opened side-bar-icon"></i>
      <router-link to="/sent-mail"><span>Sent mail's</span></router-link>
      </el-menu-item>
    </el-menu>
    </el-row>
                
                <p>You have: {{check}} unread mails</p>
            </section>    
    
    `,
    data() {
        return {
            tabPosition: 'left',
            mailsRead: 0,
        }
    },
    created() {

    },
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        }
    },
    components: {

    },
    computed: {
        check() {
            return mailService.howManyRead()
        }
    },
}