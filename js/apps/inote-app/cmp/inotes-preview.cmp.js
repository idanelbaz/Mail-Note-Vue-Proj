
export default{
    template:`
    <section>
        <div @input="changeBG" class="note-container"> 
        <i class="el-icon-paperclip"></i>
            {{currNote.text}}
        <el-color-picker v-model="noteColor" size="mini"></el-color-picker>
        </div>
    </section>
    `,
    props: ['currNote'],
    data() {
        return {
            noteColor: '',
        }
    },
    methods: {
        changeColor() {
          console.log('click')
        }
    },
    computed: {
        changeBG() {
            return console.log(this.noteColor)
        }
    },
}