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
                            <span>{{mail.time}}</span>
                        <div>
                            <h1>{{mail.subject}}</h1>
                            <p>{{mail.mailTxt}}</p>
                            <el-button @click="mailReplay" type="danger">{{btnTxt}}</el-button>
                            <div v-if="showReplay" class="mail-replay">
                                <el-input :disabled="true" :placeholder="senderMail"></el-input>
                                <el-input type="textarea" rows="3" placeholder="Write your reply..." maxlength="100" v-model="text" show-word-limit>
                                </el-input>
                                <el-button @click="sendMail">Send</el-button>
                            </div>
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
                this.subject = 'RE:' + mail.subject;
                this.senderName = mail.senderName;
            })
    },
    methods: {
        mailReplay() {
            this.showReplay = !this.showReplay
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
            return (this.showReplay) ? 'Close' : 'Reply'
        }
    },
    components: {
        imailCompose,
        appHeader,
        appSideBar
    }
}