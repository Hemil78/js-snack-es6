//Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
//Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.

/* FUNZIONI LOCALI */
const getRndInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

/* PRINCIPALE */
const squadre = [
    {
        "nome"        : "Longobarda",
        "punti"       : 0,
        "falliSubiti" : 0
    },
    {
        "nome"        : "Borgorosso",
        "punti"       : 0,
        "falliSubiti" : 0
    },
    {
        "nome"        : "Armatagiulia",
        "punti"       : 0,
        "falliSubiti" : 0
    }
];

//Generare numeri random al posto degli 0 nelle proprietà:
//Punti fatti e falli subiti.
//ciclo su tutte le squadre
for( let i = 0; i < squadre.length; i++) {
    squadre[i].punti = getRndInteger(10, 70);
    squadre[i].falliSubiti = getRndInteger(5, 30);
}
console.log(squadre);


//Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
//ciclo su tutte le squadre

const squadreFalli = [];

for( let i = 0; i < squadre.length; i++) {

    const {nome, falliSubiti} = squadre[i];

    const nuovoOggettoSquadra = {
        nome,                                         // <=== ABBREVIATO
        falliSubiti
    };

    squadreFalli.push(nuovoOggettoSquadra);
}
console.log(squadreFalli);






