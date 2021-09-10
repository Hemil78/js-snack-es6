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
