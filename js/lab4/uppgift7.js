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
console.log(tentamen([10,2,89,9,65,13,3]));