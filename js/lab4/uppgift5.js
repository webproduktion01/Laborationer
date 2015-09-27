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
konvertera("Jag tycker JAVASCRIPT är KUL!");