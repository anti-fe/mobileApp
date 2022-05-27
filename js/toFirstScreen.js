export default function toFirstScreen(){
    const toUp = document.querySelector('.to-up');
    const mainBlock = document.querySelector('#first-screen');
    //Плавный скролл к первому блоку при нажатии на кнопку 
    toUp.addEventListener('click', (e) => {
        e.preventDefault();
        mainBlock.scrollIntoView({
            behavior: 'smooth',
            block: 'end'
        });
    })
}