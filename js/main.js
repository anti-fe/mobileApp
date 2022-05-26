import advantages from './advantages.js';

const advantagesCont = document.querySelector('.advantages__items');

advantagesCont.addEventListener('click',(e)=>{
    if(e.target.tagName === 'BUTTON') {
        advantages(e.target);
    }
})
