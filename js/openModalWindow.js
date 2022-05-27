export default function openModalWindow(item) {
    const modalWindowCont = document.querySelector('.bg-modal');
    const nameItem = item.dataset['name']; 
    const modalTitle = document.querySelector('.modal-window__title');

    modalTitle.innerHTML = nameItem;

    modalWindowCont.style.top = 0;
    document.body.style.overflow = 'hidden';
}

