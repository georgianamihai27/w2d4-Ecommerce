/* ESERCIZIO W2D4
   E-COMMERCE CON AMBASSADOR
*/

// Lista dei prezzi dei prodotti
let prezzi = [25, 40, 30];

// Costo fisso della spedizione
let spedizione = 10;

// Creiamo gli utenti
let utente1 = {
    nome: "Marco",
    cognome: "Rossi",
    isAmbassador: true
};

let utente2 = {
    nome: "Giulia",
    cognome: "Bianchi",
    isAmbassador: false
};

// Calcoliamo il totale dei prodotti
let totaleCarrello = 0;

for (let i = 0; i < prezzi.length; i++) {
    totaleCarrello += prezzi[i];
}

// Creiamo un array di utenti
let utenti = [];

utenti.push(utente1);
utenti.push(utente2);

// Controlliamo ogni utenti
for (let i = 0; i < utenti.length; i++) {

    let utente = utenti[i];
    let totale = totaleCarrello;

    if(utente.isAmbassador === true) {
        totale = totale * 0.70;
    }

    // Spedizione gratuita sopra i 100 euro
    if (totale <= 100) {
        totale = totale + spedizione;
    }

    console.log(
        utente.nome + " " + utente.cognome +
        " deve pagare: " + totale + " euro"
    );
    
    if (utente.isAmbassador === true) {
        console.log(
            utente.nome + " " + utente.cognome +
            " è un ambassador"
        );
    } else {
        console.log(
            utente.nome + " " + utente.cognome +
            " non è un ambassador"
        );
    }
}

// Creiamo un secondo array
// contenente solo gli amabassador

let ambassadors = [];

for (let i = 0; i < utenti.length; i++) {
    if (utenti[i].isAmbassador === true) {
        ambassadors.push(utenti[i]);
    }
}

console.log("Lista ambassador:", ambassadors);