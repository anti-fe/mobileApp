export default function accordion() {
    const allContent = document.querySelectorAll('.faq-group');
    const allText = document.querySelectorAll('.faq__panel-accordion')

    allContent.forEach((elem) => {
        elem.addEventListener('click', (e) => {
            e.preventDefault();
            if (e.target.closest('.faq__panel-heading')) {
                allText.forEach((e) => {
                    e.style.display = 'none';
                })
                let block = e.target.closest('.faq__panel');
                let text = block.querySelector('.faq__panel-accordion');
                text.style.display = 'block';
            }
        })
    })
}