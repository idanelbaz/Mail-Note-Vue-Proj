'use strict';


import { storageService } from './storage.service.js'
import { utilService } from './util.service.js'



let gNotes = [
    createNote('https://api.adorable.io/avatars/80/moshe.png', 'noteImg', 'hi'),
    createNote('https://api.adorable.io/avatars/80/idan.png', 'noteImg', 'hi'),
    createNote('https://api.adorable.io/avatars/80/idan.png', 'noteImg', 'hi'),
];


function createNote(url = '', type, txt = '') {
    let note = {
        id: utilService.makeId(),
        text: txt,
        url: url,
        youTubeUrl: 'https://www.youtube.com/embed/',
        type: type,
        isPinned: false,
        background: '',
        todo: [],
        todoTime: '',
    };
    return note;
}

function addNote(url = '', type, txt = '') {
    gNotes.unshift(createNote(url, type, txt))
    storageService.store('notes', gNotes);
}


function addNoteVideo(type, url, txt = '') {
    let youTube = url.indexOf('.com');
    let str = '';
    for (let i = youTube + 5; i < url.length; i++) {
        str += url[i];
    }
    gNotes.unshift(createNote(str, type, txt))
}


function addBGToNote(note, color) {
    gNotes.forEach(currNote => {
        if (currNote.id === note.id)
            currNote.background = color;
    })
    storageService.store('notes', gNotes);
}

function saveEdit(note, input) {
    let currNote = findNoteIdx(note.id);
    gNotes[currNote].url = input;
    storageService.store('notes', gNotes);
}

function saveEditVideo(note, input) {
    let youTube = input.indexOf('.com');
    let str = '';
    for (let i = youTube + 5; i < url.length; i++) {
        str += url[i];
    }
    let currNote = findNoteIdx(note.id);
    gNotes[currNote].url = gNotes[currNote].youTubeUrl + str;

    storageService.store('notes', gNotes);
}

function saveTxtEdit(note, input) {
    let currNote = findNoteIdx(note.id);
    gNotes[currNote].text = input;
    storageService.store('notes', gNotes);
}

function saveTodo(note, input, time) {
    let currNote = findNoteIdx(note.id);
    gNotes[currNote].todo = input;
    gNotes[currNote].todoTime = time;
    storageService.store('notes', gNotes);
}

function deleteNote(note) {
    gNotes.splice(findNoteIdx(note.id), 1);
    storageService.store('notes', gNotes);
}

function findNoteById(noteId) {
    return gNotes.filter(note => {
        return note.id === noteId
    })
}

function findNoteIdx(noteId) {
    return gNotes.findIndex(note => {
        return note.id === noteId
    })
}


function addToPin(note) {
    let currNote = findNoteIdx(note.id)
    gNotes[currNote].isPinned = !gNotes[currNote].isPinned;
    storageService.store('notes', gNotes);

}



function getNotes() {
    return gNotes;
}

function query() {

    if (!storageService.load('notes')) {
        storageService.store('notes', gNotes)
    } else {
        gNotes = storageService.load('notes');
    }

    return Promise.resolve(gNotes);
}




export const noteService = {
    query,
    addNote,
    addToPin,
    addBGToNote,
    deleteNote,
    getNotes,
    saveEdit,
    saveTxtEdit,
    addNoteVideo,
    saveEditVideo,
    saveTodo,
}