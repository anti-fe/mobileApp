import advantages from './advantages.js';
import openModalWindow from './openModalWindow.js';
import toFirstScreen from './toFirstScreen.js';
import closeModalWindow from './closeModalWindow.js';
import sendForm from './sendForm.js';
import slider from './slider.js';
import choiceCard from './choiceCard.js';
import calculation from './calculation.js';
import nextCalculationSection from './nextCalculationSection.js';

const getCall = localStorage.getItem('call') ? JSON.parse(localStorage.getItem('call')) : '';
getCall ? console.log(getCall) : NaN;

const advantagesCont = document.querySelector('.advantages__items');

const modalWindow = document.querySelector('.bg-modal');
const getCallBtn = document.querySelector('.header__btn');
const servicesCont = document.querySelector('.services'); 
const closeModalBtn = document.querySelector('.modal-window__close');
const modalBtn = document.querySelector('.modal-window__btn');

const calculatorCont = document.querySelector('.calculator');

//TO-FIRST-SCREEN
toFirstScreen();

// ADVATNAGES
advantagesCont.addEventListener('click',(e)=>{
    if(e.target.tagName === 'BUTTON') {
        advantages(e.target);
    }
})
// MODAl-WINDOW
getCallBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    openModalWindow(getCallBtn)
});
closeModalBtn.addEventListener('click', (e)=>{
    closeModalWindow(closeModalBtn, modalWindow);
})
servicesCont.addEventListener('click', (e)=>{
    if(e.target.closest('.services__card')) {
        openModalWindow(e.target.closest('.services__card'))
    }
})
//SEND-FORM
modalBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    sendForm(modalWindow);
})
//SLIDER
slider();
//CALCULATOR
calculatorCont.addEventListener('click', (e)=>{
    choiceCard(e);
    calculation(e);
    if(e.target.closest('.calculator__next-btn')) {
        nextCalculationSection(e.target.closest('.calculator__next-btn'));
    }
})
