import appHeader from '../../mail-app/cmp/imail-header.cmp.js';
import appSideBar from '../cmp/app-side-bar.cmp.js';
import { mailService } from '../../../services/imail-service.js';

export default {
    name: 'compose',
    template: `
            <section class="compose">
                    <app-header></app-header>
                    <app-side-bar></app-side-bar>
                <div class="new-compose">
                    <form>
                        <h1>New Mail</h1>
                        <p>To: <input type="text" v-model="to" ref="userName"></p>
                        <p>Name: <input type="text" v-model="name"></p>
                        <p>Subject: <input type="text" v-model="subject"></p>
                        <textarea v-model="text" name="" placeholder="Write your mail..."></textarea>
                        <input @click.stop.prevent="sendMail" type="submit" value="Submit"></input>
                    </form>
                </div>
            </section>   
    `,
    data() {
        return {
            to: '',
            name: '',
            subject: '',
            text: '',
        }
    },
    updated() {
        // console.log(this.to)
    },
    mounted() {
        this.$refs.userName.focus();
    },
    methods: {
        sendMail() {
            console.log('Sent Mail')
            mailService.addMail(this.subject, this.name, this.to, this.text)
        }
    },
    components: {
        appHeader,
        appSideBar,
    },
}