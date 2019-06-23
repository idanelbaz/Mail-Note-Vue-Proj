export default{
    template: `
        <section class="inote-header">
        <el-input type="text" v-model="text" @enter="addNote" placeholder="What's on your mind..." clearable></el-input> 
        <el-button @click.enter="addNote" type="success" class="add-note-btn" plain>Add</el-button>
        </section>
    `,
    data() {
        return {
            text: null
        }
    },
    methods: {
        addNote() {
            console.log('Added note')
        }
    },
}