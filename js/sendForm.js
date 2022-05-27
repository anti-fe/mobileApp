export default function sendForm(modalWindow) {
    const modalTitle = modalWindow.querySelector('.modal-window__title').innerHTML;
    const inputName= document.querySelectorAll('.modal-window__input')[0];
    const inputPhone = modalWindow.querySelectorAll('.modal-window__input')[1];

    const regExpName = /^[a-zA-zа-яА-яё]+$/i
    const regExpPhone = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,11}(\s*)?$/;
    //NAME VALIDATION
    if(inputName.value.trim() === '') {
        setError(inputName, 'Заполните поле!');
    } else if(!regExpName.test(inputName.value.trim())) {
        setError(inputName, 'Неправильный формат имени!');
    } else {
        setSuccess(inputName);
    }
    //PHONE VALIDATION
    if(inputPhone.value.trim() === '') {
        setError(inputPhone, 'Заполните поле!');
    } else if(!regExpPhone.test(inputPhone.value.trim())) {
        setError(inputPhone, 'Неправильный формат телефона!');
    } else {
        setSuccess(inputPhone);
    }

    function setError(item, message) {
        if(item.classList.contains('modal-window__inp-success')) {
            item.classList.remove('modal-window__inp-success');
        }
        item.classList.add('modal-window__inp-error');
        const parent = item.parentElement;
        const error = parent.querySelector('.modal-window__error-message');
        error.innerHTML = message;
    }
    function setSuccess(item) {
        if(item.classList.contains('modal-window__inp-error')) {
            item.classList.remove('modal-window__inp-error');
            const parent = item.parentElement;
            const error = parent.querySelector('.modal-window__error-message');
            error.innerHTML = '';
        }
        item.classList.add('modal-window__inp-success');
        
    }
    //Если валидация пройдена успешно
    if(inputName.classList.contains('modal-window__inp-success') && 
    inputPhone.classList.contains('modal-window__inp-success')) {
        const data = {
            title: modalTitle,
            name:inputName.value,
            phone:inputPhone.value
        }
        localStorage.setItem('call', JSON.stringify(data));
        //Убираем модальное окно и перезагружаем страницу
        modalWindow.querySelector('.modal-window').style.border = '2px solid green';
        setTimeout(()=>{
            modalWindow.style.top = '-100vh';
            document.body.style.overflow = 'auto';
        }, 1000);
        setTimeout(()=>{
            window.location.reload();
        }, 1500);
    }

    
}