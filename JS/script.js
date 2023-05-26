console.log('JS OK')


// FASE PRELIMINARE
// Punto all'elemento della pagina
const paragraph = document.getElementById('display-result');

// Creo le Variabili costanti che serviranno per il calcolo successivo
const under18 = 18;
const over65 = 65;
const discount40 = 40;
const discount20 = 20;
const costo_km = 0.21;

// Verifico le variabili in console
console.log(under18);
console.log(over65);
console.log(discount40);
console.log(discount20);
console.log(costo_km);


// SVOLGIMENTO
// Chiedo i dati all'utente con parsInt e li salvo in variabile
const km_amount = parseInt(prompt('Ciao! Quanti km intendi fare?'));
console.log(km_amount);

const age = parseInt(prompt('Qual è la tua età?'));
console.log(age);
