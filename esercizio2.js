/*Esercizio 2 - Cicli e condizioni*/

const concatStringWithA = (stringArray) => {
    let concatenatedString = '';

    for(let i = 0; i < stringArray.length; i++){
        if(stringArray[i].toLowerCase().startsWith('a')){
            concatenatedString += stringArray[i];
        }

        if (concatenatedString.length > 10) {
            concatenatedString = concatenatedString.substring(0, 10);
            break;
        }
        
    }
    return concatenatedString;
};
 
/*Test per vedere se funziona il codice
const testArray = ["Armadillo", "ape", "cesoia", "bambina"];
const result = concatStringWithA(testArray)
console.log(result);*/




