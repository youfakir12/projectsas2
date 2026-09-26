const prompt = require('prompt-sync')();
let choix;
const candidats = [{
	cin : "AB123456",
	nom : "Boushaba",
	prenom : "Soufiane",
	partiPolitique : "Indépendant",
	age: 40,
	electeurs: []
}];
function ajouter() {
    let nouveau = {};

    nouveau.cin = prompt("Donner le CIN : ");

    for (let i = 0; i < candidats.length; i++) {
        if (candidats[i].cin === nouveau.cin) {
            console.log("Ce CIN est déjà utilisé.");
            return;
        }
    }

    nouveau.nom = prompt("Donner le nom : ");
    nouveau.prenom = prompt("Donner le prénom : ");
    nouveau.partiPolitique = prompt("Donner le parti politique : ");
    nouveau.age = Number(prompt("Donner l'âge : "));
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
                console.log("\n1. Tous les candidats");
                console.log("2. Classement par votes");
                console.log("3. Recherche par parti");

                let option = prompt("Choisissez : ");

                if (option === "1") {
                    afficher();
                } else if (option === "2") {
                    classement();
                } else if (option === "3") {
                    rechercheParti();
                } else {
                    console.log("Option incorrecte.");
                }
                break;

            case "4":
                enregistrerVote();
                break;

            case "5":
                modifier();
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

