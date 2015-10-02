/*
    Skrev först alla uppgifter i en fil, har sedan delat upp dem
*/

/* Uppgift 1 */
//Moment 1
//console.log("Hello World");
//Moment 2 Ascii newline
//alert("rad1\nrad2");
/* Uppgift 2 */
//Moment 1
//Ingen input check då det ej krävs i beskrivningen
/*
    adds four parameters and then divides them by 4.
    Input is not validated as a number
*/
function fourValues(one, two, three, four) {
    return ((one + two + three + four) / 4)
}
//Moment 2
/*
    Adds to parameters together to form a string
*/
function twoParameters(parameterOne, parameterTwo) {
    console.log(parameterOne + "," + parameterTwo);
}
//Check
//Moment 1,Moment 2
//twoParameters("Medelvärdet av 1+2+3+4 är lika med: ", fourValues(1, 2, 3, 4));

/*  Uppgift 3 */
/*  Gör ingen förfrågan om besökaren vill spela spelet eller om den vill 
    forsätta spela då det ej specificeras
*/
/*
    Guess the number function. Input is sanitized
*/
function guessNumber() {
    var numberIsGuessed = false;
    var secretNumber = Math.floor((Math.random() * 100)) + 1;
    var numberOfGuesses = 0;
    while (!numberIsGuessed) {
        var processedNumber = promptDecimalValidation("Guess a number, I'm thinking of a number between 1 and 100.")
        numberOfGuesses += 1;
        if (processedNumber < 0 || processedNumber > 100 || isNaN(processedNumber)) {
            alert("Please guess within the given range(1-100)");
        }
        else if (processedNumber > secretNumber) {
            alert(processedNumber + " is not the number. My number is lower");
        }
        else if (processedNumber < secretNumber) {
            alert(processedNumber + " is not the number. My number is higher");
        }
        else {
            alert("The secret number was " + secretNumber + ".\n You got the correct answer in " + numberOfGuesses + " guesses");
            numberIsGuessed = true;
        }
    }
}
//Bockat av att spelet fungerar och testat alla utfall
//guessNumber();
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

/* Uppgift 5 - String */

//Moment 1
/* Bokstavlig hash-metod -Hah!*/
function konvertera(hashTarget) {
    hashTarget = replaceAll('a', '#', hashTarget.toLowerCase());
    console.log(hashTarget);
}
/*  g är flagga för global match(alltså alla tecken i den första parameter-strängen) */
function replaceAll(find, replace, str) {
    return str.replace(new RegExp(find, 'g'), replace);
}

//Moment II
//Testad och avbockad
//konvertera("Jag tycker JAVASCRIPT är KUL!");

/* Uppgift 6 - Math */
//Moment 1
function pythagorasSats(katetA, katetB) {
    return Math.sqrt(Math.pow(katetA, 2) + Math.pow(katetB, 2));
}
/*
    Inget exempel med värdesiffror denna gång så det uteblir.
*/
function triangel() {
    var katetA = prompt("Ange längden på kateter 1:");
    var katetB = prompt("Ange längden på kateter 2:");

    console.log(pythagorasSats(katetA, katetB));
}
//Bockar av
//triangel();

