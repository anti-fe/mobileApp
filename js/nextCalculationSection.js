export default function nextCalculationSection(btnNext) {
    let btnNextCount = +btnNext.dataset['count'];
    btnNext.dataset['count'] = btnNextCount++;
    console.log(btnNext.dataset['count']);
}