import { noteService } from '../../../services/inote-service.js'
import inotesPinnedPreview from './inote-pinned-preview.cmp.js'
import eventBus from '../../../event-bus.js';

export default {
    template: `
    <section v-if="notes" class="notes-list-container">
        <inotes-pinned-preview v-for="note in notesForDisplay" :currNote="note" :key="notes.id"></inotes-pinned-preview>
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
            eventBus.$on('addPin', () => {
                noteService.query()
                    .then(notes => {
                        this.notes = notes
                        console.log(notes)
                    })
            })
            return this.notes.filter(note => {
                return note.isPinned === true;
            })
        }
    },
    components: {
        inotesPinnedPreview
    }
}