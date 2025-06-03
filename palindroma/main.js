/* Palidroma
Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma */

// Chiedere all’utente di inserire una parola
const userWord = prompt('Scrivi una parola'); //creo una costante in cui inserisco un prompt
userWord = userWord.toLowerCase(); //rendo una costante case insensitive

/**
 * Take a word and reverse it, also lower case
 * 
 * @param {string} string The word to reverse
 * @returns The reversed word in lower case
 */
function stringReverse(string) {
    return string.toLowerCase().split('').reverse().join('');
} // creo una funzione in cui inserisco una concatenazione di metodi: per prima cosa inserisco uno split che trasforma la stringa in array, dopo inserisco il reverse che inverte il flusso dell'array ed infine il join che ritrasforma l'array in stringa

// Creare una funzione per capire se la parola inserita è palindroma
function palindrome(userWord) {
    if (userWord === stringReverse(userWord)) {
        alert(`The word ${userWord} is : palindrome`);
    } else {
        alert(`The word ${userWord} isn't : palindrome`);
    }
} // scrivo una funziona che permette di verificare se la parola scritta è palindroma oppure no, usando la funzione creata in precedenza con il parametro interno che mi serve, ovvero il prompt che crea userWord

palindrome(userWord);// infine richiamo la funzione che ho creato
