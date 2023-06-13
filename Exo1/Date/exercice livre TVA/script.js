
//demander prix unitaire et quantité du livre

let prixUnitaire = parseFloat (prompt ("donnez un prix unitaire hors TVA d'un livre: "));

let quantiteLivre = parseInt(prompt ("combien de livre? "));

console.log(prixUnitaire);
console.log(quantiteLivre);

//calcule



let prixTotale= prixUnitaire * quantiteLivre* 1.21;

console.log(prixTotale);
 let newPrix= prixTotale

alert ("le prix complexif est:" + prixTotale.toFixed(2) );

let newPrixArrondi = Math.round(newPrix*100)/100
console.log(newPrixArrondi)