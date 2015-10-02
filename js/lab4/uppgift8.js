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
timeTilBirthday();