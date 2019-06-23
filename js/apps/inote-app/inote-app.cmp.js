import inoteText from './cmp/inote-text.cmp.js'
import inoteList from './cmp/inotes-list.cmp.js'
import inotePinnedList from './cmp/inote-pinned-list.cmp.js'
import { noteService } from '../../../js/services/inote-service.js'



export default {
    template: `
        <div v-if="notes" class="inote-main">
            <inote-text></inote-text>
            <el-divider><i class="el-icon-paperclip"></i></el-divider>
            <inote-list :pinNotes="notesOfPin" ></inote-list>
            <el-divider></el-divider>
            <inote-list :pinNotes="notesNotPin"></inote-list>
        </div>
    `,
    data() {
        return {
            notes: null,
        }
    },

    computed: {
        notesOfPin() {
            return this.notes.filter(note => {
                return note.isPinned;
            })
        },
        notesNotPin() {
            return this.notes.filter(note => {
                return !note.isPinned;
            })
        }
    },

    created() {
        noteService.query()
            .then(notes => {
                this.notes = notes
                console.log(notes)
            })
    },
    components: {
        inoteText,
        inoteList,
        inotePinnedList
    },
}