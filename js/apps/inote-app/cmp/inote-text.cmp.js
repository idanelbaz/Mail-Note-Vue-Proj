import eventBus from '../../../event-bus.js';


export default {
    template: `
        <section class="inote-header">
        <el-input  type="text" v-model="note.text" @enter="addNote" placeholder="What on your mind..." clearable >
        </el-input>
        <div class="btn-input-cont">
        <!-- <el-button class="el-icon-position"></el-button>  -->
        <el-button @click="chooseTxt"  class="el-icon-edit-outline"></el-button>
        <el-button  @click="chooseVideo" class="el-icon-video-camera-solid"></el-button>
        <el-button @click="chooseImg" class="el-icon-picture-outline"></el-button>
        <el-button @click="chooseSound" class="el-icon-headset"></el-button>
        <el-button @click.enter="addNote" type="success" class="add-note-btn" plain>Add</el-button>
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
            this.text = 'Enter video URL ';
            this.note.type = 'video';
        },


        addNote() {
            eventBus.$emit('chooshedNote', this.note);
        }
    },
}