import mailPreview from '../cmp/imail-preview.cmp.js'
import { mailService } from '../../../services/imail-service.js'



export default {
    name: 'mail-list',
    template: `
            <section v-if="mails" class="mail-list">
              <mail-preview v-for="mail in mails" :currMail ="mail" :key="mail.id"> </mail-preview>
            </section>    
    
    `,
    data() {
        return {
            mails: null,
        }
    },
    created() {
        mailService.query()
            .then(mails => {
                this.mails = mails;
            })

    },
    methods: {

    },
    components: {
        mailPreview,
    },
    watch: {
        // '$route.params.selectedBookId' (bookId) {
        //     console.log('route id', bookId);
        //     mailService.getBookById(bookId)
        //         .then(res => {
        //             this.book = res;


        //         })
        // }
    },
}