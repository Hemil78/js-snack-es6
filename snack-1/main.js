//Creare un array di oggetti:
//Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
//Stampare a schermo la bici con peso minore utilizzando destructuring e template literal

const bici = [
    {
        "nome" : "pinarello",
        "peso" : 9
    },
    {
        "nome" : "bottecchia",
        "peso" : 10
    },
    {
        "nome" : "bianchi",
        "peso" : 8
    },
];

let biciLeggera = bici[0];

for(let i = 0; i < bici.length; i++) {
    if(bici[i].peso < biciLeggera.peso) {
        biciLeggera = bici[i];
    }
        
}
const{nome} = biciLeggera;
console.log(`la bici più leggera è la ${nome}`);