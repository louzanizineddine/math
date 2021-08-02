
const inputUser = document.querySelector('input');
const submit = document.querySelector('#sbmt');
const resultP = document.querySelector('.result');
const body = document.querySelector('body');

submit.addEventListener('click', function(e){
    e.preventDefault();
    console.log(inputUser.value);
    const theArrayResult = power(getfactor(inputUser.value) , inputUser.value);
    console.log(theArrayResult);
    let result = '';
    theArrayResult.forEach(function(element , index) {
        const html = `${element[0]} ^ ${element[1]} *`;
        result = result +  html;
    })

    body.insertAdjacentHTML('beforeend', result);
})


const isItPrime = function(num){
    for(let  i= 2; i <= num / 2; i++){
        if(num % i == 0) return false;
    }
    return true;
};

const getfactor = function(num){
    let array = [];
    for (let i = 2; i < num / 2; i++) {
        if ((num % i === 0) && isItPrime(i)) array.push(i)
    }
    return array;
};

const power = function(arr , num){
    let primeArray = [];
    for (let i = 0; i < arr.length; i++){
        let puiss = 1;
        for (let j = 2; ;j++){
            if(num % Math.pow(arr[i] , j) === 0){
                puiss++;
            }else{
                break;
            }
        }
        console.log(puiss)
        primeArray.push([arr[i] , puiss]);
    }
    return primeArray;
};

// const the finalResult = power(getfactor() , )