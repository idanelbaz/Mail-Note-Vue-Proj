
export default{
    template:`
    <section>
        <div class="note-container"> 
        <el-row :gutter="10">
            <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple">{{note}}</div></el-col>
        </el-row>
        </div>
    </section>
    `,
    props: ['note']
}