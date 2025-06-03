/* Pari e Dispari L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto. */

//  L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
let userChoice = prompt('Scegli pari o dispari'); // creo un prompt per permettere all'utente di scegliere pari o dispari

userChoice = userChoice.toLowerCase(); // rendiamo la variabile case insensitive

while ((userChoice != 'pari') && (userChoice != 'dispari')) {
    userChoice = prompt('Scegli pari o dispari');
    //creo un ciclo while per far si che la parola scelta dall'utente sia pari o dispari
}
let userNumber = Number(prompt('Scegli un numero da 1 a 5')); // creo un prompt per permettere all'utente di scegliere un numero da 1 a 5
while (userNumber <= 0 || userNumber > 5 || userNumber == NaN) {
    userNumber = Number(prompt('Scegli un numero da 1 a 5'));
} //creo un ciclo while per far si che il numero scelto dall'utente vada da 1 a 5

// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione)
const pcNumber = randomNumber(); //creiamo la costante generata dalla funzione
alert(`Il computer ha estratto il numero ${pcNumber}`);

// Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) 

const oddOrEvenConst = oddOrEven(pcNumber, userNumber); // creo una costante per i numeri (pari o dispari)
const userChoiceEven = (userChoice == 'pari'); //creo una costante per la scelta pari
const userChoiceOdd = (userChoice == 'dispari'); //creo una costante per la scelta dispari

// Dichiariamo chi ha vinto.
if (userChoiceEven && oddOrEvenConst) {
    // pari e pari
    alert('Complimenti, hai vinto');
} else if (userChoiceEven && oddOrEvenConst) {
    // pari e dispari
    alert('Mi dipiace, hai perso');
} else if (userChoiceOdd && oddOrEvenConst) {
    // dispari e pari
    alert('Mi dipiace, hai perso');
} else {
    // dispari e dispari
    alert('Complimenti, hai vinto');
}
// tramite un if/else, decretiamo se l'utente ha vinto o meno


//Functions


//function oddOrEven
function oddOrEven(pcNum, userNum) {
    let sum = pcNumber + userNumber;
    if ((sum) % 2 === 0) {
        alert(`La somma dei numeri ${userNumber} e ${pcNumber} è pari`);
    } else {
        alert(`La somma dei numeri ${userNumber} e ${pcNumber} è dispari`);
    } // tramite un if/else, decretiamo se il numero è pari o dispari
}


//Function randomNumber
function randomNumber() {
    return Math.floor(Math.random() * 5) + 1;
}
//inizializzo una funzione che crea un numero random da 1 a 5 