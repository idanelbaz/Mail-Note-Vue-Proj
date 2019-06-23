'use strict';


import { storageService } from './storage.service.js'
import { utilService } from './util.service.js'



let gNotes = [
    createNote('Shalom', 'https://api.adorable.io/avatars/80/moshe.png'),
    createNote('What up', 'https://api.adorable.io/avatars/80/idan.png'),
    createNote('What up', 'https://api.adorable.io/avatars/80/idan.png'),
];

function createNote(url, type) {
    let note = {
        id: utilService.makeId(),
        text: '',
        url: url,
        type: type,
        isPinned: false,
    };
    return note;
}

function addNote(url, type) {
    gNotes.unshift(createNote(url, type))
    storageService.store('notes', gNotes);
}

function deleteNote() {
    
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
}