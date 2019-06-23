
export default{
    template:`
    <section>
        <div class="note-container"> 
            {{currNote.text}}
        </div>
    </section>
    `,
    props: ['currNote']
}