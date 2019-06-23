export default {
    template: `
        <section class="inote-header">
        <el-input  type="text" v-model="text" @enter="addNote" placeholder="What's on your mind..." clearable >
        </el-input>
        <div class="btn-input-cont">
        <el-button class="el-icon-position"></el-button> 
        <el-button  class="el-icon-edit-outline"></el-button>
        <el-button class="el-icon-video-camera-solid"></el-button>
        <el-button class="el-icon-picture-outline"></el-button>
        <el-button class="el-icon-headset"></el-button>
        <el-button @click.enter="addNote" type="success" class="add-note-btn" plain>Add</el-button>
        </div>
        


        </section>

  
      

    `,
    data() {
        return {
            text: null,

        }
    },
    methods: {
        addNote() {
            console.log('Added note')
        }
    },
}