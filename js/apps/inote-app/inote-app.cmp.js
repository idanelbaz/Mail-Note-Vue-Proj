import inoteText from './cmp/inote-text.cmp.js'
import inoteList from './cmp/inotes-list.cmp.js'
import inotePinnedList from './cmp/inote-pinned-list.cmp.js'


export default {
    template: `
        <div class="inote-main">
            <inote-text></inote-text>
            <el-divider><i class="el-icon-paperclip"></i></el-divider>
            <inote-pinned-list></inote-pinned-list>
            <el-divider></el-divider>
            <inote-list></inote-list>
        </div>
    `,
    components: {
        inoteText,
        inoteList,
        inotePinnedList
    },
}