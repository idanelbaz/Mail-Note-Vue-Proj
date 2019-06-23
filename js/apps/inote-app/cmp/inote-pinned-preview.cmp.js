export default {
    template: `
    <section>
        <div class="note-pinned-container"> 
        <button class="pinned-note"><i class="el-icon-paperclip"></i></button>
            <p>{{currNote.text}}</p>
            <img :src="currNote.url" alt="">
        </div>
    </section>
    `,
    props: ['currNote']
}