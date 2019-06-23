import { noteService } from '../../../services/inote-service.js'
import inotesPreview from './inotes-preview.cmp.js'
import eventBus from '../../../event-bus.js';


export default {
    template: `
    <section v-if="pinNotes" class="notes-list-container">
    <inotes-preview v-for="note in pinNotes" :currNote="note" :key="note.id"></inotes-preview>
    </section>
    `,
    props: ['pinNotes'],
    data() {
        return {

        }
    },
    created() {

    },
    computed: {

    },
    components: {
        inotesPreview
    }
}