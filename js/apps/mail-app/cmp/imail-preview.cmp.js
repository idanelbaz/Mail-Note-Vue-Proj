import { mailService } from '../../../services/imail-service.js'

export default {
    name: 'mail-preview',
    template: `
            <section  @click.stop="goToMail" v-if="currMail"  class="mail-preview" :class="{ read: isRead }" >
            <p>{{currMail.senderName}}</p>
            <p>{{currMail.subject}}-</p>
            <p>{{currMail.mailTxt}}</p>
            <p>{{currMail.time}}</p>
            </section>    
    
    `,
    props: ['currMail'],
    data() {
        return {
            isRead: false,
        }
    },
    created() {
        if (this.currMail.isRead === true) {
            this.isRead = true;
        }
    },
    methods: {
        goToMail() {
            mailService.makeRead(this.currMail);
            this.$router.push({ path: '/imail/' + this.currMail.id })
        }
    },
    components: {

    }
}