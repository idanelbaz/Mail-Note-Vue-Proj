import { noteService } from '../../../services/inote-service.js'

export default {
    template: `
    <section>
        <div :style="myStyle" class="note-container"> 
            {{currNote.text}}
            <div class="note-tools">
            <button @click="pinNote" class="edit-btn"><i class="el-icon-paperclip"></i></button>
                <el-color-picker v-model="myStyle.backgroundColor" size="mini"></el-color-picker>
                <button class="edit-btn"><i class="el-icon-edit-outline"></i></button>
                <button @click="deleteNote(ev ,idx)" class="edit-btn"><i class="el-icon-delete-solid"></i></button>
            </div>
        </div>
    </section>
    `,
    props: ['currNote'],
    data() {
        return {
            myStyle: {
                backgroundColor: '',
            }
        }
    },
    methods: {
        deleteNote(ev, idx) {
            console.log(ev, idx)
        },
        pinNote(note) {
            noteService.addToPin(note);
        }
    },
}