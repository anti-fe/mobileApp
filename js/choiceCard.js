export default function choiceCard(e) {
    if(e.target.closest('.calculator__card')) {
        const allCard = e.target.closest('.calculator__cards-list').querySelectorAll('.calculator__card');
        const card = e.target.closest('.calculator__card');
        //Сброс активной карточки
        allCard.forEach(item => {
            if(item.classList.contains('calculator__card_active')) {
                item.classList.remove('calculator__card_active');
            }
        });
        //Присвоение активной карточки
        card.classList.add('calculator__card_active')
    }
}