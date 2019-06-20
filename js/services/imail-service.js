'use strict'

import { storageService } from './storage.service.js'
import { utilService } from './util.service.js'


let gMails = [
    createMail('Shalom', 'idan', 'idan@gmail.com', 'how you doing?'),
    createMail('What up', 'daniel', 'daniel@gmail.com', 'where are you?'),
    createMail('Hi', 'ran', 'ran@gmail.com', 'how you doing how you doing how you doing how you doing how you doing how you doing?'),
    createMail('Lorem', 'hen', 'hen@gmail.com', 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum ut ipsa labore consectetur, nulla, quam, praesentium esse accusantium natus quaerat eius. Omnis consequuntur repudiandae esse eligendi molestiae fugiat possimus vitae!')
];

function createMail(subject, senderName, senderMailAdd, mailTxt) {
    let mail = {
        id: utilService.makeId(),
        profileImg: `https://api.adorable.io/avatars/80/${senderName}.png`,
        subject: subject,
        senderName: senderName,
        senderMailAdd: senderMailAdd,
        time: moment().format('LLL'),
        mailTxt: mailTxt,
        isTrash: false,
        isFav: false,
        isRead: false,
    };

    return Promise.resolve(mail)
}

function query() {

    if (!storageService.load('mails')) {
        storageService.store('mails', gMails)
    } else {
        gMails = storageService.load('mails');
    }

    return Promise.resolve(gMails);
}


function getById(mailId) {
    let currMail = query()
        .then(mails => {
            const mail = mails.find(currMail => currMail.id === mailId);
            return Promise.resolve(mail);
        })
    return currMail;
}





export const mailService = {
    createMail,
    getById,
    query,
}