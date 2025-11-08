console.log("if-statements");

// if-statement condition (y/n)

//Syntax
// if (condition){
// code to be executed if the condition is true
//}

let result = 50;

if(result > 40){
    console.log("You passed the exam");
}

let result2 = 50;

if(result == result2){
    console.log("Your values are the same");
}

// = -> assign a value

// case 1: 5 == 5 
// case 2: 5 == "5" -> compare values
// case 3: 5 === "5" -> false because === compares value and datatype

// if-else statement
//Syntax
// if (condition){
// code to be executed if the condition is true
//}else{
// code to be executed is the condition is false
//}

result = 20;

if(result > 40){
    console.log("You passed the exam");
}else{
    console.log("You did NOT pass the exam");
}

let waterTemp = 105;

if(waterTemp >= 100){
    console.log("The water is boiling");
}else{
    console.log("The water is NOT boiling");
}

// else-if statement
//Syntax
// if (condition1){
// code to be executed if the condition1 is true
//}else if(condition2){
// code to be executed is the condition2 is true
//}else{
// code to be executed is the conitions are false  
//}

function ageCalculator(){
    let age = prompt("Enter your age: ");

    if(age < 13){
        console.log("You are a child");
    }else if(age<21){
        console.log("You are a teenager");
    }else if(age<64){
        console.log("You are an adult");
    }else{
        console.log("You are a senior");
    }
}

// challenge 1
// Scenario:
// You're designing a tiny system for self-driving bikes.
// Instructions:
// Ask for the traffic light color  (use a prompt)
// ("green", "yellow", or "red") and tell the 
// bike what to do (Go!, Slow down, stop)

function traffic(){
    let light = prompt("Enter a color:");

    if(light.toLowerCase() == "green"){ 
        console.log("Go!");
    }else if(light.toLowerCase() == "yellow"){
        console.log("Slow Down!");
    }else if(light.toLowerCase() == "red"){
        console.log("Stop!");
    }else{
        console.error("Unknown light color. Please proceed with caution.");
    }
}


let userType = "Editor";

if(userType === "Admin"){
    console.log("You have access to all the system");
    document.write("Welcome Admin");
}else if(userType === "Editor"){
    console.log("You have access but limited actions");
    document.write("Welcome Editor");
}else{
    document.write("Error 404")
    console.log("You do not have access to the system");
}


//Switch-case
let paymentMethod = "wise";

switch(paymentMethod){
    case "cash":
        console.log("you paid with cash");   
        break;
    case "bitcoin":
        console.log("you paid with bitcoin");
        break;
    case "credit card":
        console.log("you paid with credit card");
        break;
    case "paypal":
        console.log("you paid with paypal");
        break;
    case "paypal":
        console.log("you paid with paypal");
        break;
    default:
        console.log("We can't process that payment method")
    
}

function weatherOutfit(){
    console.log("Weather outfit!");
    let tmp;
    const DIV = document.getElementById("results");
    DIV.classList.remove("hot","cold");
    
    tmp = prompt("Enter the temperature");

    if(tmp < 15){
        DIV.classList.add("cold");
        DIV.innerHTML="Jacket";
    }else if(tmp < 25){
        DIV.innerHTML="Sweater";
    }else{
        DIV.classList.add("hot");
        DIV.innerHTML="T-shirt";
    }
}