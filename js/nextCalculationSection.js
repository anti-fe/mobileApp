export default function nextCalculationSection(btnNext, sectionCheckbox) {
    if(+btnNext.dataset['count'] === 5) {
        btnNext.disabled = true;
        console.log(sectionCheckbox[sectionCheckbox.length - 1]);
    } else if(+btnNext.dataset['count'] < 5) {
        const choiceSections = document.querySelectorAll('.calculator__choice-section');
        let btnNextCount = +btnNext.dataset['count'] + 1;
        btnNext.dataset['count'] = btnNextCount;

        choiceSections.forEach(item=>{
            if(+item.dataset['id'] === btnNextCount) {
                item.classList.add('calculator__choice_active')
            } else {
                item.classList.remove('calculator__choice_active')
            }
        })

    }
}