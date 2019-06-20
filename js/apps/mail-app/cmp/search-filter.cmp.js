import { mailService } from '../../../services/imail-service.js';
import eventBus from '../../../event-bus.js';


export default {
    name: 'search-filter',
    template: `
            <section class="filter">
            <input class="search-name" type="text" v-model="filter.txt" @input="emitFilter"  placeholder="search by name" autofocus/>
            <select @input="emitFilter" v-model="filter.whatShow">
                <option value="all">All</option>
                <option value="read">Read</option>
                <option value="unread">Unread</option>
        </select>
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