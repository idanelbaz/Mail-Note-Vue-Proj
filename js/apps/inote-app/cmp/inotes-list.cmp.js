import { noteService } from '../../../services/inote-service.js'
import inotesPreview from './inotes-preview.cmp.js'
export default {
    template: `
    <section v-if="notes" class="notes-list-container">
    <inotes-preview v-for="note in notesForDisplay" :currNote="note" :key="notes.id"></inotes-preview>
    </section>
    `,
    data() {
        return {
            notes: null,
        }
    },
    created() {
        noteService.query()
            .then(notes => {
                this.notes = notes
                console.log(notes)
            })
    },
    computed: {
        notesForDisplay() {
            return this.notes.filter(note => {
                return note.isPinned === false;
            })
        }
    },
    components: {
        inotesPreview
    }
}