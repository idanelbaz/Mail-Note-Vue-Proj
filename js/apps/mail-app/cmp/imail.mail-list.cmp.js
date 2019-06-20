import mailPreview from '../cmp/imail-preview.cmp'


export default {
    name: 'mail-list',
    template: `
            <section class="mail-list">
              <mail-preview></mail-preview>
            </section>    
    
    `,
    data() {
        return {
            mail: null,
        }
    },
    created() {
        bookService.getBookById(bookId)
            .then(res => {
                this.mail = res;

            })
    },
    methods: {

    },
    components: {
        mailPreview,
    },
    watch: {
        '$route.params.selectedBookId' (bookId) {
            console.log('route id', bookId);
            bookService.getBookById(bookId)
                .then(res => {
                    this.book = res;


                })
        }
    },
}