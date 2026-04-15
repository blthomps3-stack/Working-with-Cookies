'use strict';

const cookiebox = document.getElementById('cookies');
const acceptbtn = document.getElementById('acceptbtn')
const settingsbtn = document.getElementById('settingsbtn');

const settingbox = document.getElementById('settings');
const form = document.getElementById('settingsform');
const browserchk = document.getElementById('browser');
const oschk = document.getElementById('os');
const widthchk = document.getElementById('screenwidth');
const heightchk = document.getElementById('screenheight');
const savebtn = document.getElementById('savebtn');

function setCookie(name, value) {
    let cookieString = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;
    cookieString += `; path=/; SameSite=Lax; max-age=15`;
    document.cookie = cookieString;
}

if(document.cookie.length === 0){
    cookiebox.showModal();
}

acceptbtn.addEventListener('click', function(){
    cookiebox.close();
})

settingsbtn.addEventListener('click', function(){
    cookiebox.close();
    settingbox.showModal();
});


form.addEventListener('submit', function(){
    browserchk.checked ? setCookie('browser', 'test') : false;
    oschk.checked ? setCookie('operating system', 'test') : false;
    widthchk.checked ? setCookie('screen width', 'test') : false;
    heightchk.checked ? setCookie('screen height', 'test') : false;
});