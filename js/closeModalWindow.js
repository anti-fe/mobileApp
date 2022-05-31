export default function closeModalWindow(modalWindow){
    modalWindow.style.top = '-100vh';
    document.body.style.overflow = 'auto';
    const allInputs = modalWindow.querySelectorAll('.modal-window__input');
    allInputs.forEach(el => {
        const errorMessage = el.parentElement.querySelector('.modal-window__error-message');
        errorMessage.innerText = '';
        el.value = '';
        el.classList.remove('modal-window__inp-success');
        el.classList.remove('modal-window__inp-error');
    });
}