'use strict';


import { storageService } from './storage.service.js'
import { utilService } from './util.service.js'



let gNotes = [
    createNote('Shalom', 'https://api.adorable.io/avatars/80/moshe.png'),
    createNote('What up', 'https://api.adorable.io/avatars/80/idan.png'),
    createNote('What up', 'https://api.adorable.io/avatars/80/idan.png'),
];

function createNote(text,img) {
    let note = {
        id: utilService.makeId(),
        text: text,
        img: img,
        isPinned: false,
    };
    return note;
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

}