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
                    <img :src="mail.profileImg" alt="">  <h1 style="display: inline-block;">{{mail.senderName}}</h1>  <span><{{mail.senderMailAdd}}></span>
                        <p>{{mail.time}}</p>
                        <div>
                            <h1>{{mail.subject}}</h1>
                            {{mail.mailTxt}}
                            <button>Replay</button>
                        </div>
                    </div>
            </section>    
   
    `,
    data() {
        return {
            mail: null,
        }
    },
    created() {
        const mailId = this.$route.params.theMailId;
        mailService.getById(mailId)
            .then(mail => {
                this.mail = mail;
            })
    },
    methods: {

    },
    components: {
        imailCompose,
        appHeader,
        appSideBar
    }
}