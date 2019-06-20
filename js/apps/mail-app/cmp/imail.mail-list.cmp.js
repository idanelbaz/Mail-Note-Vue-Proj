import mailPreview from '../cmp/imail-preview.cmp.js';
import { mailService } from '../../../services/imail-service.js';
import eventBus from '../../../event-bus.js';



export default {
    name: 'mail-list',
    template: `
            <section v-if="mails" class="mail-list">
              <mail-preview  v-for="mail in mailsForDisplay" :currMail ="mail" :key="mail.id"> </mail-preview>
            </section>    
    
    `,
    data() {
        return {
            mails: null,
            filterBy: { txt: '', whatShow: 'all' },
            isRead: false,
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
            console.log(this.filterBy)
            if (!this.filterBy.txt && this.filterBy.whatShow === 'all') return this.mails;
            else if (!this.filterBy.txt && this.filterBy.whatShow === 'read') {
                return this.mails.filter(mail => {
                    return mail.isRead
                })
            } else if (!this.filterBy.txt && this.filterBy.whatShow === 'unread') {
                return this.mails.filter(mail => {
                    return !mail.isRead
                })
            }

            return this.mails.filter(mail => {
                mail.subject = mail.subject.toLowerCase();
                let render = mail.subject.includes(this.filterBy.txt) && mail.senderName.includes(this.filterBy.txt);
                if (this.filterBy.whatShow === 'all') return render;
                else if (this.filterBy.whatShow === 'read') return mail.isRead
                else return mail.isRead === false;

            })

        }
    },
    components: {
        mailPreview,
    },



}