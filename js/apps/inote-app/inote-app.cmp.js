import inoteText from './cmp/inote-text.cmp.js'
import inoteList from './cmp/inotes-list.cmp.js'


export default {
    template: `
        <div class="inote-main">
            <inote-text></inote-text>
            <el-divider></el-divider>
            <inote-list></inote-list>
        </div>
    `,
    components: {
        inoteText,
        inoteList
    },
}