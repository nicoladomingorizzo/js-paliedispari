/* Pari e Dispari L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto. */

//  L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
const userChoice = prompt('Scegli pari o dispari'); // creo un prompt per permettere all'utente di scegliere pari o dispari
const userNumber = Number(prompt('Scegli un numero da 1 a 5')); // creo un prompt per permettere all'utente di scegliere un numero da 1 a 5

// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione)
function randomNumber() {
    return Math.floor(Math.random() * 5 + 1);
}
alert(`Il computer ha estratto il numero ${randomNumber()}`);//inizializzo una funzione che crea un numero random da 1 a 5 
// Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) 
function total(num1, num2) {
    return num1 + num2;
} // inizializziamo una funzione di somma tra num1 e num2
if (total(((randomNumber()) + userNumber) % 2 === 0)) {
    alert(`La somma dei numeri ${userNumber} e ${randomNumber()} è pari`)
} else {
    alert(`La somma dei numeri ${userNumber} e ${randomNumber()} è dispari`)
} // tramite un if/else, decretiamo se il numero è pari o dispari

// Dichiariamo chi ha vinto.
if ((userChoice == 'pari') == 'pari') {
    alert('Complimenti, hai vinto')
} else if ((userChoice == 'pari') !== 'pari') {
    alert('Mi dipiace, hai perso')
} else if ((userChoice == 'dispari') == 'pari') {
    alert('Mi dipiace, hai perso')
} else {
    alert('Complimenti, hai vinto')
}
// tramite un if/else, decretiamo se l'utente ha vinto o meno