import { mailService } from '../../../services/imail-service.js';
import eventBus from '../../../event-bus.js';


export default {
    name: 'search-filter',
    template: `
            <section class="filter">
                <el-select @input="emitFilter" v-model="filter.whatShow">
                    <el-option value="all">All</el-option>
                    <el-option value="read">Read</el-option>
                    <el-option value="unread">Unread</el-option>
                </el-select>
                <el-input class="search-name" type="text" v-model="filter.txt" @input="emitFilter"  placeholder="search by subject" autofocus/></el-input>
            </section>    
    
    `,
    data() {
        return {
            filter: { txt: '', whatShow: 'all' },

        }
    },
    created() {

    },
    methods: {
        emitFilter() {
            eventBus.$emit('filter', this.filter);
        }
    },
    components: {

    }
}