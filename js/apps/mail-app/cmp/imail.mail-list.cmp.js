import mailPreview from '../cmp/imail-preview.cmp.js';
import { mailService } from '../../../services/imail-service.js';
import eventBus from '../../../event-bus.js';



export default {
    name: 'mail-list',
    template: `
            <section :mails="checkPage" v-if="mails"  class="mail-list">
              <mail-preview  v-for="mail in mailsForDisplay" :currMail ="mail" :key="mail.id"> </mail-preview>
            </section>    
    
    `,
    data() {
        return {
            mails: null,
            filterBy: { txt: '', whatShow: 'all', nameOrDate: '' },
            isRead: false,
        }
    },
    created() {
        mailService.query()
            .then(mails => {
                this.mails = mails;
            })

        eventBus.$on('filter', (txt) => {
            this.filterBy = txt
        });

        eventBus.$on('dateOrName', (filter => {
            this.filterBy.nameOrDate = filter;
        }))

    },
    computed: {

        mailsForDisplay() {

            if (this.$route.path === '/trash') this.mails = mailService.OnlyTrash(this.mails);
            else if (this.$route.path === '/imail') this.mails = mailService.onlyReg(this.mails);
            else if (this.$route.path === '/favorites') this.mails = mailService.onlyFav(this.mails);
            else this.mails = mailService.onlySent(this.mails);

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
            let books = this.mails.filter(mail => {
                return mail.subject.includes(this.filterBy.txt);
            });
            if (this.filterBy.whatShow === 'all') return books;
            else if (this.filterBy.whatShow === 'read') {
                return books.filter(book => {
                    return book.isRead;
                })
            } else if (this.filterBy.whatShow === 'unread') {
                return books.filter(book => {
                    return !book.isRead;
                })
            }
        }


    },
    watch: {
        '$route' (to, from) {
            console.log(to)
        }

    },
    components: {
        mailPreview,
    },

}