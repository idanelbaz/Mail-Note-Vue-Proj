import mailPreview from '../cmp/imail-preview.cmp.js'
import { mailService } from '../../../services/imail-service.js'



export default {
    name: 'mail-list',
    template: `
            <section class="mail-list">
              <mail-preview></mail-preview>
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