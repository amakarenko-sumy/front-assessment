"use strict";

const dropdownMenuItems = document.getElementsByClassName('dropdown-menu');
const hamburgers = document.getElementsByClassName('hamburger-menu');

document.addEventListener('click', (e)=>{
    for (let dropdownMenuItem of dropdownMenuItems) {

        const menuItem = dropdownMenuItem.closest('.dropdown-menu')

        if (!menuItem.contains(e.target) && !e.target.closest('.opened')) {
            menuItem.classList.remove('opened');
        }
    }
    for (let hamburger of hamburgers) {
        if (!hamburger.contains(e.target) && !e.target.closest('nav')) {
            hamburger.classList.remove('opened');
        }
    }
});

for (let dropdownMenuItem of dropdownMenuItems) {
    dropdownMenuItem.addEventListener('click', (e) => {
        e.preventDefault();
        const menuItem = e.target.closest('.dropdown-menu')

        if (menuItem.classList.contains('opened')) {
            menuItem.classList.remove('opened');
        } else {
            menuItem.classList.add('opened');
        }
    });
}

for (let hamburger of hamburgers) {
    hamburger.addEventListener('click', (e) => {
        e.preventDefault();

        if (hamburger.classList.contains('opened')) {
            hamburger.classList.remove('opened');
        } else {
            hamburger.classList.add('opened');
        }
    });
}


