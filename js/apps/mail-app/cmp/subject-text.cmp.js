export default {
    template: `
        <section>
            <p>{{txtToShow}}</p>
        </section>
    `,
    props: ['txt'],
    computed: {
        isLongText() {
            return this.txt.length > 50
        },
        txtToShow(){
            return this.txt.substr(0, 50) + '...'
        },
    },
}