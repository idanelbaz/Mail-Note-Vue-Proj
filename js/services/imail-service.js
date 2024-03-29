'use strict'

import { storageService } from './storage.service.js'
import { utilService } from './util.service.js'



let gMails = [
    createMail('Shalom', 'idan', 'idan@gmail.com', 'how you doing?'),
    createMail('What up', 'daniel', 'daniel@gmail.com', 'where are you?'),
    createMail('Hi', 'ran', 'ran@gmail.com', 'how you doing how you doing how you doing how you doing how you doing how you doing?'),
    createMail('Lorem', 'hen', 'hen@gmail.com', 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum ut ipsa labore consectetur, nulla, quam, praesentium esse accusantium natus quaerat eius. Omnis consequuntur repudiandae esse eligendi molestiae fugiat possimus vitae!'),
    createMail('Lorem', 'hen', 'hen@gmail.com', 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum ut ipsa labore consectetur, nulla, quam, praesentium esse accusantium natus quaerat eius. Omnis consequuntur repudiandae esse eligendi molestiae fugiat possimus vitae!'),
];

function createMail(subject, senderName, senderMailAdd, mailTxt) {
    let mail = {
        id: utilService.makeId(),
        profileImg: `https://api.adorable.io/avatars/80/${senderName}.png`,
        subject: subject,
        senderName: senderName,
        senderMailAdd: senderMailAdd,
        time: moment().format('LLL'),
        timeToClac: Date.now(),
        mailTxt: mailTxt,
        isTrash: false,
        isFav: false,
        isRead: false,
        isSent: false,
    };

    return mail;
}

function query() {

    if (!storageService.load('mails')) {
        storageService.store('mails', gMails)
    } else {
        gMails = storageService.load('mails');
    }

    return Promise.resolve(gMails);
}

function sortByName(mails) {
    return mails.sort(function(a, b) {
        var nameA = a.senderName.toUpperCase();
        var nameB = b.senderName.toUpperCase();
        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }

        return 0;
    });
}

function sortByDate(mails) {
    return mails.sort(function(a, b) {
        return b.timeToClac - a.timeToClac;
    });
}

function OnlyTrash() {
    let mailing = gMails.filter(mail => {
        return mail.isTrash
    })
    return mailing;
}

function onlyReg() {
    return gMails.filter(mail => {
        if (!mail.isTrash && !mail.isSent)
            return mail;
    })
}

function onlyFav() {
    return gMails.filter(mail => {
        return mail.isFav;
    })
}

function onlySent() {
    return gMails.filter(mail => {
        return mail.isSent;
    })
}


function getById(mailId) {
    let currMail = query()
        .then(mails => {
            const mail = mails.find(currMail => currMail.id === mailId);
            return Promise.resolve(mail);
        })

    return currMail;
}

function howManyRead() {
    if (!storageService.load('mails')) {
        storageService.store('mails', gMails)
    } else {
        gMails = storageService.load('mails');
    }
    let sent = gMails.filter(mail => {
        return mail.isRead
    })
    return gMails.length - sent.length;

}

function addMail(subject, senderName, senderMailAdd, mailTxt) {
    gMails.unshift(createMail(subject, senderName, senderMailAdd, mailTxt));
    gMails[0].isSent = true;
    gMails[0].isRead = true;
    gMails.unshift(createMail(subject, senderName, senderMailAdd, mailTxt));
    storageService.store('mails', gMails);
}

function makeRead(currMail) {
    gMails.forEach(mail => {
        if (mail.id === currMail.id)
            if (mail.isRead === true) return
            else {
                mail.isRead = true;
            }
    })
    storageService.store('mails', gMails);
}

function moveToTrash(currMail) {
    gMails.forEach(mail => {
        if (mail.id === currMail.id)
            mail.isTrash = true;
    })
    storageService.store('mails', gMails);
}

function moveToFav(currMail) {
    gMails.forEach(mail => {
        if (mail.id === currMail.id)
            mail.isFav = true;
    })
    storageService.store('mails', gMails);
}





export const mailService = {
    createMail,
    moveToFav,
    getById,
    query,
    addMail,
    makeRead,
    moveToTrash,
    OnlyTrash,
    onlyReg,
    onlyFav,
    onlySent,
    howManyRead,
    sortByName,
    sortByDate,
}