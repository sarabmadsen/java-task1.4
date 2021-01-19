//Question 1

function printSeason(season) {

console.log(season);

}

printSeason("summer");


//Question 2

function printNumbers(firstNumber, secondNumber) {

console.log(firstNumber, secondNumber)

}

printNumbers(5, 10);


//Question 3

function addNumbers(num1, num2, num3) {

    const result = num1 + num2 + num3;

    return result;

}

const result = addNumbers(5, 5, 4);

const publishTotal = document.querySelector(".total");

publishTotal.innerHTML += result;


//Question 4

function createGreeting(name) {

    const finalGreeting = "Hello, my name is " + name + ".";

    return finalGreeting
}

const finalGreeting = createGreeting("Sara");

const publishGreeting = document.querySelector("#name");

publishGreeting.innerHTML += finalGreeting;


//Question 5

function printListItems(item) {

    for(let i = 0; i < item.length; i++) {
        console.log(item[i]);
    }

}

const sports = ["golf", "football", "cricket"];

printListItems(sports);


//Question 6

const games = [
    {
        name: "Starcraft 2",
        released: "2010",        
    },
    {
        name: "Age of Empires II",       
    },
    {
        name: "Cyberpunk 2077",
        released: 2020
    }
];

function createGames(par1) {

    let html = "";

    for(let i = 0; i < par1.length; i++) {

        let releaseYear = "Unknown year";

        if(par1[i].released) {
            releaseYear = par1[i].released;
        }

    html += `<div class="game">
    <h5>${par1[i].name}</h5>
    <p>Released: ${releaseYear}</p>
    </div>`;   
    
    }

    return html;

}

const newHTML = createGames(games);

const gameContainer =document.querySelector(".game-container");
gameContainer.innerHTML = newHTML;