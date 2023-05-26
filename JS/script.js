console.log('JS OK')

// FASE PRELIMINARE
// Punto all'elemento della pagina
const paragraph = document.getElementById('display-result');

// VARIABILI BONUS
const km_display = document.getElementById('km-display');
const age_display = document.getElementById('age-display');
const discount_perc = document.getElementById('discount-perc');
const discount_display = document.getElementById('discount-display');
const ticket_display = document.getElementById('ticket-display');
const ticket_gross = document.getElementById('ticket-gross');

// Creo le Variabili che serviranno per il calcolo successivo
const under18 = 19;
const over65 = 64;
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


// ! VALIDAZIONE
// Dichiaro una variabile che cambierà a seconda dell'input dell'utente
let isCorrect = true;

// Verifico la condizione necessaria per il proseguo del programma
if ((isNaN(km_amount) || km_amount < 1) && (isNaN(age) || age < 1)) {
    isCorrect = false;
    console.log("Non stai inserendo un valore corretto!");
    alert("Devi inserire un numero e deve essere maggiore di 0!");
}

if (isCorrect) {
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


    // Verifico che valore ha assunto la variabile discount
    console.log(discount);


    // Calcolo il costo del biglietto e lo stampo in console con 2 numeri dopo la virgola
    let ticket = (km_amount * cost_km);
    console.log(ticket.toFixed(2));

    // Dichiaro la variabile che poi assumerà valore nell'istruzione condizionale
    let ticket_net;


    // Calcolo il costo del biglietto scorporando lo sconto
    if (discount === 0) {
        console.log("Il prezzo del biglietto è di €" + ticket.toFixed(2));
        ticket_net = ticket;

    } else if (discount === 20) {
        console.log(ticket);
        ticket_net = ticket - ((ticket * discount) / 100);
        console.log("Il prezzo del biglietto è di €" + ticket_net.toFixed(2));

    } else {
        console.log(ticket);
        ticket_net = ticket - ((ticket * discount) / 100);
        console.log("Il prezzo del biglietto è di €" + ticket_net.toFixed(2));
    }


    // Stampa in pagina il risultato con 2 numeri dopo la virgola
    km_display.innerText = km_amount;
    age_display.innerText = age;
    discount_perc.innerText = discount;
    ticket_gross.innerText = ticket;
    discount_display.innerText = (ticket - ticket_net).toFixed(2);
    ticket_display.innerText = ticket_net.toFixed(2);
}


