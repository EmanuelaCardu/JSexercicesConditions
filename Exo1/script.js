//#region console.log
console.log ("Bienvenuue sur mon site")

// typeof "John"
console.log("John".constructor)
console.log( 3.14.constructor)
console.log( NaN.constructor)
console.log( false.constructor)
console.log ([1,2,3,4.].constructor)
console.log ({name:'John', age:34}.constructor)
console.log(new Date().constructor)
console.log( function () {}.constructor)





//#endregion

//#region concat tableau


let tab1 = [1,2,3,4,5,6];
let tab2 = [7,8,9,10];

console.log (tab1.concat(tab2));
//#endregion

//#region sort

let tabNumber= [1,2,9,4,5,7,];

console.log(tabNumber.sort(function(a,b){return a-b}));


//#endregion

//#region exercice chaine de caractere

let chaine= "ma formation Javascript";

// retourner la position de ma
    //console.log(chaine.substring(0,2));
    chaine.indexOf("ma");


    //Indiquer l’indice de la lettre « p »

   // console.log(chaine.charAt(21))
    chaine.indexOf("p");

    //Retrouver la lettre située à l’indice 21

    console.log(chaine.charAt(21))
    //Remplacer « javascript » par « Java »

    console.log(chaine.replace("Javascript","Java"));

    //Découper la chaîne avec le délimiteur « » (espace)
    let chaine3= chaine.split(" ");
    console.log(chaine3);

    //Inverser la chaîne de caractères (+ difficile) :
//« ma formation javascript » → « tpircsavaj noitamrof am »

let chainecoupe=chaine.split("");
let chainecoupeinverse= chainecoupe.reverse();
console.log(chainecoupeinverse.join());











//#endregion
