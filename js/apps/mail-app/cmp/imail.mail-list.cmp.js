import mailPreview from '../cmp/imail-preview.cmp.js';
import { mailService } from '../../../services/imail-service.js';
import eventBus from '../../../event-bus.js';



export default {
    name: 'mail-list',
    template: `
            <section v-if="mails" class="mail-list">
<<<<<<< HEAD
              <mail-preview v-for="mail in mailsForDisplay" :currMail ="mail" :key="mail.id"> </mail-preview>
=======
              <mail-preview v-for="mail in mails" :currMail ="mail" :key="mail.id"></mail-preview>
>>>>>>> 4d79bb58f1e04ae24fce48f7727e0455f61c80ce
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
    mounted() {

    },
    components: {
        mailPreview,
    },


}