const adviceAPI_URL = 	"https://api.adviceslip.com/advice";


let adviceIdSpan = document.querySelector('.card-holder .advice-id');
let adviceBodyQuote = document.querySelector('.card-holder .advice-body');
let diceButton = document.querySelector('.card-holder button');



async function getRandomAdvice(){

    let adviceResponce = await fetch(adviceAPI_URL);
    
    let adviceJSON = await adviceResponce.json();
    

    let slip = adviceJSON.slip;
    let returnedID = slip.id;
    let returnedAdvice = slip.advice; 

    adviceIdSpan.innerHTML = returnedID;
    adviceBodyQuote.innerHTML = returnedAdvice;

};

getRandomAdvice();

diceButton.addEventListener('click',() =>{
    getRandomAdvice();
});