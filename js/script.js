//Input:
//Chiedere il numero di km
const trackTotal = parseInt(prompt("Quanti km?"))
//chiedere l'età
const userYear = parseInt(prompt("Quale è la tua età"));
//Svolgimento:
// prezzo calcolato al km
const prize = 0.21*10;
/* console.log(prize); */
//prezzo del biglietto 
const subTotal = trackTotal * prize;
/* console.log(subTotal); */
/* Sconto del 30% */
const totalPercentageOne = subTotal * 30 / 100;
/* console.log(totalPercentageOne); */
const discountPrizeOne = subTotal - totalPercentageOne;
/* console.log(discountPrizeOne); */
/* Sconto del 40% */
const totalPercentageTwo = subTotal * 40 / 100;
/* console.log(totalPercentageTwo); */
const discountPrizeTwo = subTotal - totalPercentageTwo;
/* console.log(discountPrizeTwo); */
let message = "";
const euro = "&euro;"

/* ______________ */
//Se l'età è inferiore ai 18 anni
if (userYear <= 18){
    message = "sconto giovani, Totale: " + discountPrizeOne;
//Altrimenti se l'età è superiore ai 65
} else if (userYear >= 65) {
    message = "sconto over, Totale: " + discountPrizeTwo;
} else {
    message = "prezzo pieno: " + subTotal;
}


//Output
document.getElementById("total").innerHTML = message + euro;