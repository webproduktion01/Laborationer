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
        var processedNumber = promptIntegerDecimalValidation("Guess a number, I'm thinking of a number between 1 and 100.")
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