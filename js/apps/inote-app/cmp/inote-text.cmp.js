import eventBus from '../../../event-bus.js';
import { noteService } from '../../../services/inote-service.js'


export default {
    template: `
        <section class="inote-header">
            <el-input  type="text" v-model="note.text" @enter="addNote" placeholder="What on your mind..." clearable >
             </el-input>
            <div class="btn-input-cont">
                <!-- <el-button class="el-icon-position"></el-button>  -->
                <button @click.prevent="chooseTxt"  class="el-icon-edit-outline"></button>
                <button @click.prevent="chooseVideo" class="el-icon-video-camera-solid"></button>
                <button @click.prevent="chooseImg" class="el-icon-picture-outline"></button>
                <button @click.prevent="chooseSound" class="el-icon-headset"></button>
                <button @click.prevent="addNote" type="success" class="add-note-btn" plain>Add</button>
            </div>
        </section>

    `,
    data() {
        return {
            note: {
                text: '',
                type: '',
            }


        }
    },
    methods: {

        chooseTxt() {
            this.note.text = 'What on your mind...';
            this.note.type = 'txt';
        },
        chooseImg() {
            this.note.text = 'Enter image URL ';
            this.note.type = 'Img';
        },
        chooseSound() {
            this.note.text = 'Enter sound URL ';
            this.note.type = 'sound';
        },
        chooseVideo() {
            this.note.text = 'Enter video URL';
            this.note.type = 'video';
        },


        addNote() {
            noteService.addNote(this.note.text, this.note.type)
                // eventBus.$emit('chooshedNote', this.note);
        }
    },
}