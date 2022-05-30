export default function calculation(choicedCards) {
    const time = document.querySelector('#time');
    const price = document.querySelector('#price');
    
    const switchChoice = (value) => {
        switch (value) {
            case 'android':
                const androidPrice = +price.dataset['price'] + 30000;
                const androidTime = +time.dataset['time'] + 50;
    
                price.innerHTML = setTextPrice(androidPrice.toString());
                time.innerHTML = `${androidTime} ч`;
    
                time.dataset['time'] = `${androidTime}`;
                price.dataset['price'] = `${androidPrice}`;
                break;
        
            case 'ios':
                const iosPrice = +price.dataset['price'] + 30000;
                const iosTime = +time.dataset['time'] + 50;
    
                price.innerHTML = setTextPrice(iosPrice.toString());
                time.innerHTML = `${iosTime} ч`;
                time.dataset['time'] = `${iosTime}`;
                price.dataset['price'] = `${iosPrice}`;
                break;
            case 'androidIos':
                const androidIosPrice = +price.dataset['price'] + 60000;
                const androidIosTime = +time.dataset['time'] + 100;
    
                price.innerHTML = setTextPrice(androidIosPrice.toString());
                time.innerHTML = `${androidIosTime} ч`;
                time.dataset['time'] = `${androidIosTime}`;
                price.dataset['price'] = `${androidIosPrice}`;
                break;
            case 'display':
                const displayPrice = +price.dataset['price'] + 10000;
                const displayTime = +time.dataset['time'] + 20;
    
                price.innerHTML = setTextPrice(displayPrice.toString());
                time.innerHTML = `${displayTime} ч`;
    
                time.dataset['time'] = `${displayTime}`;
                price.dataset['price'] = `${displayPrice}`;
                break;
            case 'func':
                const funcPrice = +price.dataset['price'] + 5000;
                const funcTime = +time.dataset['time'] + 10;
    
                price.innerHTML = setTextPrice(funcPrice.toString());
                time.innerHTML = `${funcTime} ч`;
    
                time.dataset['time'] = `${funcTime}`;
                price.dataset['price'] = `${funcPrice}`;
                break;
            case 'animation':
                const animationPrice = +price.dataset['price'] + 10000;
                const animationTime = +time.dataset['time'] + 20;
    
                price.innerHTML = setTextPrice(animationPrice.toString());
                time.innerHTML = `${animationTime} ч`;
    
                time.dataset['time'] = `${animationTime}`;
                price.dataset['price'] = `${animationPrice}`;
                break;
            case 'yes':
                const yesPrice = +price.dataset['price'] + 15000;
                const yesTime = +time.dataset['time'] + 25;
    
                price.innerHTML = setTextPrice(yesPrice.toString());
                time.innerHTML = `${yesTime} ч`;
    
                time.dataset['time'] = `${yesTime}`;
                price.dataset['price'] = `${yesPrice}`;
                break;
            case 'no':
                break;
        }
    }
    choicedCards.forEach(el => {
        switchChoice(el.dataset['cardvalue']);
    });
    
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