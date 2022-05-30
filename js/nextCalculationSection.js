export default function nextCalculationSection(btnNext) {
    if(+btnNext.dataset['count'] >= 5) {
        return;
    } else {
        const choiceSections = document.querySelectorAll('.calculator__choice-section');
        let btnNextCount = +btnNext.dataset['count'] + 1;
        btnNext.dataset['count'] = btnNextCount;
        console.log(btnNext.dataset['count']);
        choiceSections.forEach(item=>{
            if(+item.dataset['id'] === btnNextCount) {
                item.classList.add('calculator__choice_active')
            } else {
                item.classList.remove('calculator__choice_active')
            }
        })

    }
}