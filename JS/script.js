console.log('JS OK')


// FASE PRELIMINARE
// Punto all'elemento della pagina
const paragraph = document.getElementById('display-result');

// Creo le Variabili costanti che serviranno per il calcolo successivo
const under18 = 18;
const over65 = 65;
let discount;
const cost_km = 0.21;

// Verifico le variabili in console
console.log(under18);
console.log(over65);
console.log(discount);
console.log(cost_km);


// SVOLGIMENTO
// Chiedo i dati all'utente con parsInt e li salvo in variabile
const km_amount = parseInt(prompt('Ciao! Quanti km intendi fare?'));
console.log(km_amount);

const age = parseInt(prompt('Qual è la tua età?'));
console.log(age);

// Verifico se l'utente è maggiorenne
if ((age >= under18) && (age <= over65)) {
    discount = 0;
    console.log("Non hai diritto allo sconto");
    console.log(discount);

} else if (age <= under18) {
    discount = 20;
    console.log("Sei ggggiovane, hai uno sconto del " + discount + "%!");

} else {
    discount = 40;
    console.log("Sei vecio!, hai uno sconto del " + discount + "%!");
}

// Verifico che valora ha assunto la variabile discount
console.log(discount);

// Calcolo il costo del biglietto e lo stampo con 2 numeri dopo la virgola
let ticket = (km_amount * cost_km);
console.log(ticket.toFixed(2));

// Calcolo il costo del biglietto scorporando lo sconto
if (discount === 0) {
    console.log("Il prezzo del biglietto è di €" + ticket.toFixed(2));
} else if (discount === 20){
    console.log(ticket);
    ticket -= ((ticket * discount)/100);
    console.log("Il prezzo del biglietto è di €" + ticket.toFixed(2));
} else {
    console.log(ticket);
    ticket -= ((ticket * discount)/100);
    console.log("Il prezzo del biglietto è di €" + ticket.toFixed(2));
}

// Stampa in pagina il risultato
paragraph.innerText = "Il prezzo del biglietto è: €" + ticket;