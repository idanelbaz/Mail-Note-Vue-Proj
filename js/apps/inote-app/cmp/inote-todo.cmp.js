import { noteService } from '../../../services/inote-service.js'
import eventBus from '../../../event-bus.js';

export default {
    template: `
    <section>
        <div v-if="currNote" :style="myStyle" class="note-container"> 
            {{currNote.text}}
            
            <div id="myDIV" class="header">
            <h2>My To Do List</h2>
            <input v-if="!isDone" type="text" id="myInput" placeholder="write todo..."  v-model="liTxt">
                <span v-if="!isDone" @click="addTodoItem" class="addBtn">Add</span>
                <span v-if="!isDone" @click="saveTodo" class="addBtn">Save</span>
                </div>

                <ul id="myUL">
                  <li v-if="" v-for="line in currNote.todo">{{line}} </li>
                </ul>
               
            <div class="note-tools">
            <button @click="pinNote" class="edit-btn"><i class="el-icon-paperclip"></i></button>
                <el-color-picker @change="changeBG" v-model="myStyle.backgroundColor" size="mini"></el-color-picker>
                <button @click="deleteNote" class="edit-btn"><i class="el-icon-delete-solid"></i></button>
            </div>
        </div>
    </section>
    `,
    props: ['currNote'],
    data() {
        return {
            myStyle: {
                backgroundColor: this.currNote.background,
            },
            isEdit: false,
            textarea: '',
            li: [],
            liTxt: '',
            isDone: false,
        }
    },
    methods: {
        deleteNote() {
            noteService.deleteNote(this.currNote)
        },
        pinNote() {
            noteService.addToPin(this.currNote);
            // eventBus.$emit('addPin');
        },
        changeBG() {
            noteService.addBGToNote(this.currNote, this.myStyle.backgroundColor)
                // eventBus.$emit('addPin');
        },
        changeText() {
            this.isEdit = !this.isEdit
            noteService.saveTxtEdit(this.currNote, this.textarea);
        },
        showEditor() {
            this.isEdit = !this.isEdit
        },
        addTodoItem() {
            this.currNote.todo.push(this.liTxt)
            this.liTxt = '';
        },
        saveTodo() {
            noteService.saveTodo(this.currNote, this.currNote.todo);
            this.isDone = true;
        }
    },
}