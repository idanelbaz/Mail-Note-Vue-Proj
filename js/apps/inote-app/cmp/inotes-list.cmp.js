import { noteService } from '../../../services/inote-service.js'
import inotesPreview from './inotes-preview.cmp.js'
import eventBus from '../../../event-bus.js';
import txt from './inote-txt.cmp.js'
import noteImg from './inote-image.cmp.js'
import sound from './inote-audio.cmp.js'
import noteVideo from './inote-video.cmp.js'


// note.type : txt | video | list
export default {
    template: `
    <section v-if="pinNotes" class="notes-list-container">
    <component v-for='note in pinNotes' :currNote="note" :key="note.id" :is="note.type"></component>
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
        inotesPreview,
        txt,
        noteImg,
        sound,
        noteVideo
    }
}