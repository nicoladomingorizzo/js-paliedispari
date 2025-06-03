/* Pari e Dispari L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto. */

//  L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
const userChoice = prompt('Scegli pari o dispari'); // creo un prompt per permettere all'utente di scegliere pari o dispari
const userNumber = Number(prompt('Scegli un numero da 1 a 5')); // creo un prompt per permettere all'utente di scegliere un numero da 1 a 5

// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione)
function randomNumber() {
    return Math.floor(Math.random() * 5 + 1);
} //inizializzo una funzione che crea un numero random da 1 a 5 
// Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) 

// Dichiariamo chi ha vinto.