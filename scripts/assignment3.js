function convertTemperature() {

    let temperature = prompt("Enter the temperature:");
    let scale = prompt("Enter the scale (C or F):");
    let converted;

    if (scale === "C") {
        converted = (temperature * 9/5) + 32;
        document.getElementById("result").innerHTML = converted + "°F";
    } 
    else if (scale === "F") {
        converted = (temperature - 32) * 5/9;
        document.getElementById("result").innerHTML = converted + "°C";
    } 
    else {
        document.getElementById("result").innerHTML = "Please enter C or F.";
    }
}