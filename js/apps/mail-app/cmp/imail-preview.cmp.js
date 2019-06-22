import { mailService } from '../../../services/imail-service.js'
import subjectText from '../cmp/subject-text.cmp.js'

export default {
    name: 'mail-preview',
    template: `
        <section v-if="currMail" @click.stop="goToMail"  class="mail-preview" :class="{ read: isRead }" >
        <el-table  :data="tableData" style="width: 100%">
            <el-table-column prop="date" label="Date"  width="180">
            </el-table-column>
            <el-table-column prop="name" label="Name">
            </el-table-column>
            <el-table-column prop="subject" label="Subject">
            </el-table-column>
            <el-table-column prop="msg" label="Message">
            <subject-Text @click.stop="goToMail" :txt="currMail.mailTxt"></subject-Text>
            </el-table-column>
            <el-table-column prop="msg" label="Actions">
            <div class="mail-icons">
                <button  @click.stop="moveItemToTrash"><i class="el-icon-delete-solid"></i></button>
                <button  @click.stop="moveItemToFav"><i class="el-icon-star-off" :class ="checkIfFav"></i></button>
            </div>
            </el-table-column>
        </el-table>
            </section>
            <!-- <p @click.stop="goToMail">{{currMail.senderName}}</p>
            <subject-Text @click.stop="goToMail" :txt="currMail.mailTxt"></subject-Text>
            <p @click.stop="goToMail">{{currMail.subject}}</p>
            <p @click.stop="goToMail">{{currMail.time}}</p>
           
           <div class="mail-icons">
                <button  @click.stop="moveItemToTrash"><i class="el-icon-delete-solid"></i></button>
                <button  @click.stop="moveItemToFav"><i class="el-icon-star-off" :class ="checkIfFav"></i></button>
           </div>
            -->
    `,
    props: ['currMail'],
    data() {
        return {
            isRead: false,
            tableData: [{
                date: this.currMail.time,
                name: this.currMail.senderName,
                subject: this.currMail.subject,
                msg: null,
            }],
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