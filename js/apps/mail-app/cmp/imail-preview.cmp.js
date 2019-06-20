import { mailService } from '../../../services/imail-service.js'
import subjectText from '../cmp/subject-text.cmp.js'

export default {
    name: 'mail-preview',
    template: `
            <section  v-if="currMail"  class="mail-preview" :class="{ read: isRead }" >
            <p @click.stop="goToMail">{{currMail.senderName}}</p>
            <subject-Text @click.stop="goToMail" :txt="currMail.mailTxt"></subject-Text>
            <p @click.stop="goToMail">{{currMail.subject}}</p>
            <p @click.stop="goToMail">{{currMail.time}}</p>
           <div class="mail-icons">
                <button  @click.stop="moveItemToTrash"><i class="el-icon-delete-solid"></i></button>
                <button  @click.stop="moveItemToFav"><i class="el-icon-star-off" :class ="checkIfFav"></i></button>
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
    computed: {
        checkIfFav() {
            if (this.currMail.isFav) return 'yellow';
        }

    },
    methods: {
        goToMail() {
            mailService.makeRead(this.currMail);
            this.$router.push({ path: '/imail/' + this.currMail.id })
        },
        moveItemToTrash() {
            mailService.moveToTrash(this.currMail);
            this.$router.push({ path: '/imail/' })
        },
        moveItemToFav() {
            mailService.moveToFav(this.currMail);
            this.$router.push({ path: '/imail/' })
        }
    },
    components: {
        subjectText
    }
}