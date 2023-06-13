// Exo 1 année bissextile

// let dateUser= prompt ("Rentrez une année et verifiez si elle est bissextile: ");

// if ((dateUser%4==0 &&  dateUser%100!=0) || dateUser%400==0){
//     alert("année bissextile");
// }

// else {
//     alert ("année non bissextile")
// }


// Exo2 lanceur de balles

// let pret = 1
// let panierVide= 2 
// let lanceur = prompt ("Tapez 1 pour il y a des balles, 2 pour panier vide: ")

// if (lanceur==1) {
//     alert ("lancer balle");
// }
    
// else {
//     alert ("lanceur vide");
//     }

//Exo3 distributeur boissons switch

// let choix= parseInt(prompt ("Veuillez selectioner une boisson: \n -cola (1) \n -fanta(2) \n  -sprite(3)"));

// switch (choix) {
//     case 1 :
//         console.log("voici cola")
//         break
//     case 2 :
//         console.log("voici fanta") 
//         break  
//     case 3 :
        
//         console.log("voici sprite") 
//         break
//         default:
//         console.log ("no")
//         break

// }

//Exo3 distributeur boissons if

// let choix= parseInt(prompt ("Veuillez selectioner une boisson: \n -cola (1) \n -fanta(2) \n  -sprite(3)"));
// let stock_cola=1
// let stock_fanta=1
// let stock_sprite=1

// if (choix==1 && stock_cola >0) {
//     alert("voici cola");
//     stock_cola--;
// }  
// else {
//         alert ("pas de cola");
//     }

// if (choix==2 && stock_fanta >0){
//     alert("voici fanta");
//     stock_fanta--
// }
//     else{
//         alert ("pas de fanta");
//     }
// if (choix==3&& stock_sprite !=0 ) {
//     alert("voici sprite");
//     stock_sprite--
// }
//     else{
//     alert ("pas de sprite");
// }

// prevoir pour d'autres réponces

// Exo 4 calculatrice switch



// let nomb1= parseFloat(prompt ("Veuillez donner un nombre: "));
// let operat= (prompt( "donner le type d'operation: " ));
// let nomb2= parseFloat(prompt("veuillez donner un deuxième nombre: "));
// let result=0
// switch (operat) {
//     case "/" :
//     if (nomb2==0){
//         alert ("reultat non determinable")
//     }
//     result= (nomb1/nomb2)
//     alert (result)
//     case "*" :
//         result=nomb1*nomb2
//         alert(result)
//         break
//     case "+" :
//         result=nomb1+nomb2
//         alert(result)
//         break  
//     case "-" :
//         result=nomb1-nomb2
//     alert(result)
//         break
//     default:
//         alert ("operateur invalide")
// }
        


//Exo 4 calculatrice if

// let nomb1= parseInt(prompt ("Veuillez donner un nombre: "));
// let operat= (prompt( "donner le type d'operation: " ));
// let nomb2= parseInt(prompt("veuillez donner un deuxième nombre: "));
// let result=0

// if (nomb2==0){
//     alert ("reultat non determinable")
// }
// else if (operat == "+"){
//     alert (nomb1+nomb2)
// }
// else if (operat == "-"){
//     alert (nomb1-nomb2)
// }
// else if (operat == "/"){
//     alert (nomb1/nomb2)
// }
// else if (operat == "*"){
//     alert (nomb1*nomb2)
// }
// else{
//     alert ("non")
// }


//Exo 5 Note

let note = parseInt(prompt ("rentrez la note obtenue: "));


if (note>0 && note<=10){
    alert ("le résultat est insuffisant")
}
else if (note>10 && note<=12){
    alert ("le résultat est suffisant")
}
else if (note>12 && note<=15){
    alert ("le résultat est bien")
}
else if (note>15 && note<=18){
    alert ("le résultat est très bien")
}
else if (note>18 && note<=20){
    alert ("le résultat est excellent")
}
else if (note <0 || note>20){
    alert ("rentrez une note entre 0 et 20")
} 


//Exo bonus convertisseur


let jour1 = parseInt (prompt ("donnez un jour, heure, minutes, secondes"));
let jour2 = parseInt(prompt (" donnez un deuxième jour, heure, minutes, secondes"));

let difference = (jour1.getTime()-jour2.getTime());
console.log(difference);













