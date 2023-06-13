/*let ageUser = parseInt (prompt("veuillez encoder votre age: "));

if (ageUser>18) {
    console.log("Majeur");
}
else if (ageUser<18){
    console.log ("Mineur")

}
else {
console.log (hello);
}

*/

/*
let choix= parseInt(prompt ("Veuillez selectioner une boisson: \n -cola (1) \n -fanta(2) \n  -sprite(3)"));

switch (choix) {
    case 1 :
        console.log("voici cola")
        break
    case 2 :
        console.log("voici fanta") 
        break  
    case 3 :
        
        console.log("voici sprite") 
        break
        default:
        console.log ("no")
        break

    
}
*/

// let monTableau=[1,2,3,4,5,6,7,8,9];

// for(i=0; i< monTableau.length; i++) {
//         console.log ("la valeur de", i, "de mon tableau est" ,monTableau )
// }

// let monTab ={
//     "lundi": "soupe",
//     "mardi": "tartine",
//     "mercredi": "frittes",
//     "jeudi": "salade",
//     "vendredi":" pizza",
//     "samedi": "jeune",
//     "dimanche":"poulet"
// }
// for (item in monTab){
//     console.log (item + ":" + monTab[item])
// }


// Exercice
// 103
// • Utilisez l’objet Date et des structures conditionnelles,
// écrivez un programme qui affiche le jour de la semaine.
// Exemple : « Bonjour, nous sommes lundi! »

//dimanche commense à 0


let objDate = new Date()
console.log (objDate)
let jour=objDate.getDay()
console.log(jour)

switch (jour) {
    case 0:
        alert ("nous somme dimache")
    case 1 :
        alert ("nous sommes lundi")
        break
    case 2 :
        alert ("nous sommes mardi") 
        break  
    case 3 :
        alert ("nous sommes mercredi ")
        break
        case 4 :
        alert ("nous sommes jeudi ")
        break
        case 5 :
        alert ("nous sommes vendredi ")
        break
        case 6 :
        alert ("nous sommes samedi ")
        break
        // default:
        // alert ("nous sommes ?")
                
        break
}
    




