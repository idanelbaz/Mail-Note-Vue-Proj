import { mailService } from '../../../services/imail-service.js'
import subjectText from '../cmp/subject-text.cmp.js'

export default {
    name: 'mail-preview',
    template: `
            <section  @click.stop="goToMail" v-if="currMail"  class="mail-preview" :class="{ read: isRead }" >
            <p>{{currMail.senderName}}</p>
            <subjectText :txt="currMail.mailTxt"></subjectText>
            <p>{{currMail.subject}}</p>
            <p>{{currMail.time}}</p>
           <div class="mail-icons">
                <button><i class="el-icon-delete-solid"></i></button>
                <button><i class="el-icon-star-off"></i></button>
           </div>
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
        subjectText
    }
}