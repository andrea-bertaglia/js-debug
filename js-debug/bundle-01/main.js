/*******************************************************************************

    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio

*******************************************************************************/

// ESERCIZIO 1
// for (let i = 0; i > 5; i++) {
//     console.log(i);
// }

for (let i = 0; i < 5; i++) {
  console.log("es.1", i);
}

// * 1- Che cosa fa questo codice?
// effettua un ciclo for infinito in quanto la condizione di fine ciclo è indefinita (i maggiore di 5, dato che incrementa sempre di 1 con i++ non c'è una fine)
// * 2- Sono presenti errori di sintassi?
// no
// * 3- Sono presenti errori logici?
// c'è un errore di logica (tranne che quando i = 0,1,2,3,4 la condizione i > 5 sarà sempre vera con let i = 0)

// ESERCIZIO 2
// function addIfEven(num) {
//     if (num % 2 = 0) {
//         return num + 5;
//     }
//     return num;
// }

function addIfEven(num) {
  if (num % 2 === 0) {
    return num + 5;
  }
  return num;
}

console.log("es.2", addIfEven(4));

// * 1- Che cosa fa questo codice?
// la funzione dovrebbe ritornare un numero addizionato di 5, se il numero originario è pari
// * 2- Sono presenti errori di sintassi?
// si in quanto viene usato = per la verifica, ma non è possibile in quanto = è un operatore di assegnazione
// * 3- Sono presenti errori logici?
// se l'intenzione è ritornare un numero SOLO se è pari, non ci dovrebbe essere l'ultima riga in quanto ritorna il numero di partenza anche nel caso in cui sia dispari

// ESERCIZIO 3
// function loopToFive() {
//     for (let i = 0, i < 5, i++) {
//         console.log(i);
//     }
// }

function loopToFive() {
  for (let i = 0; i < 5; i++) {
    console.log("es.3", i);
  }
}

loopToFive();

// * 1- Che cosa fa questo codice?
// la funzione dovrebbe stampare in console tutti i numeri compresi tra 0 e 4, tramite un ciclo for
// * 2- Sono presenti errori di sintassi?
// si, gli argomenti del ciclo for devono essere separati con ";" mentre qui viene usata la virgola ","
// * 3- Sono presenti errori logici?
// no (se l'intenzione è arrivare a 5, allora in questo caso c'è un errore perchè andrebbe messo <=)

// ESERCIZIO 4 (suggerimento: ci sono 7 errori)
// function displayEvenNumbers() {
//     let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
//     let evenNumbers = [];
//     for (let i = 0; i < numbers.length - 1; i++;) {
//         if (numbers % 2 = 0); {
//             evenNumbers.push(i);
//         }
//         return evenNumbers;
//     }
// }
// displayEvenNumbers(); // dovrebbe restituire [2,4,6,8]

function displayEvenNumbers() {
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
  let evenNumbers = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      evenNumbers.push(numbers[i]);
    }
  }
  return evenNumbers;
}
console.log("es.4", displayEvenNumbers());

// * 1- Che cosa fa questo codice?
// la funzione ritorna i numeri pari dell'array numbers
// * 2- Sono presenti errori di sintassi?
// si, gli errori sono
//  1. operatore di assegnazione per let i = 0 dentro il ciclo for
//  2. c'è il simbolo ";" dopo i++, ma non ci va nell'ultimo argomento
//  3. nella condizione numbers % 2 c'è l'operatore di assegnazione "="
//  4. dopo la condizione if c'è il ";" prima della parentesi graffa che non va messo
// * 3- Sono presenti errori logici?
// si, gli errori sono
//  1. per pushare il numero pari nell'array, bisogna scrivere numbers [i] per prendere il valore, mentre qui viene pushato il valore dell'indice
//  2. per mostrare il risultato atteso [2,4,6,8] la funzione dovrebbe essere eseguita dentro console.log()
//  3. per ciclare su tutto l'array bisogna mettere la condizione i < numbers.length altrimenti come è scritto qui si ferma all'indice 6
