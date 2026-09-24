const prompt = require('prompt-sync')();
let choix;
function  menu (){
    console.log("1.Ajouter un nouveau candidat :");
    console.log("2. Ajouter plusieurs candidats à la fois");
    console.log("3. Afficher la liste des candidats :");
    console.log("4.Voter pour un candidat :");
    console.log("5. Modifier les informations d'un candidat :");
    console.log("6. Supprimer un candidat :");
    console.log("7. Rechercher des candidats");
    console.log("8. Statistiques de l'élection:");
    console.log("0 exit");
    

}
do{

    menu();
    
    choix = Number(prompt("Enter your choix: "));
    switch(choix){

    case 1 :
            break;
    case 2 :
            break;
     case 3 :
             break;
     case 4 :
            break;
     case 5 :
            break;
     case 6 :
            break;
     case 7 :
            break;
     case 8 :
            break;
    case 0 :
        console.log("by")
        return;

    default:
        console.log("Choix invalide");
    }
}while(choix !== 0);