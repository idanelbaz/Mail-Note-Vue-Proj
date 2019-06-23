import {noteService} from '../../../services/inote-service.js'
import inotesPreview from './inotes-preview.cmp.js'
export default {
    template:`
    <section v-if="notes">
    <inotes-preview v-for="notes for notesForDisplay" :note="notes" :key="notes.id"> </inotes-preview>
    </section>
    `,
    data() {
        return {
            notes: null,
        }
    },
    created() {
        noteService.query()
        .then(notes =>{
            this.notes = notes
            console.log(notes)
        })
    },
    components: {
        inotesPreview
    }
}