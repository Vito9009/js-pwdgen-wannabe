let userInputName = prompt ("Inserisci il tuo nome");
let userInputLastName = prompt ("Inserisci il tuo cognome");
let userInputFavoriteColor = prompt ("Inserisci il tuo colore preferito");

let myNumber = 21;

document.getElementById("securepassword").innerHTML = userInputName + userInputLastName + userInputFavoriteColor + myNumber;

/*

*** ALTERNATIVA ESERCIZIO PRINCIPALE ***

let userInputName = prompt ("Inserisci il tuo nome");
let userInputLastName = prompt ("Inserisci il tuo cognome");
let userInputFavoriteColor = prompt ("Inserisci il tuo colore preferito");

let myNumber = 21;

let userDataAio = userInputName + userInputLastName + userInputFavoriteColor;

document.getElementById("securepassword").innerHTML = userDataAio + myNumber;
*/

/*

*** ALTERNATIVA CON CONST E MOLTIPLICAZIONE ETÀ PER GENERAZIONE NUMERO PASSWORD ***

let userInputName = prompt ("Inserisci il tuo nome");
let userInputLastName = prompt ("Inserisci il tuo cognome");
let userInputFavoriteColor = prompt ("Inserisci il tuo colore preferito");
let userInputAge = prompt ("Quanti anni hai?");

console.log(userInputAge);
console.log(parseInt(userInputAge));

const myMultiplier = 654

document.getElementById("securepassword").innerHTML = userInputName + userInputLastName + userInputFavoriteColor + (parseInt(userInputAge) * myMultiplier);
*/