import { noteService } from '../../../services/inote-service.js'


export default {
    template: `
    <section>
        <div v-if="currNote" :style="myStyle" class="note-pinned-container"> 
            <p>{{currNote.text}}</p>
             <div class="note-tools">
                <button @click="removePin" class="edit-btn"><i class="el-icon-paperclip"></i></button>
                    <el-color-picker  @change="changeBG" v-model="myStyle.backgroundColor" size="mini"></el-color-picker>
                    <button class="edit-btn"><i class="el-icon-edit-outline"></i></button>
                <button class="edit-btn"><i class="el-icon-delete-solid"></i></button>
              </div>
        </div>
    </section>
    `,
    props: ['currNote'],
    data() {
        return {
            myStyle: {
                backgroundColor: this.currNote.background,
            }
        }
    },
    methods: {
        removePin() {
            noteService.removeFromPin(this.currNote)
        },
        changeBG() {
            noteService.addBGToPin(this.currNote, this.myStyle.backgroundColor)

        }
    }
}