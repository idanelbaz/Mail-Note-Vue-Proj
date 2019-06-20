import mailPreview from '../cmp/imail-preview.cmp.js';
import { mailService } from '../../../services/imail-service.js';
import eventBus from '../../../event-bus.js';



export default {
    name: 'mail-list',
    template: `
            <section v-if="mails" class="mail-list">
              <mail-preview v-for="mail in mailsForDisplay" :currMail ="mail" :key="mail.id"> </mail-preview>
            </section>    
    
    `,
    data() {
        return {
            mails: null,
            filterBy: '',
        }
    },
    created() {
        eventBus.$on('filter', (txt) => {
            this.filterBy = txt
        });
        mailService.query()
            .then(mails => {
                this.mails = mails;
                console.log(this.mails)
            })



    },
    computed: {
        mailsForDisplay() {
            if (!this.filterBy) return this.mails;
            return this.mails.filter(mail => {
                mail.subject = mail.subject.toLowerCase();
                let renderMail = mail.subject.includes(this.filterBy);
                return renderMail += mail.senderName.includes(this.filterBy);
            })


        }
    },
    methods: {

    },
    components: {
        mailPreview,
    },
    watch: {

    },
}