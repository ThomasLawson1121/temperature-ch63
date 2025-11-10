function convertCtoF(){
    let c = prompt("Enter temperature in Celsius:");

    let f = (c * 9/5) + 32;

    document.getElementById("result").innerHTML = c + "°C = " + f + "°F";
}

function convertFtoC(){
    let f = prompt("Enter temperature in Fahrenheit:");

    let c = (f - 32) * 5/9;

    document.getElementById("result").innerHTML = f + "°F = " + c + "°C";
}

function generateTable(){
    document.getElementById("temps").innerHTML = ""; 

    for(let c = 0; c <= 100; c = c + 10){
        let f = (c * 9/5) + 32;

        document.getElementById("temps").innerHTML += `
        <tr>
            <td>${c}</td>
            <td>${f}</td>
        </tr>
        `;
    }
} 
