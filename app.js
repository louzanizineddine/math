
const inputUser = document.querySelector('input');
const calc = document.querySelector('#calc');
const clear = document.querySelector('#clr');
const answer = document.querySelector('.answer');
const body = document.querySelector('body');
const answerMsg = document.querySelector('.answerMsg');
const historyArray = new Array();

// adding the calc eventListener
calc.addEventListener('click', function(e){
    
    e.preventDefault();

    // clearing the results of the last calculation 
    answer.textContent = '';

    // showing the answer message

    answerMsg.style.display = 'block';

    const theArrayResult = power(getfactor(inputUser.value) , inputUser.value);
    // dealing with the case if input value is already a prime Number

    if (theArrayResult.length === 0 ){
        theArrayResult.push([inputUser.value , 1])
    } 
    let result = '';
    theArrayResult.forEach(function(element , index) {
        const html = ` (${element[0]} <sup class="power">${element[1]}</sup> ) *`;
        result = result +  html;
    });
    const newStr = result.substring(0, result.length - 1);
    result = `<p>${newStr}</p>`;
    answer.insertAdjacentHTML("beforeend" , result);

    // saving the the result to the history 

    historyArray.push(result);

})


// adding the clear feature to the

clear.addEventListener('click', function(e){
    e.preventDefault();
    inputUser.value = "";
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