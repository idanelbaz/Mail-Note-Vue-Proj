import imailCompose from './imail-compose.cmp.js';
import { mailService } from '../../../services/imail-service.js'


export default {
    name: 'mail-details',
    template: `
            <section class="mail-details">
             <imail-compose> </imail-compose>
            </section>    
    
    `,
    props: ['mail'],
    data() {
        return {

        }
    },
    created() {

    },
    methods: {

    },
    components: {
        imailCompose,
    }
}