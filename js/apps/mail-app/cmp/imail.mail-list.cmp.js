import mailPreview from '../cmp/imail-preview.cmp.js';
import { mailService } from '../../../services/imail-service.js';
import eventBus from '../../../event-bus.js';



export default {
    name: 'mail-list',
    template: `
            <section v-if="mails" class="mail-list">
                <mail-preview v-for="mail in mailsForDisplay" :currMail ="mail" :key="mail.id"></mail-preview>
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
            if (this.filterBy.nameOrDate === 'Name') {
                return mailService.sortByName(this.mails);
            } else if (this.filterBy.nameOrDate === 'Date') return mailService.sortByDate(this.mails);
            if (this.$route.path === '/imail') this.mails = mailService.onlyReg();
            else if (this.$route.path === '/trash') this.mails = mailService.OnlyTrash();
            else if (this.$route.path === '/favorites') this.mails = mailService.onlyFav();
            else this.mails = mailService.onlySent();
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
            let mailsToFilter = this.mails.filter(mail => {
                mail.subject = mail.subject.toLowerCase()
                return mail.subject.includes(this.filterBy.txt);
            });
            if (this.filterBy.whatShow === 'all') return mailsToFilter;
            else if (this.filterBy.whatShow === 'read') {
                return mailsToFilter.filter(book => {
                    return book.isRead;
                })
            } else if (this.filterBy.whatShow === 'unread') {
                return mailsToFilter.filter(book => {
                    return !book.isRead;
                })
            }
        }
    },
    watch: {
        '$route' (to, from) {
            // console.log(to.path)
        }
    },
    components: {
        mailPreview,
    },

}