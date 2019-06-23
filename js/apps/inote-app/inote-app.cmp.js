import inoteText from './cmp/inote-text.cmp.js'
import inoteList from './cmp/inotes-list.cmp.js'
import inotePinnedList from './cmp/inote-pinned-list.cmp.js'
import { noteService } from '../../../js/services/inote-service.js'
import eventBus from '../../event-bus.js';



export default {
    template: `
        <div v-if="notes"  class="inote-main">
            <inote-text></inote-text>
            <el-divider><i class="el-icon-paperclip"></i></el-divider>
            <inote-list :notesOfPin="filterNotes" :pinNotes="notesOfPin"></inote-list>
            <el-divider></el-divider>
            <inote-list :notesNotPin="filterNotes" :pinNotes="notesNotPin"></inote-list>
        </div>
    `,
    data() {
        return {
            notes: null,
            filter: '',
        }
    },

    computed: {
        notesOfPin() {
            let notesTorender = this.notes.filter(note => {
                return note.isPinned;
            })
            return notesTorender.filter(note => {
                if (this.filter === 'all' || !this.filter) return note;
                else return note.type === this.filter;
            })

        },
        notesNotPin() {
            let notesTorender = this.notes.filter(note => {
                return !note.isPinned;
            })
            return notesTorender.filter(note => {
                if (this.filter === 'all' || !this.filter) return note;
                else return note.type === this.filter;
            })
        },

        filterNotes() {


        }
    },

    created() {
        noteService.query()
            .then(notes => {
                this.notes = notes
            })

        eventBus.$on('filter', (txt) => {
            this.filter = txt;
        });
    },
    components: {
        inoteText,
        inoteList,
        inotePinnedList
    },
}