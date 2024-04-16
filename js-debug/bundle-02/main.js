/*******************************************************************************
​
    Per questo esercizio, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?
​
    Inserisci i tuoi commenti con le risposte alla fine dell'esercizio
​
*******************************************************************************/

// ESERCIZIO 1
// function checkAge() {
//     const myAge = 32;
//     const message = '';

//     if (myAge < 18) {
//         message = `Sei troppo giovane! Hai ${myAge} anni!`;
//     } else {
//         message = 'Hai più di 18 anni!';
//     }
// }
// checkAge();

function checkAge() {
  const myAge = 32;
  let message = "";

  if (myAge < 18) {
    message = `Sei troppo giovane! Hai ${myAge} anni!`;
  } else {
    message = "Hai più di 18 anni!";
  }
  console.log("es.1", message);
}
checkAge();

// * 1- Che cosa fa questo codice?
//  questa funzione verifica l'età dell'utente e restituisce il messaggio se è maggiorenne o minorenne
// * 2- Sono presenti errori di sintassi?
//  si, gli errori sono:
//  1. la dichiarazione di message andrebbe fatta come let
//  2. manca un console.log per stampare il risultato
// * 3- Sono presenti errori logici?
//  si, gli errori sono:
//  1. la funzione dovrebbe avere l'età da verificare come parametro in ingresso, anzichè come variabile definita all'interno
//  2. la funzione non considera il caso di persona di 18 anni

// ESERCIZIO 2
// function printColorsNumber() {
//   const colors = ["blue", "red", "yellow", "green", "black"];
//   console.log(`Nella mia palette ci sono ${colors.lenght} colori!`);
// }
// printColorsNumber();

function printColorsNumber() {
  const colors = ["blue", "red", "yellow", "green", "black"];
  console.log("es.2", `Nella mia palette ci sono ${colors.length} colori!`);
}
printColorsNumber();

// * 1- Che cosa fa questo codice?
//  la funzione conta il numero di elementi dell'array
// * 2- Sono presenti errori di sintassi?
//  si, c'è scritto "lenght" anzichè "length"
// * 3- Sono presenti errori logici?
//  no

// ESERCIZIO 3
// function addNumbers() {
//     const userNumber = prompt("Inserisci un numero");
//     const total = userNumber + 12;

//     console.log(`Il risultato finale è ${total}`);
//   }
//   addNumbers();

function addNumbers() {
  const userNumber = parseInt(prompt("Inserisci un numero"));
  const total = userNumber + 12;

  console.log(`Il risultato finale è ${total}`);
}
addNumbers();

// * 1- Che cosa fa questo codice?
//  la funzione chiede un numero all'utente e restituisce la somma del numero + 12
// * 2- Sono presenti errori di sintassi?
//  si, manca la funzione parseInt per trasformare la stringa che arriva dal prompt in numero
// * 3- Sono presenti errori logici?
//  si, vengono "sommati" una stringa ed un numero tra loro, questo comporta una concatenazione anzichè un numero

// ESERCIZIO 4
// function checkAccess() {
//   const addresses = [
//     "mymail@mail.com",
//     "yourmail@mail.com",
//     "hermail@mail.com",
//     "hismail@mail.com",
//   ];
//   const userEmail = prompt("Inserisci il tuo indirizzo email");

//   let grantAccess = "false";

//   if (addresses.includes(userEmail)) {
//     grantAccess = "true";
//   }

//   if (grantAccess === true) {
//     console.log("Accesso consentito!");
//   } else {
//     console.log("Accesso negato!");
//   }
// }
// checkAccess();

function checkAccess() {
  const addresses = [
    "mymail@mail.com",
    "yourmail@mail.com",
    "hermail@mail.com",
    "hismail@mail.com",
  ];
  const userEmail = prompt("Inserisci il tuo indirizzo email");

  let grantAccess = false;

  if (addresses.includes(userEmail)) {
    grantAccess = true;
    console.log("Accesso consentito!");
  } else {
    console.log("Accesso negato!");
  }
}
checkAccess();

// * 1- Che cosa fa questo codice?
//  la funzione verifica se l'indirizzo email inserito dall'utente è valido per l'accesso
// * 2- Sono presenti errori di sintassi?
//  si, l'operatore booleano va dichiarato senza apici
// * 3- Sono presenti errori logici?
//  si, possiamo ridurre i due "if" ad uno solo

// ESERCIZIO 5 (suggerimento: c'è un solo errore)
// function checkAccessImproved() {
//   const addresses = [
//     "mymail@mail.com",
//     "yourmail@mail.com",
//     "hermail@mail.com",
//     "hismail@mail.com",
//   ];

//   const userEmail = prompt("Inserisci il tuo indirizzo email");

//   let grantAccess = "false";

//   for (let i = 0; i < addresses.length; i++) {
//     const email = addresses[i];

//     if (userEmail.length > 5) {
//       if (email === userEmail) {
//         grantAccess = "true";
//       }
//     }

//     if (grantAccess) {
//       console.log("Accesso consentito!");
//     } else {
//       console.log("Accesso negato!");
//     }
//   }
// }
// checkAccessImproved();

function checkAccessImproved() {
  const addresses = [
    "mymail@mail.com",
    "yourmail@mail.com",
    "hermail@mail.com",
    "hismail@mail.com",
  ];

  const userEmail = prompt("Inserisci il tuo indirizzo email");

  let grantAccess = "false";

  for (let i = 0; i < addresses.length; i++) {
    const email = addresses[i];

    if (userEmail.length > 5) {
      if (email === userEmail) {
        grantAccess = "true";
      }
    }
  }
  if (grantAccess === "true") {
    console.log("Accesso consentito!");
  } else {
    console.log("Accesso negato!");
  }
}
checkAccessImproved();

// * 1- Che cosa fa questo codice?
// la funzione verifica se l'indirizzo email inserito dall'utente è valido per l'accesso
// * 2- Sono presenti errori di sintassi?
//  no
// * 3- Sono presenti errori logici?
//  si, manca la condizione nel secondo if (un'altro errore però è anche la presenza di questo if all'interno del ciclo for perchè ripete il controllo su granAccess per ogni elemento dell'array, anzichè verificarlo alla fine)
