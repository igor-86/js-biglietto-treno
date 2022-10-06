//Input:
//Chiedere il numero di km
const trackTotal = parseInt(prompt("Quanti km?"))
//chiedere l'età
const userYear = parseInt(prompt("Quale è la tua età"));
//Svolgimento:
// prezzo calcolato al km
const prize = 0.21*10;
console.log(prize);
//prezzo del biglietto 
const subTotal = trackTotal * prize;
console.log(subTotal);
/* Sconto del 30% */
const totalPercentageOne = subTotal * 30 / 100;
console.log(totalPercentageOne);
const discountPrizeOne = subTotal - totalPercentageOne;
console.log(discountPrizeOne);
/* Sconto del 40% */
const totalPercentageTwo = subTotal * 40 / 100;
console.log(totalPercentageTwo);
const discountPrizeTwo = subTotal - totalPercentageTwo;
console.log(discountPrizeTwo);

/* ______________ */
//ALTRIMENTI SE l'età è superiore ai 65 anni
    //applicare sconto 40%

// ALTRIMENTI
    //Somma senza sconto


//Output