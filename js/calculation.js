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
                price.innerHTML = setTextPrice(androidPrice.toString());
                time.dataset['time'] = `${androidTime}`;
                price.dataset['price'] = `${androidPrice}`;
                break;
        
            case 'ios':
                const iosPrice = +price.dataset['price'] + 30000;
                const iosTime = +time.dataset['time'] + 50;

                price.innerHTML = setTextPrice(iosPrice.toString());
                price.innerHTML = setTextPrice(iosPrice.toString());
                time.dataset['time'] = `${iosTime}`;
                price.dataset['price'] = `${iosPrice}`;
                break;
            case 'androidIos':
                const androidIosPrice = +price.dataset['price'] + 60000;
                const androidIosTime = +time.dataset['time'] + 100;

                price.innerHTML = setTextPrice(androidIosPrice.toString());
                price.innerHTML = setTextPrice(androidIosPrice.toString());
                time.dataset['time'] = `${androidIosTime}`;
                price.dataset['price'] = `${androidIosPrice}`;
                break;
            case 'display':
                const displayPrice = +price.dataset['price'] + 10000;
                const displayTime = +time.dataset['time'] + 20;

                price.innerHTML = setTextPrice(displayPrice.toString());
                price.innerHTML = setTextPrice(displayPrice.toString());
                time.dataset['time'] = `${displayTime}`;
                price.dataset['price'] = `${displayPrice}`;
                break;
            case 'animation':
                const animationPrice = +price.dataset['price'] + 10000;
                const animationTime = +time.dataset['time'] + 20;

                price.innerHTML = setTextPrice(animationPrice.toString());
                price.innerHTML = setTextPrice(animationPrice.toString());
                time.dataset['time'] = `${animationTime}`;
                price.dataset['price'] = `${animationPrice}`;
                break;
            case 'yes':
                const yesPrice = +price.dataset['price'] + 15000;
                const yesTime = +time.dataset['time'] + 25;

                price.innerHTML = setTextPrice(yesPrice.toString());
                price.innerHTML = setTextPrice(yesPrice.toString());
                time.dataset['time'] = `${yesTime}`;
                price.dataset['price'] = `${yesPrice}`;
                break;
            case 'no':
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