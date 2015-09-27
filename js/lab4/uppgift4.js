//Uppgift 4 - Meny



/*
    Converts fahrenheit to celsius with a 3 value precision answer
*/
function fahrenheitToCelsius(fahrenheit) {
    var str = (parseFloat((fahrenheit - 32) / 1.8)).toString();
    //Laborationen verkar vilja ha 3 värdesiffror i svaret
    return Number(str).toPrecision(3);
}
/*
    Converts celsius to fahrenheit with a 3 value precision answer
*/
function celsiusToFahrenheit(celsius) {
    var str = (parseFloat((celsius * 1.8) + 32)).toString();
    //Laborationen verkar vilja ha 3 värdesiffror i svaret

    return Number(str).toPrecision(3);
}
/*
    Method for inputing fahrenheit via prompt an converting it to celsius 
    which is displayed in a alert.
    Also includes limits for Max/min values.
*/
function promptfahrenheitToCelsius() {
    var fahrenheit = promptFloatDecimalValidation("Farenheit?");
    if (isNaN(fahrenheit)) {
        alert("Input temperature is not in fahrenheit");
    }
    else if (fahrenheit < -459.671 || fahrenheit > 2.5502994000000000000000000000052e+32) {
        alert("Chosen temperature is unreal(either to high or to low)");
    }
    else {
        alert(fahrenheit + " degrees fahrenheit equals " + fahrenheitToCelsius(fahrenheit) + " degrees celsius");
    }
}
/*
    Method for inputing celsius via prompt an converting it to fahrenheit 
    which is displayed in a alert.
    Also includes limits for Max/min values.
*/
function promptcelsiusToFahrenheit() {
    var celsius = promptFloatDecimalValidation("Celsius?");
    if (isNaN(celsius)) {
        alert("Din input är ej i fahrenheit");
    }
    else if (celsius < -273.15 || celsius > 1.4168330000000000000000000000027e+32) {
        alert("Chosen temperature is unreal(either to high or to low)");
    }
    else {
        alert(celsius + " degrees celsius equals " + celsiusToFahrenheit(celsius) + " degrees fahrenheit");
    }
}
/* 
    Takes input via a prompt. 
    Validates that a string is really a integer decimal number
    if not it returns NaN
*/
function promptIntegerDecimalValidation(textString) {
    var chosenDecimalNumber = prompt(textString);
    return parseInt(chosenDecimalNumber, 10);
}
/* 
    Takes input via a prompt. 
    Validates that a string is really a float decimal number
    if not it returns NaN
*/
function promptFloatDecimalValidation(textString) {
    var chosenDecimalNumber = prompt(textString);
    return parseFloat(chosenDecimalNumber, 10);
}

function meny() {
    var done = false;
    while (!done) {
        var processedChoice = promptIntegerDecimalValidation("0. Exit\n1. Fahrenheit to Celsius\n2. Celsius to Fahrenheit\n3. Guess number");
        switch (processedChoice) {
            case 0:
                done = true;
                break;
            case 1:
                promptfahrenheitToCelsius();
                break;
            case 2:
                promptcelsiusToFahrenheit();
                break;
            case 3:
                guessNumber();
                break;
            default:
        }
    }
}
//Bockat av alla funktioner
//meny();