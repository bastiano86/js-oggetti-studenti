//1-crea un oggetto con i dati dell'utente//

let studente = {
    nome:'Simone',
    cognome:'Bonelli',
    anni:24,
};
//ciclando in for tutte le proprietà di studente stampo lo stesso utente assieme alle proprietà con la formattazione//
for (let proprieta in studente) {
    console.log(proprieta + ': ' +studente[proprieta]);
};

//2-creo un array(classe) di oggetti studente//
let classe = [ 
    {nome:'Ivan', cognome:'Nastro', anni:28},
    {nome:'Sofia',cognome:'Papa',anni:23},
    {nome:'Francesco',cognome:'Sica',anni:25},
    {nome:'Morena',cognome:'Fischione',anni:27}
];

console.log();

//ciclando in for tutto l'array inizializzo una nuova costante(studente) stampo come su con la formattazione tutte le proprietà a meno dell'età//
for (let x = 0; x < classe.length ; x++){
    const studente = classe[x];
    console.log(studente['nome'] + ' ' + studente.cognome + ',');
};

console.log();

//3- chiedo per 5 volte da prompt nome,cognome ed età
for(i = 0; i < 5; i++){
const nomeUtente = prompt('inserisci un nome');
const cognomeUtente = prompt('inserisci un cognome');
const anniUtente = parseInt(prompt('inserisci gli anni'));

let oggettoListaUtente = {};
//li associo alle proprietà di un nuovo oggetto vuoto
oggettoListaUtente.nome = nomeUtente;
oggettoListaUtente.cognome = cognomeUtente;
oggettoListaUtente.anni= anniUtente;

// stamo 5 volte in maniera formattata ogni elemento con le relative proprietà 
const nuovoOggetto = oggettoListaUtente;
console.log(nuovoOggetto.nome + ' ' + nuovoOggetto.cognome + ' ' + nuovoOggetto.anni + ',');
}