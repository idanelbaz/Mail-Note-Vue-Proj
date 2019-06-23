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
                        <p>Name: <input type="email" v-model="name" required></p>
                        <p>Mail: <input type="text" v-model="to" ref="userName"></p>
                        <p>Subject: <input type="text" v-model="subject"></p>
                        <textarea v-model="text" name="" placeholder="Write your mail..."></textarea>
                        <input @click.stop.prevent="sendMail" type="submit" value="Submit">
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
            if (!this.name) return this.name = 'Cannot processes without name'
            if (!this.to) return this.to = 'Cannot processes without mail'
            if (!this.subject) return this.subject = 'Cannot processes without subject'
            if (!this.text) return this.text = 'Cannot processes without text'
            mailService.addMail(this.subject, this.name, this.to, this.text)
            this.$router.push({ path: '/imail' })
            this.$notify({
                title: 'Success',
                message: 'The message sent successfully ',
                type: 'success'
            });
        }
    },
    components: {
        appHeader,
        appSideBar,
    },
}