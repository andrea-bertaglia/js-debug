// * 1- Che cosa fa questo codice?
//  stampa in pagina l'elemento inserito dall'utente più volte
// * 2- Sono presenti errori di sintassi?
//
// * 3- Sono presenti errori logici?
//

const input = document.querySelector("input"); // input va scritto tra doppi apici
const array = []; // per definire l'array vuoto, inserisco le parentesi quadrate

input.addEventListener("keypress", function (event) {
  if (event.code != "Enter") return;
  if (input.value.length == "") return;

  array.push(input.value); // per aggiungere l'elemento all'array uso push

  const li = document.createElement("li");
  li.classList.add("list-group-item");
  li.innerText = input.value; // per modificare il testo nell'elemento uso innerText
  document.querySelector("ul").append(li); // per aggiungere l'elemento creato al DOM uso append

  let counter = 0; // inizializzo il contatore
  let item = array[0];
  let max = 1;
  const elems = [];

  for (let i = 0; i < array.length; i++) {
    // manca .length per scorrere fino all'ultimo elemento
    let val = array[i];

    if (!elems[val]) {
      elems[val] = 1;
    } else {
      elems[val]++;
    }

    for (let j = i; j < array.length; j++) {
      // correggo l'incremento dell'index indicando con j++ anzichè i++
      if (array[i] == array[j]) {
        counter++;
        if (max < counter) {
          max = counter;
          item = array[i];
        }
      }
    }
    counter = 0;
  }

  const alert = document.getElementsByClassName("alert")[0]; // catturo il primo indice

  alert.classList.remove("d-none");
  alert.classList.add("d-flex");

  alert.querySelector("span:first-child").innerText = item;
  alert.querySelector("span:last-child").innerText = max;

  console.log(`${item} trovato ${max} volte`); // per template literal va usato il backtick
});
