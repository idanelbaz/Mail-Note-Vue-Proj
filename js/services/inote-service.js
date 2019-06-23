'use strict';


import { storageService } from './storage.service.js'
import { utilService } from './util.service.js'



let gNotes = [
    createNote('https://api.adorable.io/avatars/80/moshe.png', 'img'),
    createNote('https://api.adorable.io/avatars/80/idan.png', 'img'),
    createNote('https://api.adorable.io/avatars/80/idan.png', 'img'),
];

let gPin = [];

function createNote(url = '', type, txt = '') {
    let note = {
        id: utilService.makeId(),
        text: txt,
        url: url,
        type: type,
        isPinned: false,
        background: '',
    };
    return note;
}

function addNote(url = '', type, txt = '') {
    gNotes.unshift(createNote(url, type, txt))
    storageService.store('notes', gNotes);
}

function deleteNote() {

}

function findNoteById(noteId) {
    return gNotes.filter(note => {
        return note.id === noteId
    })
}

function findNoteIdx(noteId) {
    return gNotes.findIndex(note => {
        note.id === noteId
    })
}

function addToPin(note) {
    gPin.unshift(note);
    gNotes.splice(findNoteIdx(note), 1);
    storageService.store('notes', gNotes);
    storageService.store('notePin', gPin);
}

function removeFromPin(note) {
    gNotes.unshift(note);
    gPin.splice(findNoteIdx(note), 1);
    storageService.store('notes', gNotes);
    storageService.store('notePin', gPin);
}

function query() {

    if (!storageService.load('notes')) {
        storageService.store('notes', gNotes)
    } else {
        gNotes = storageService.load('notes');
    }

    return Promise.resolve(gNotes);
}

function queryPin() {

    if (!storageService.load('notePin')) {
        storageService.store('notePin', gPin)
    } else {
        gPin = storageService.load('notePin')
    }

    return Promise.resolve(gPin);
}



export const noteService = {
    query,
    addNote,
    addToPin,
    queryPin,
    removeFromPin,

}