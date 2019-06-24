import { noteService } from '../../../services/inote-service.js'
import eventBus from '../../../event-bus.js';

export default {
    template: `
    <section>
        <div v-if="currNote" :style="myStyle" class="note-container"> 
        <img class="pinImg" src="../imgs/pinImg.png" alt="">
        <iframe width="318" height="150" :src="currNote.youTubeUrl+currNote.url"></iframe>
        <input v-if="isEdit" @keyup.enter="changeVideoUrl" placeholder="Change IMG URL" v-model="input"></input>
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
            input: '',
        }
    },
    methods: {
        deleteNote() {
            noteService.deleteNote(this.currNote)
        },
        pinNote() {
            noteService.addToPin(this.currNote);
            // eventBus.$emit('addPin');
        },
        changeBG() {
            noteService.addBGToNote(this.currNote, this.myStyle.backgroundColor)
                // eventBus.$emit('addPin');
        },
        changeVideoUrl() {
            this.isEdit = !this.isEdit
            noteService.saveEditVideo(this.currNote, this.input);
        },
        showEditor() {
            this.isEdit = !this.isEdit
        },
    },
}