const prompt = require('prompt-sync')();
let choix;
const candidats = [
    {
    cin: "AB123",
    nom: "Boushaba",
    prenom: "Soufiane",
    partiPolitique: "ultra",
    age: 40,
    electeurs: []
    }, {
    cin: "BC123",
    nom: "Boushaba",
    prenom: "Soufiane",
    partiPolitique: "Indépendant",
    age: 40,
    electeurs: []
    }, {
    cin: "DD06",
    nom: "Boushaba",
    prenom: "Soufiane",
    partiPolitique: "Indépendant",
    age: 40,
    electeurs: []
    }

];
function ajouter() {
    let nouveau = {};

    nouveau.cin = prompt("Donner le CIN : ");

    for (let i = 0; i < candidats.length; i++) {
        if (candidats[i].cin === nouveau.cin) {
            console.log("Ce CIN est deja utilise.");
            return;
        }
    }

    nouveau.nom = prompt("Donner le nom : ");
    nouveau.prenom = prompt("Donner le prénom : ");
    nouveau.partiPolitique = prompt("Donner le parti politique : ");
    nouveau.age = Number(prompt("Donner l age : "));
    nouveau.electeurs = [];

    candidats.push(nouveau);

    console.log("Ajout effectué.");
}
function ajouterEnGroupe() {
    let n = Number(prompt("Nombre de candidats : "));

    let i = 0;

    while (i < n) {
        console.log("\nCandidat numéro " + (i + 1));
        ajouter();
        i++;
    }
}

function afficherCandidats() {

    if (candidats.length === 0) {
        console.log("Aucun candidat.");
        return;
    }

    for (let i = 0; i < candidats.length; i++) {

        console.log("\n--- Candidat " + (i + 1) + " ---");
        console.log("Identifiant : " + candidats[i].cin);
        console.log("Nom : " + candidats[i].nom);
        console.log("Prénom : " + candidats[i].prenom);
        console.log("Parti politique : " + candidats[i].partiPolitique);
        console.log("Âge : " + candidats[i].age);
        console.log("Nombre de votes : " + candidats[i].electeurs.length);
    }
}
function trierParVotes() {

    let liste = candidats.slice();

    for (let i = 0; i < liste.length - 1; i++) {

        for (let j = i + 1; j < liste.length; j++) {

            if (liste[i].electeurs.length < liste[j].electeurs.length) {

                let temp = liste[i];
                liste[i] = liste[j];
                liste[j] = temp;
            }
        }
    }

    for (let i = 0; i < liste.length; i++) {

        console.log(
            (i + 1) + ". " +
            liste[i].nom + " " +
            liste[i].prenom +
            " : " +
            liste[i].electeurs.length +
            " votes"
        );
    }
}
function filtrerParParti() {

    let parti = prompt("Entrez le parti politique : ");
    let trouve = false;

    for (let i = 0; i < candidats.length; i++) {

        if (candidats[i].partiPolitique === parti) {

            console.log("\n--- Candidat ---");
            console.log("Identifiant : " + candidats[i].cin);
            console.log("Nom : " + candidats[i].nom);
            console.log("Prénom : " + candidats[i].prenom);
            console.log("Parti politique : " + candidats[i].partiPolitique);
            console.log("Âge : " + candidats[i].age);
            console.log("Nombre de votes : " + candidats[i].electeurs.length);

            trouve = true;
        }
    }

    if (!trouve) {
        console.log("Aucun candidat trouvé pour ce parti.");
    }
}
function voter() {

    let cinElecteur = prompt("CIN de l electeur : ");
    let dejaVote = false;

    for (let candidat of candidats ) {
        for(let electeur of candidat.electeurs ){
            if(electeur == cinElecteur ){
                dejaVote = true ;
                break;
            }

        }

    }

    if (dejaVote) {
        console.log("Vous avez deja vote... ");
    }

    if(!dejaVote){
         let cinCandidat = prompt("CIN du candidat : ");
         let virfi = false;
         for (let i = 0; i < candidats.length; i++) {

           if (candidats[i].cin === cinCandidat) {
            candidats[i].electeurs.push(cinElecteur);
            console.log("enregestre..");
            virfi=true;
            break;
           }
        }

        if(!virfi){
            console.log("No trovee c est cin .");

        }

    }
 
}

function modifierCandidat() {

        let cin = prompt("CIN du candidat : ");
        let virfi = false ;
    

        for (let i = 0; i < candidats.length; i++) {
            if (candidats[i].cin === cin) {
                candidats[i].partiPolitique = prompt("Entre partiPolitique :");
                candidats[i].age = Number(prompt("Entre age :"));
                console.log("\n Enregistre...\n");
                 virfi =true
                 break;
            }
        }


        if(!virfi){
            console.log("not trouve...");
        }


}

    function lancerMenu() {
        do {
            console.log("\n========== MENU ==========");
            console.log("1. Ajouter un candidat");
            console.log("2. Ajouter plusieurs candidats");
            console.log("3. Afficher les candidats");
            console.log("4. Voter");
            console.log("5. Modifier un candidat");
            console.log("6. Supprimer un candidat");
            console.log("7. Rechercher un candidat");
            console.log("8. Statistiques");
            console.log("0. Quitter");
            console.log("==========================");

            choix = prompt("Choisissez une option : ");

            switch (choix) {

                case "1":
                    ajouter();
                    break;

                case "2":
                    ajouterEnGroupe();
                    break;

                case "3":
                    console.log("1. Trier par nombre de votes");
                    console.log("2. Filtrer par parti politique");
                    console.log("3. affichage toutes candidties");

                    let choix = prompt("Votre choix : ");

                    if (choix === "1") {
                        trierParVotes();
                    } else if (choix === "2") {
                        filtrerParParti();
                    }
                    else if(choix === "3"){
                         afficherCandidats();
                        
                    } else {
                        console.log("Choix invalide.");
                    }
                    break;

                case "4":
                    voter();
                    break;

                case "5":
                    modifierCandidat();
                    break;

                case "6":
                    supprimer();
                    break;

                case "7":
                    rechercher();
                    break;

                case "8":
                    statistiques();
                    break;

                case "0":
                    console.log("Fin du programme.");
                    break;

                default:
                    console.log("Option incorrecte.");
            }

        } while (choix !== "0");
    }

lancerMenu();
