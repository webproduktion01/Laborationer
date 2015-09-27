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
triangel();