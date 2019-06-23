import { noteService } from '../../../services/inote-service.js'
import eventBus from '../../../event-bus.js';

export default {
    template: `
    <section>
        <div v-if="currNote" :style="myStyle" class="note-container"> 
            {{currNote.text}}
            <input type="textarea" v-if="isEdit" :rows="2" placeholder="Edit Your Text..." v-model="textarea">
            </input>
                <el-button v-if="isEdit" @click="changeText" plain>Enter</el-button>
            <div class="note-tools">
            <button @click="pinNote" class="edit-btn"><i class="el-icon-paperclip"></i></button>
                <el-color-picker @change="changeBG" v-model="myStyle.backgroundColor" size="mini"></el-color-picker>
                <button @click="showEditor" class="edit-btn"><i class="el-icon-edit-outline"></i></button>
                <button @click="deleteNote" class="edit-btn"><i class="el-icon-delete-solid"></i></button>
            </div>
        </div>
    </section>
    `,
    props: ['currNote'],
    data() {
        return {
            myStyle: {
                backgroundColor: this.currNote.background,
            },
            isEdit: false,
            textarea: '',
        }
    },
    methods: {
        deleteNote(note) {
            noteService.deleteNote(note)
        },
        pinNote() {
            noteService.addToPin(this.currNote);
            // eventBus.$emit('addPin');
        },
        changeBG() {
            noteService.addBGToNote(this.currNote, this.myStyle.backgroundColor)
            // eventBus.$emit('addPin');
        },
        changeText() {
            this.isEdit = !this.isEdit
            noteService.saveTxtEdit(this.currNote ,this.textarea);
        },
        showEditor() {
            this.isEdit = !this.isEdit
        },
    },
}