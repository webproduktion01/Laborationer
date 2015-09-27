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
twoParameters("Medelvärdet av 1+2+3+4 är lika med:", fourValues(1, 2, 3, 4));