// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// Il prezzo del biglietto è definito in base ai km(0.21 € al km).
// Va applicato uno sconto del 20 % per i minorenni.
// Va applicato uno sconto del 40 % per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.


// CHIEDO NUMERO DI CHILOMETRI DA PERCORRERE
const chilometri = parseInt(prompt('Quanti chilometri vuoi percorrere?'));
// CHIEDO ETA' PASSEGGERO
const etaPasseggero = parseInt(prompt('Quanti anni hai?'));

// CALCOLO IL PREZZO € 0.21 per km e impongo massimo due decimali
let prezzoStandard = parseFloat(0.21 * chilometri).toFixed(2);

// SE PASSEGGERO E' MINORENNE APPLICO SCONTO DEL 20% con massimo due decimali
if (etaPasseggero < 18) {
    let scontoMinorenni = parseFloat(prezzoStandard - ((prezzoStandard * 20) / 100)).toFixed(2);
    document.getElementById('prezzo-biglietto').innerHTML = 'Il prezzo riservato ai minorenni è € ' + scontoMinorenni;
}
// SE IL PASSEGGERO E' OVER 65 APPLICO SCONTO DEL 40% con massimo due decimali
else if (etaPasseggero > 65) {
    let scontoSenior = parseFloat(prezzoStandard - ((prezzoStandard * 40) / 100)).toFixed(2);
    document.getElementById('prezzo-biglietto').innerHTML = 'Il prezzo riservato agli over 65 è € ' + scontoSenior;
}
// ALTRIMENTI APPLICO IL PREZZO STANDARD 
else {
    document.getElementById('prezzo-biglietto').innerHTML = 'Il prezzo standard è € ' + prezzoStandard;
}

// document.getElementById('prezzo-biglietto').innerHTML = 'Il prezzo standard è €', prezzoStandard;