export default function advantages(btn) {
    const advantagesItems = document.querySelectorAll('.advantages__btn');

    advantagesItems.forEach(el => {
        if(el.classList.contains('advantages__btn-active') && 
        el.innerHTML !== btn.innerHTML) {
            el.classList.remove('advantages__btn-active');
            //Показываем текстовый блок
            const allTextBlocks = btn.closest('.advantages').querySelectorAll('.advantages__content-block');
            const textBlock = btn.closest('.advantages').querySelector(`.advantages__content-block[data-name=${btn.dataset['name']}]`);

            allTextBlocks.forEach(block=>{
                if(!(block.dataset['name'] === btn.dataset['name'])) {
                    block.classList.add('advantages__content_hidden');
                } else {
                    block.classList.remove('advantages__content_hidden');
                }
            })
        }
    });
    btn.classList.add('advantages__btn-active');
}