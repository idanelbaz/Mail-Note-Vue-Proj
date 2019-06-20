import { mailService } from '../../../services/imail-service.js'

export default {
    name: 'mail-preview',
    template: `
            <section @click="goToMail" v-if="currMail" class="mail-preview">
            <p>{{currMail.senderName}}</p>
            <p>{{currMail.subject}}-</p>
            <p>{{currMail.mailTxt}}</p>
            <p>{{currMail.time}}</p>
            </section>    
    
    `,
    props: ['currMail'],
    data() {
        return {

        }
    },
    created() {

    },
    methods: {
        goToMail() {
            this.$router.push({ path: '/imail/' + this.currMail.id })
        }
    },
    components: {
        
    }
}