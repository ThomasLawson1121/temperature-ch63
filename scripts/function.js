console.log("functions");

// function declaration (create)
function sayHello(){
    console.log("Welcome to Angry Birds!");
}

// call/trun/trigger/execute the fn

sayHello();
sayHello();

// example 2 with 1  parameter 

function greetBird(birdName){
    console.log(`Hello <b> ${birdName} </b>! to destroy some pigs?`)
    //console.log("Hello " + birdName + "! Ready to destroy some pigs?");
}

greetBird("Red");
greetBird("Blue");
greetBird("Bomb");

// example 3 with 2 parameter 

function greetPlayer(firstName, lastName){
    console.log(`Welcome back, ${firstName} ${lastName}`)
}

greetPlayer("Thomas","Lawson")
greetPlayer("Reece","Rollins")

// Challenge 1:
// tesk:
// create a funtion called `doubleScore` that takes one number (the players score)
// The function should display the score multiplied by 2
function doubleScore(score){ 
    let total = score * 2;
    console.log(`Your new score is: ${total}`)
}

doubleScore(10);

//example 4 with promt()

function askPigName(){
    let pigName = prompt(`Enter Pigs name`);
    console.log(`Target: ${pigName}`)
}

// 1) call the function on the code
// askPigName();
//2) use the console: askPigName();
//3) the user on the HTML


function addPoints(points1,points2){
    let total = points1 + points2;
    console.log(`Total points earned: ${total}`)
}

addPoints(100,200)
addPoints(0,20)
addPoints(50,100)

// Create a function called `convertToSeconds` that takes o

//function convertToSeconds(mins){
//    let seconds = mins * 60;
//    console.log(`${mins} Total seconds were: ${seconds}s`)
//}

function convertToSeconds(){
    let mins = prompt("Enter the mins: "); //The user will input minutes
    let secs = min * 60; // calulates the secs
    console.log(`${mins} minutes are in ${secs}s`); //display/print
}

//trigger the function with button on the HTML

// dynamic function
function convertToSeconds(){
    let mins = prompt("Enter the mins: ");//the user will input mins
    let secs = mins * 60; //. calculates the secs
    document.getElementById("result").innerHTML += `<li>${mins} minutes are ${secs}s</li>`; // display/print
}

