import { mailService } from '../../../services/imail-service.js';
import eventBus from '../../../event-bus.js';


export default {
    name: 'search-filter',
    template: `
            <section class="filter">
            <input class="search-name" type="text" v-model="txt" @input="emitFilter"  placeholder="search by name" autofocus/>
            </section>    
    
    `,
    data() {
        return {
            txt: '',
        }
    },
    created() {

    },
    methods: {
        emitFilter() {
            eventBus.$emit('filter', this.txt);
        }
    },
    components: {

    }
}