
export default{
    template:`
    <section>
        <div class="note-container"> 
        <i class="el-icon-paperclip"></i>
            {{currNote.text}}
        </div>
    </section>
    `,
    props: ['currNote']
}