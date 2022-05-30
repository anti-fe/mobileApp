export default function choiceCheckbox(e) {
    if(e.target.closest('.calculator__checkbox')) {
        const allCheckbox = e.target.closest('.calculator__checkbox-list').querySelectorAll('.calculator__checkbox');
        const checkbox = e.target.closest('.calculator__checkbox');
        //Сброс активной карточки
        
        //Присвоение активной карточки
        checkbox.classList.toggle('calculator__checkbox_active')
    }
}