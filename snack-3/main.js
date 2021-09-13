//Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
//La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
//Usiamo i nuovi metodi degli array foreach o filter.

//1. definisco un'array di elementi
var arrayDefoult = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arrayDefoult);

//2. chiedo all'utente due numri minimo e massimo
let numMin = parseInt(prompt("inserisci un numero minimo tra 1 e 10"));
let numMax = parseInt(prompt("inserisci un numero massimo tra 1 e 10"));

//3. creo una funzione ed uso il metodo filter per estrapolare e salvare in un nuovo array gli elementi che desidero
const numeriMinMax = arrayDefoult.filter((elm) => {

    return elm >= numMin  && elm <= numMax;

});

console.log(numeriMinMax);


// CORREZIONE

//FUNZIONE con FOREACH

/* const spliceArray = (arr, a, b) => {
    const arrTemp = [];
    arr.forEach(
        (element, index) => {
            if(i >= a && i <= b) {
                arrTemp.push(element);
            }
        }
    );
    return arrTemp;
}

//PRIMCIPALE


const arr = [10, 20, 30, 40, 50, 60, 70];

const newArr = spliceArray(arr, 1, 3);

console.log(newArr); */

//FUNZIONE con FILTER

/* const spliceArray = (arr, a, b) => {

    return arr.filter(
        (element, i) => {
            return i >= a && i <= b;
        }
    );
}

const spliceArray = (arr, a, b) => arr.filter( (element, i) => i >= a && i <= b);    //<=== CON UNA SOLA ISTRUZIONE SI PUO ABBREVIARE LA FUNZIONE


const arr = [10, 20, 30, 40, 50, 60, 70];

const newArr = spliceArray(arr, 1, 3);

console.log(newArr); */