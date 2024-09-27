// Carrello e sconti particolari

/*
Oggi il tuo compito è creare la logica per un sito di e-commerce che deve supportare sconti extra per utenti speciali.
A partire da una lista di prezzi, un utente e un costo di spedizione l'algoritmo deve determinare il costo totale del carrello.
ATTENZIONE! Gli argomenti di questa settimana sono cruciali per lo svolgimento di un lavoro di un developer (il 90% del dati che maneggerai saranno array di oggetti!!) quindi 
assicurati di COMPRENDERE la logica. Se ti trovi in difficolta', scrivi ad un membro del teaching staff! :) 

Se l'utente ha la proprietà "isAmbassador" con valore true, il carrello deve venire scontato del 30%, PRIMA di calcolare la spedizione (anche gli utenti speciali pagano le spedizioni).
Se l'utente ha la proprietà "isAmbassador" con valore false, il carrello NON deve venire scontato.
In entrambi i casi, la spedizione è gratuita per ogni carrello con costo superiore a 100. Altrimenti, aggiungi il valore fornito per coprire il costo della spedizione.

In basso troverai degli esempi di utenti, una lista prezzi e un costo fisso di spedizione.
Crea un array di utenti (usando .push) e stampa, per ogni utente (quindi con un loop) la frase "NOMEUTENTE COGNOMEUTENTE e' / non e' un ambassador" basandoti sui dati contenuti nell'oggetto. 
ES. L'utente Marco Rossi e' un ambassador, quindi la frase dovrebbe essere "Marco Rossi e' un ambassador"
Infine, crea un SECONDO array in cui inserirai SOLO gli ambassador.
*/

const marco = {
  name: "Marco",
  lastName: "Rossi",
  isAmbassador: true,
}

const paul = {
  name: "Paul",
  lastName: "Flynn",
  isAmbassador: false,
}

const amy = {
  name: "Amy",
  lastName: "Reed",
  isAmbassador: false,
}

const prices = [34, 5, 70] //lista prezzi

const shippingCost = 50 //spedizione

let utenteCheEffettuaLAcquisto = amy //cambia il valore qui per provare se il tuo algoritmo funziona!

//crea un array di utenti (usando .push) e stampa, per ogni utente (quindi con un loop) la frase "NOMEUTENTE COGNOMEUTENTE e' / non e' un ambassador" basandoti sui dati contenuti nell'oggetto.


let array = []; //creo arrey vuoto

//aggiungo elementi
array.push(marco);
array.push(paul);
array.push(amy);

//stampo array per vedere se ok
console.log(array);

//ciclo che mi stampa elementi array
for(let i= 0; i<array.length;i++){
  if (array[i].isAmbassador === true) { 
    console.log(array[i].name + array[i].lastName + " è un ambassador");
  } else {
    console.log(array[i].name + array[i].lastName + " non è un ambassador");
  }
};

//creo un array con solo ambassador

let arrayAmb = [];
for(let i= 0; i<array.length;i++){
  if (array[i].isAmbassador === true) { 
    arrayAmb.push(array[i]);
  } 
};
console.log(arrayAmb);


//A partire da una lista di prezzi, un utente e un costo di spedizione l'algoritmo deve determinare il costo totale del carrello. se utente ambassador carrello 30% - se costo superiore a 100 spedizione gratuita

//calcolo il totale del carrello
let TotCarrello = 0;
for(let i= 0; i<array.length;i++){
  TotCarrello = TotCarrello + prices[i];
}
//calcolo l'eventuale sconto
ScontoAmb = TotCarrello*0.3;



//creo un iteratore che scorre tutti gli array e in base ai valori di ricerca mi dice se paga la spedizione e se ha diritto allo sconto.

for(let i= 0; i<array.length;i++){

  if(array[i].isAmbassador === true && TotCarrello >100){
    console.log(array[i].name + "paga: " + (TotCarrello-ScontoAmb) + " Spedizione Grauita");
  } else if(array[i].isAmbassador === true && TotCarrello <100){
    console.log(array[i].name + "paga: " + ((TotCarrello-ScontoAmb) + shippingCost)) + " costi di spedizione pari a: " + shippingCost;
  } else if(array[i].isAmbassador === false && TotCarrello >100){
    console.log(array[i].name + "paga: " + TotCarrello + " Spedizione Grauita");
  }else if(array[i].isAmbassador === false && TotCarrello <100){
    console.log(array[i].name + "paga: " + (TotCarrello+shippingCost));
  }
}