/* Uppgift 7 - Tentamarodören */
//Moment I och II - inget krav på att sortera den. Varnar ej heller om maxvärdet för js överskrides
function tentamen(array) {
    var total = 0;
    var min = Number.MAX_VALUE;
    var max = Number.MIN_VALUE;
    var average = 0;

    if (Array.isArray(array)) {
        for (var i = 0; i < array.length; i++) {
            if (!isNaN(parseInt(array[i], 10))) {
                //Ett värde kan både vara min,max och average beroende på hur många tal läggs in i arrayen
                if (array[i] < min)
                    min = array[i];
                if (array[i] > max)
                    max = array[i];
                total += array[i];
            }
        }
        average = Math.round(total / array.length);
    }
    // Om input ej är en array
    else {
        return null;
    }
    return [average, max, min];
}
//Moment III
//console.log(tentamen([10,2,89,9,65,13,3]));
/*  
    Uppgift 8 - Födelsedag
    Funktion för att beräkna hur långt kvar det är till din födelsedag.
    Skottår tas hänsyn till i Date() objektet då februari får en extra 
    dag det året. Felaktig inmatat datum tas ej till hänsyn dock(Är ej 
    i specifikationen, det presumptiva datumet blir det istället, ie 
    februari den 31 ges som födelsedatum. Det blir istället den 3/3 då).
*/
function timeTilBirthday() {

    var month = NaN;
    var day = NaN;
    while (isNaN(month)) {
        month = promptIntegerDecimalValidation("Vilken månad fyller du år(1-12)?");
        month -= 1;
    }
    while (isNaN(day)) {
        day = promptIntegerDecimalValidation("Vilken dag fyller du år(1-31)?");
    }
    var birthDay = new Date();
    birthDay.setMonth(month);
    birthDay.setDate(day);
    //Kollar om användaren fyller år idag
    var timeLeft = (birthDay.getTime() - Date.now());
    //Om man fyller år idag
    if ((timeLeft / (1000 * 60 * 60 * 24) > 0 && 1 > (timeLeft / (1000 * 60 * 60 * 24))) || (timeLeft / (1000 * 60 * 60 * 24) === 0)) {
        birthDay.setYear(birthDay.getFullYear() + 1);
        timeLeft = (birthDay.getTime() - Date.now());
        alert("Grattis på födelsedagen. Det är  " + timeToDays(timeLeft) + " dagar kvar tills din nästa födelsedag");
    }
    // om Man redan har fyllt år så dröjer det ett år tills man fyller år igen
    else if (birthDay.getTime() < Date.now()) {
        birthDay.setYear(birthDay.getFullYear() + 1);
        timeLeft = (birthDay.getTime() - Date.now());
        alert("Det är " + timeToDays(timeLeft) + " dagar kvar tills din födelsedag");
    }
    //Om man fyller år i senare detta år
    else if (timeToDays(timeLeft) > 1) {
        alert("Det är " + timeToDays(timeLeft) + " dagar kvar tills din födelsedag");
    }
    else
        alert("Det är " + timeToDays(timeLeft) + " dag kvar tills din födelsedag");

    //Presenterar resultat i log
    console.log(birthDay.getTime());
    console.log(Date.now());
    console.log(timeToDays(timeLeft));
}

function timeToDays(time) {
    return Math.round(time / (1000 * 60 * 60 * 24));
}
//avbockat
//timeTilBirthday();

/* Uppgift 9 - Tabellgenerering */

function generateTable(twoDimensionalTableArray) {
    
    console.log(typeof twoDimensionalTableArray);
    console.log(twoDimensionalTableArray.length);
    console.log(twoDimensionalTableArray[0].length);
    
    //Ugh, le manually generated html
    //börjar med kroppen o le tablee
    var toBeWritten = "<body>\n <table> ";
    //Brutit ut thead då jag slipper att en if() körs varje loop
    toBeWritten += "<thead>\n";
    toBeWritten+="<tr>\n";
    for (var i = 0; i < twoDimensionalTableArray.length; i++) {
            toBeWritten+="<td>\n";
            toBeWritten+=twoDimensionalTableArray[0][i]
            toBeWritten+="</td>\n";        
    }
    toBeWritten += "</thead>";
    toBeWritten+="</tr>\n";
    //skippar som sagt första raden här
    for (var i = 1; i < twoDimensionalTableArray.length; i++) {
        toBeWritten+="<tr>\n";
        for (var j = 0; j < twoDimensionalTableArray[i].length; j++) {
            toBeWritten+="<td>\n";
                toBeWritten+=twoDimensionalTableArray[i][j];
            toBeWritten+="</td>\n";
        }
        toBeWritten+="</tr>\n";
    }
    toBeWritten += " </table>\n </body>";
    
    document.open();
    document.write(toBeWritten);
    document.close();
}
/* Matrisdata */
var cell = [[],[],[]];
cell[0][0] = "Förnamn:";
cell[0][1] = "Efternamn:";
cell[0][2] = "Telefon:";
cell[1][0] = "Haris";
cell[1][1] = "Kljajic";
cell[1][2] = "7716";
cell[2][0] = "Mats";
cell[2][1] = "Loock";
cell[2][2] = "7714";
generateTable(cell);
