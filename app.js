var fs = require('fs');

var separator = "\n--------------------------------------------------------------------------------";

fs.readFile('./flower.txt', function (err, data) {
    if (err) throw err;

    var flowers = data.toString();

    //task 1: count number of rows
    var numberOfRows = getNumberOfRows(flowers);
    console.log("Number of rows = " + numberOfRows + separator);

    //task 2: get flower names that start with 'S'
    var sInitialLetterFlowerNames = getFlowerNamesStartingWithSpecificLetter(flowers, "s");
    console.log("Flower names that start with 'S':\n" + sInitialLetterFlowerNames + separator);

    //task 3: count number of flower names that do not start with 'S'
    var numberOfFlowersWithNotSInitial = getNumberOfFlowersWithNotSInitial(flowers);
    console.log("Number of flower names that do not start with 'S' = " + numberOfFlowersWithNotSInitial + separator);

    // task 4: get flower names that start with 'H'
    var hInitialLetterFlowerNames = getFlowerNamesStartingWithSpecificLetter(flowers, "h");
    console.log("Flower names that start with 'H':\n" + hInitialLetterFlowerNames + separator);

    //task 5: get the flowers, whose name's length is 5
    var flowersWithNameLengthEqualsFive = getFlowersWithNameLengthEqualsFive(flowers);
    console.log("Flowers whose name's length equals 5:\n" + getFlowersWithNameLengthEqualsFive(flowers) + "");

});

// function emptyRow(row) {
//     if (row === "")
//         return true;
// }

function flowerNames(flowers) {
    var rows = flowers.split("\n");
    return rows;
}

function getNumberOfRows(flowers) {
    var numberOfRows = flowerNames(flowers).length;
    return numberOfRows;
}


function getFlowerNamesStartingWithSpecificLetter(flowers, letter) {

    flowers = flowerNames(flowers);
    var sInitialLetterFlowerNames = [];
    var initialLetter = "";
    letter = letter.toLowerCase();

    for (var i = 0; i < flowers.length; i++)
    {
        initialLetter = flowers[i].charAt(0);
        if (initialLetter.toLowerCase() == letter)
            sInitialLetterFlowerNames.push(flowers[i]);
    }
    return sInitialLetterFlowerNames;
}


function getNumberOfFlowersWithNotSInitial(flowers) {
    return getNumberOfRows(flowers) - getFlowerNamesStartingWithSpecificLetter(flowers, "s").length;
}

function getFlowersWithNameLengthEqualsFive(flowers) {
    flowers = flowerNames(flowers);
    var names = [];
    for(var i=0; i<flowers.length; i++)
    {
        if(flowers[i].length === 5)
            names.push(flowers[i]);
    }

    return names;
}
