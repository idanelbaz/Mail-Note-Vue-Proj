import imailCompose from './imail-compose.cmp.js';
import { mailService } from '../../../services/imail-service.js'
import appHeader from '../cmp/imail-header.cmp.js';
import appSideBar from '../cmp/app-side-bar.cmp.js';


export default {
    name: 'mail-details',
    template: `
            <section v-if='mail' class="mail-details">
                <app-header></app-header>
                <app-side-bar></app-side-bar>
                    <div class="mail-section">
                    <img :src="mail.profileImg" alt="">  <h1 style="display: inline-block;">{{mail.senderName}}</h1> 
                     <span><{{mail.senderMailAdd}}></span>
                        <p>{{mail.time}}</p>
                        <div>
                            <h1>{{mail.subject}}</h1>
                            {{mail.mailTxt}}
                            <div v-if="showReplay" class="mail-replay">
                                <el-input :disabled="true" :placeholder="senderMail"></el-input>
                                <el-input type="textarea" rows="3" maxlength="100" v-model="text" show-word-limit>

                                </el-input>
                                <el-button @click="sendMail">Send</el-button>
                            </div>
                            <el-button @click="mailReplay" type="danger">{{btnTxt}}</el-button>
                        </div>
                    </div>
            </section>    
   
    `,
    data() {
        return {
            mail: null,
            text: '',
            senderMail: null,
            showReplay: false,
            subject: null,
            senderName: null
        }
    },
    created() {
        const mailId = this.$route.params.theMailId;
        mailService.getById(mailId)
            .then(mail => {
                this.mail = mail;
                this.senderMail = mail.senderMailAdd;
                this.subject = mail.subject;
                this.senderName = mail.senderName;
            })
    },
    methods: {
        mailReplay(){
            this.showReplay = !this.showReplay
            if(this.showReplay === true) return 'Close'
        },
        sendMail() {
            mailService.addMail(this.subject, this.senderName, this.senderMail, this.text)
            this.$router.push({ path: '/sent-mail/' })
            this.$notify({
                title: 'Success',
                message: 'The message sent successfully ',
                type: 'success'
            });
        }
    },
    computed: {
        btnTxt() {
            return (this.showReplay)? 'Close' : 'Replay'
        }
    },
    components: {
        imailCompose,
        appHeader,
        appSideBar
    }
}