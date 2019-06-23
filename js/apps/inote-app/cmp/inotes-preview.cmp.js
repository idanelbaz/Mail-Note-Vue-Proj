
export default {
    template: `
    <section>
        <div :style="myStyle" class="note-container"> 
            {{currNote.text}}
            <div class="note-tools">
            <button class="edit-btn"><i class="el-icon-paperclip"></i></button>
                <el-color-picker v-model="myStyle.backgroundColor" size="mini"></el-color-picker>
                <button class="edit-btn"><i class="el-icon-edit-outline"></i></button>
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
        changeColor() {
            console.log('click')
        }
    },
}