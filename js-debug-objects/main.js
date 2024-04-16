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

// ESERCIZIO 1 (suggerimento: ci sono 6 errori)
// const cars = [
//     {
//         manufacturer: 'Ford',
//         model: 'Fiesta',
//         type: 'diesel'
//     },
//     {
//         manufacturer: 'Audi',
//         model: 'A1',
//         type: 'benzina'
//     },
//     {
//         manufacturer: 'Volkswagen',
//         model: 'Golf',
//         type: 'Benzina'
//     },
//     {
//         manufacturer: 'Fiat',
//         model: 'Panda',
//         type: 'metano'
//     },
//     {
//         manufacturer: 'Fiat',
//         model: 'Multipla',
//         type: 'GPL'
//     },
//     {
//         manufacturer: 'Tesla',
//         model: 'Model 3',
//         type: 'elettrico'
//     },
//     {
//         manufacturer: 'Volkswagen',
//         model: 'Polo',
//         type: 'benzina'
//     },
//     {
//         manufacturer: 'Ford',
//         model: 'Kuga',
//         type: 'Diesel'
//     },
//     {
//         manufacturer: 'Seat',
//         model: 'Ibiza',
//         type: 'metano'
//     }
//     {
//         manufacturer: 'Audi',
//         model: 'R8',
//         type: 'Benzina'
//     },
// ];

// const gasolineCars = cars.filter( (auto) >= auto.type === 'benzina');

// const dieselCars = cars.filter( (auto) => {
//     auto.type === 'diesel';
// });

// const otherCars = cars.filter( (auto) => {
//     return auto.type !== 'benzina' || auto.type !== 'diesel';
// });

// console.log('Auto a benzina');
// console.log('*******************************');
// console.log(gasolineCars);

// console.log('Auto a diesel');
// console.log('*******************************');
// console.log(dieselCars);

// console.log('Tutte le altre auto');
// console.log(otherCars);

const cars = [
  {
    manufacturer: "Ford",
    model: "Fiesta",
    type: "diesel",
  },
  {
    manufacturer: "Audi",
    model: "A1",
    type: "benzina",
  },
  {
    manufacturer: "Volkswagen",
    model: "Golf",
    type: "Benzina",
  },
  {
    manufacturer: "Fiat",
    model: "Panda",
    type: "metano",
  },
  {
    manufacturer: "Fiat",
    model: "Multipla",
    type: "GPL",
  },
  {
    manufacturer: "Tesla",
    model: "Model 3",
    type: "elettrico",
  },
  {
    manufacturer: "Volkswagen",
    model: "Polo",
    type: "benzina",
  },
  {
    manufacturer: "Ford",
    model: "Kuga",
    type: "Diesel",
  },
  {
    manufacturer: "Seat",
    model: "Ibiza",
    type: "metano",
  },
  {
    manufacturer: "Audi",
    model: "R8",
    type: "Benzina",
  },
];

const gasolineCars = cars.filter((auto) => {
  return auto.type.toLocaleLowerCase() === "benzina";
});

const dieselCars = cars.filter((auto) => {
  return auto.type.toLocaleLowerCase() === "diesel";
});

const otherCars = cars.filter((auto) => {
  return auto.type.toLocaleLowerCase() !== "benzina" && auto.type !== "diesel";
});

console.log("Auto a benzina");
console.log("*******************************");
console.log(gasolineCars);

console.log("Auto a diesel");
console.log("*******************************");
console.log(dieselCars);

console.log("Tutte le altre auto");
console.log(otherCars);

// * 1- Che cosa fa questo codice?
//  la funzione verifica filtra le auto a benzina, diesel e con altre alimentazioni
// * 2- Sono presenti errori di sintassi?
//  si, gli errori sono:
//  1. manca una "," nell'array delle auto
//  2. l'arrow function per determinare le auto a benzina non è scritta correttamente
//  3. manca il return nelle arrow function gasolineCars e dieselCars
// * 3- Sono presenti errori logici?
//  si, gli errori sono:
//  1. l'arrow function per determinare le auto a benzina non è scritta correttamente
//  2. il confronto va fatto passando in toLowerCase() i parametri dato che ci sono alcuni "type" scritti con l'iniziale maiuscola
//  3. per individuare le altre auto, diverse da "benzina" e "diesel" è l'operatore AND "&&" anzichè OR "||"
