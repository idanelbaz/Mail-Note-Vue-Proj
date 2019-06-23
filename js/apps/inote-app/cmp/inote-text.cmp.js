import eventBus from '../../../event-bus.js';
import { noteService } from '../../../services/inote-service.js'


export default {
    template: `
        <section class="inote-header">
            <el-input  type="text" v-model="note.url" @enter="addNote" autofocus placeholder="What on your mind..." clearable >
            </el-input>
         <div class="btn-input-cont">
        <!-- <el-button class="el-icon-position"></el-button>  -->
            <el-tooltip content="Text" placement="bottom" effect="light">
                <el-button @click.prevent="chooseTxt"  class="el-icon-edit-outline"></el-button>
            </el-tooltip>
            <el-tooltip content="Add Video" placement="bottom" effect="light">
                <el-button @click.prevent="chooseVideo" class="el-icon-video-camera-solid"></el-button>
            </el-tooltip>
            <el-tooltip content="Add Image" placement="bottom" effect="light">
                <el-button @click.prevent="chooseImg" class="el-icon-picture-outline"></el-button>
            </el-tooltip>
            <el-tooltip content="Add Audio" placement="bottom" effect="light">
                <el-button @click.prevent="chooseSound" class="el-icon-headset"></el-button>
            </el-tooltip>
                <el-button @click.prevent="addNote" type="success" class="add-note-btn" plain>Add</el-button>
         </div>
        


        </section>


    `,
    data() {
        return {
            note: {
                url: 'What on your mind...',
                type: 'txt',
            }
        }
    },
    methods: {
        chooseTxt() {
            this.note.url = 'What on your mind...';
            this.note.type = 'txt';
        },
        chooseImg() {
            this.note.url = 'Enter image URL ';
            this.note.type = 'noteImg';
        },
        chooseSound() {
            this.note.url = 'Enter sound URL ';
            this.note.type = 'sound';
        },
        chooseVideo() {
            this.note.url = 'Enter video URL';
            this.note.type = 'noteVideo';
        },
        addNote() {
            if (this.note.type === 'txt') noteService.addNote(' ', this.note.type, this.note.url)
            else noteService.addNote(this.note.url, this.note.type)
            console.log(this.note)
        }
    },
}