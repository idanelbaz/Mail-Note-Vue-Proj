'use strict';


import { storageService } from './storage.service.js'
import { utilService } from './util.service.js'



let gNotes = [
    createNote('https://api.adorable.io/avatars/80/moshe.png', 'img'),
    createNote('https://api.adorable.io/avatars/80/idan.png', 'img'),
    createNote('https://api.adorable.io/avatars/80/idan.png', 'img'),
];

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