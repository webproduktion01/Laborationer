/* Uppgift 5 - String */

//Moment 1
/* 
    Bokstavlig hash-metod -Hah!
    Skrev denna innan jag läste igenom uppgiften igen. Bara att ignorera.
*/
function konvertera(hashTarget) {
    hashTarget = replaceAll('a', '#', hashTarget.toLowerCase());
    console.log(hashTarget);
}
/*  g är flagga för global match(alltså alla tecken i den första parameter-strängen) */
function replaceAll(find, replace, str) {
    return str.replace(new RegExp(find, 'g'), replace);
}
/*
    Uppgift 5 metod som efterfrågas
*/
function konvertera(strangeth){
    var newString="";
    for(var i=0;i<strangeth.length;i++){
        if(strangeth.charAt(i)==="a"|| strangeth.charAt(i)==="A"){
            newString+="#";
        }
        else if(strangeth.charAt(i)===strangeth.charAt(i).toLowerCase()){
            newString+=strangeth.charAt(i).toLocaleUpperCase();
        }
        else if(strangeth.charAt(i)===strangeth.charAt(i).toUpperCase()){
            newString+=strangeth.charAt(i).toLowerCase();
        }
    }
    return newString;
}

//Moment II
//Testad och avbockad
var original = "Jag tycker JAVASCRIPT är KUL!";
console.log(konvertera(original));
console.log(original);