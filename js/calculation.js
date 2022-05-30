export default function calculation(e) {
    if(e.target.closest('.calculator__card')) {
        const card = e.target.closest('.calculator__card');
        const cardValue = e.target.closest('.calculator__card').dataset['cardvalue'];
        const time = document.querySelector('#time');
        const price = document.querySelector('#price');

        switch (cardValue) {
            case 'android':
                const androidPrice = +price.dataset['price'] + 30000;
                const androidTime = +time.dataset['time'] + 50;

                price.innerHTML = setTextPrice(androidPrice.toString());
                time.innerHTML = `${androidTime} ч`;
                break;
        
            case 'ios':
                const iosPrice = +price.dataset['price'] + 30000;
                const iosTime = +time.dataset['time'] + 50;

                price.innerHTML = setTextPrice(iosPrice.toString());
                time.innerHTML = `${iosTime} ч`;
                break;
            case 'androidIos':
                const androidIosPrice = +price.dataset['price'] + 60000;
                const androidIosTime = +time.dataset['time'] + 100;

                price.innerHTML = setTextPrice(androidIosPrice.toString());
                time.innerHTML = `${androidIosTime} ч`;
                break;
        }
    }
    function setTextPrice(price) {
        // Цена более 999.999
        if (price.length > 6) {
            //Миллион
            let rangeInputVal1 = price.slice(0, price.length-6);
            //Сотни тысяч
            let rangeInputVal2 = price.slice(price.length-6, price.length-3);
            //Сотни
            let rangeInputVal3 = price.slice(price.length-3);
    
            return `${rangeInputVal1}.${rangeInputVal2}.${rangeInputVal3} ₽`;
        }
        let rangeInputVal1 = price.slice(0, price.length-3);
        let rangeInputVal2 = price.slice(price.length-3);
        return `${rangeInputVal1}.${rangeInputVal2} ₽`;
    }
    
}