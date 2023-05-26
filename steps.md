<!-- Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.

Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:

il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori con massimo due decimali, per indicare centesimi sul prezzo. Questo richiederà un minimo di ricerca.

BONUS
Stampare il prezzo finale sulla pagina invece che in console
Aggiungere, sempre in pagina, altre informazioni, come il prezzo prima dello sconto e l'età e il chilometraggio indicati dall'utente
Validazione
Abbellimenti vari con CSS -->

# Calcolo costo del biglietto del treno

## Fase preliminare

- Creo una variabile che punta ad un elemento della pagina
- Creo una variabile per minorenne
- Creo una variabile per over 65
- Creo una variabile con lo sconto anziani
- Creo una variabile con lo sconto giovani
- Creo una variabile con il costo/km

## Svolgimento

- Chiedo all'utente il numero dei km che intende percorrere.
- Chiedo l'eta all'utente.
- Verifico se l'utente è minorenne, over 65 oppure se non rientra nelle due casistiche.
- Calcolo il costo del biglietto in base ai km.
- Verifico se il biglietto va scontato e con quale %.
- Adeguo il prezzo per una lettura più agevole.

## Bonus

- Stampare in pagina il prezzo finale
- Aggiungere in pagina dati aggiuntivi, sconto applicato, prezzo non scontato ecc
- Validazione
- CSS
