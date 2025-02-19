// Introduction
// Le projet consiste en la création d'un jeu textuel très simple basé sur des choix multiples. Le
// jeu doit être exécutable en ligne de commande à l'aide de Node.js. L'objectif est de créer
// une expérience interactive pour l'utilisateur, où ce dernier prend des décisions à chaque
// étape, influençant le cours de l'histoire.

// Fonctionnalités du Jeu
// Le jeu suit un scénario linéaire avec un nombre limité d'étapes.
// À chaque étape, le joueur fait un choix parmi deux options prédéfinies.

// Interaction Utilisateur :
// Afficher un texte descriptif pour chaque étape, décrivant la situation actuelle du joueur.
// Proposer au joueur deux choix clairs à chaque étape.
// Attendre l'entrée utilisateur pour prendre une décision.

// Gestion des Choix :
// Valider l'entrée utilisateur pour s'assurer qu'elle correspond à l'une des options proposées.
// Avertir l'utilisateur en cas d'entrée incorrecte et lui redemander de faire un choix valide.

// Affichage des Résultats :
// Afficher le résultat de chaque choix fait par le joueur après chaque étape.
// Fournir un message de fin de partie, résumant les choix du joueur et l'issue de l'histoire.

// Technologies Utilisées :
// JavaScript (ES6+)
// Node.js pour l'exécution en ligne de commande

// Contraintes Techniques :
// L'application doit être uniquement en mode console, sans interface graphique.

// Livraisons Attendues :
// Code source du jeu correctement commenté et structuré.
// Le jeu doit être capable de gérer des erreurs d'entrée utilisateur et de guider l'utilisateur
// pour qu'il fasse un choix valide.

const prompt = require("prompt-sync")()

const stepsFR = [
    ["Vous vous réveillez sur une planète inconnue après avoir atteri d'urgence...Le choc de l'atterissage vous a fait perdre conscience... vous vous révéillez. Que faites-vous?", "Explorer la zone", "Chercher de l'eau", "Rechercher des habitants", "Inspecter votre vaisseau"],
    ["Après cela, vous trouvez un lac d'eau potable. Cela tombe bien, vous avez soif... Que faites-vous?", "Boire de l'eau", "Baigner dans le lac", "Chercher de la nourriture", "Construire un abri près du lac"],
    ["Vous vous sentez mieux, vos réflexes et votre corps se sont grandement fortifiés grâce à ce lac aux propriétés inconnues...Vous continuez votre route et rencontrez un robot. Que faites-vous?", "Lui parler", "L'ignorer", "Le suivre", "Le détruire"],
    ["Le robot vous propose de vous conduire à un village en ruines. Que faites-vous?", "Entrer dans la première maison", "Explorer le village", "Chercher des outils", "Revenir au lac (aucun effet additionnel)"],
    ["Votre intuition était la bonne ! Vous trouvez un atelier abandonné. Que faites-vous?", "Chercher des pièces pour le vaisseau", "Explorer l'atelier", "Dormir ici", "Retourner au village"],
    ["Dans cet atelier, vous trouvez un ancien livre qui semble venir de votre propre planète, il contient des cartes. Que faites-vous?", "Lire le livre", "Prendre les cartes", "Détruire le livre", "Ne rien faire"],
    ["La pluie se met à tomber... Dans votre périple, vous découvrez la grotte cachée qui apparaissait sur la carte. Que faites-vous?", "Entrer dans la grotte", "La contourner", "Placer des pièges à l'entrée", "Retourner au village"],
    ["Dans la grotte, vous trouvez une machine ancienne. D'étranges symboles sont écrit dessus, il semblerait que cela soit une technologie alien. En l'examinant de plus près, vous y trouvez deux boutons. Que faites-vous?", "Appuyer sur le bouton de gauche", "Appuyer sur le bouton de droite", "Ne rien faire", "La détruire"],
    ["La machine s'active...Est ce à cause du bouton? Ou de votre présence dans la grotte? Un vaisseau spatial d'une taille inouïe débarque. Vous rencontrez un groupe d'aliens plutôt amicaux. Que faites-vous?", "Demander de l'aide", "Les ignorer", "Les suivre", "Les attaquer"],
    ["Vous etes vraiment chanceux ! Les aliens vous donnent toutes les pièces pour réparer votre vaisseau. Que faites-vous?", "Réparer le vaisseau", "Les remercier", "Les inviter à venir sur Terre", "Détruire les pièces"]
];

const stepsEN = [
    ["You wake up on an unknown planet after crash-landing... The impact made you lose consciousness... you wake up. What do you do?", "Explore the area", "Search for water", "Look for inhabitants", "Inspect your ship"],
    ["After that, you find a lake of drinkable water. That's good, you're thirsty... What do you do?", "Drink the water", "Bathe in the lake", "Search for food", "Build a shelter near the lake"],
    ["You feel better, your reflexes and body have greatly strengthened thanks to the properties of this mysterious lake... You continue your journey and encounter a robot. What do you do?", "Talk to it", "Ignore it", "Follow it", "Destroy it"],
    ["The robot offers to take you to a village in ruins. What do you do?", "Enter the first house", "Explore the village", "Search for tools", "Return to the lake (no additional effect)"],
    ["Your intuition was right! You find an abandoned workshop. What do you do?", "Look for spaceship parts", "Explore the workshop", "Sleep here", "Return to the village"],
    ["In this workshop, you find an old book that seems to come from your own planet, it contains maps. What do you do?", "Read the book", "Take the maps", "Destroy the book", "Do nothing"],
    ["Rain starts falling... During your journey, you discover the hidden cave that appeared on the map. What do you do?", "Enter the cave", "Go around it", "Set traps at the entrance", "Return to the village"],
    ["In the cave, you find an ancient machine. Strange symbols are written on it; it seems to be alien technology. Upon closer inspection, you find two buttons. What do you do?", "Press the left button", "Press the right button", "Do nothing", "Destroy it"],
    ["The machine activates... Is it because of the button? Or your presence in the cave? An unimaginably large spaceship lands. You meet a group of friendly aliens. What do you do?", "Ask for help", "Ignore them", "Follow them", "Attack them"],
    ["You are really lucky! The aliens give you all the parts to repair your ship. What do you do?", "Repair the ship", "Thank them", "Invite them to Earth", "Destroy the parts"]
];

console.log(prompt("Away from Earth: First Contact\n\n Appuyez sur une touche pour démarrer // Press a button to start: "))

let languageChoice = prompt("Tapez sur 1 pour choisir la langue française ou 2 pour la langue anglaise // Press 1 for french or 2 for english: ")

// Declaring a var that will depend on the table (stepsFR or stepsEN)
let steps

//Choosing the langage
if (parseInt(languageChoice) === 1) {
    steps = stepsFR;
} else if (parseInt(languageChoice) === 2) {
    steps = stepsEN;
} else {
    console.log("Choix invalide, veuillez relancer le programme et sélectionner 1 ou 2.");
    process.exit();
}

let currentStep = 0;
let gameOver = false;

// Looping through the table using indexes
while (!gameOver) {
    console.log(steps[currentStep][0]);
    console.log(`1. ${steps[currentStep][1]}`);
    console.log(`2. ${steps[currentStep][2]}`);
    console.log(`3. ${steps[currentStep][3]}`);
    console.log(`4. ${steps[currentStep][4]}`);

    const answer = prompt("Make a choice (1, 2, 3, or 4) : ");
    const choice = parseInt(answer);

    if (choice >= 1 && choice <= 4) {
        if (languageChoice == 1) {
            // Conditions in french
            if (currentStep === 2 && choice === 4) {
                console.log("\nVous avez choisi : " + steps[currentStep][choice]);
                console.log("\nEn essayant de détruire le robot, il se défend et vous désintègre instantanément...GAME OVER!\n\n");
                gameOver = true;
            } else if (currentStep === 3 && choice === 4) {
                console.log("\nVous avez choisi : " + steps[currentStep][choice]);
                console.log("\nEn retournant au lac, votre corps se flétrit et vieillit instantanément au contact du lac, à cause des propriétés inconnues... Vous mourrez de vieillesse. GAME OVER!\n\n");
                gameOver = true;
            } else if (currentStep === 6 && choice === 2) {
                console.log("\nVous avez choisi : " + steps[currentStep][choice]);
                console.log("\nEn voulant contourner la grotte, vous tombez dans un ravin sans fond... Vous êtes mort. GAME OVER!\n\n");
                gameOver = true;
            } else if (currentStep === 6 && choice === 4) {
                console.log("\nVous avez choisi : " + steps[currentStep][choice]);
                console.log("\nEn voulant retourner au village, le robot vous attaque sans aucune raison et vous transperce le coeur...GAME OVER!\n\n");
                gameOver = true;
            }
            else if (currentStep === 8 && choice === 4) {
                console.log("\nVous avez choisi : " + steps[currentStep][choice]);
                console.log("\nEn attaquant les aliens, vous réalisez trop tard qu'ils sont bien plus puissants... Vous mourrez instantanément. GAME OVER!\n\n");
                gameOver = true;
            } else if (currentStep === 9 && choice === 3) {
                console.log("\nVous avez choisi : " + steps[currentStep][choice]);
                console.log("\nEn invitant les aliens sur Terre, ils décident de conquérir votre planète... Vous êtes mort en tentant de les arrêter. GAME OVER!\n\n");
                gameOver = true;

            } else if (currentStep === 9 && choice === 4) {
                console.log("\nVous avez choisi : " + steps[currentStep][choice]);
                console.log("\nEn détruisant les pièces, vous avez gaché la seule chance de retourner sur terre, que c'est con ! GAME OVER!\n\n");
                gameOver = true;
            }
            

        } else {
           // Conditions in english
            if (currentStep === 2 && choice === 4) {
                console.log("\nYou chose: " + steps[currentStep][choice]);
                console.log("\nTrying to destroy the robot, it defends itself and disintegrates you instantly...GAME OVER!\n\n");
                gameOver = true;
            } else if (currentStep === 3 && choice === 4) {
                console.log("\nYou chose: " + steps[currentStep][choice]);
                console.log("\nReturning to the lake, your body withers and ages instantly due to the unknown properties of the lake... You die of old age. GAME OVER!\n\n");
                gameOver = true;
            } else if (currentStep === 6 && choice === 2) {
                console.log("\nYou chose: " + steps[currentStep][choice]);
                console.log("\nTrying to go around the cave, you fall into a bottomless ravine... You are dead. GAME OVER!\n\n");
                gameOver = true;
            } else if (currentStep === 6 && choice === 4) {
                console.log("\nYou chose: " + steps[currentStep][choice]);
                console.log("\nReturning to the village, the robot attacks you for no reason and pierces your heart...GAME OVER!\n\n");
                gameOver = true
            } else if (currentStep === 8 && choice === 4) {
                console.log("\nYou chose: " + steps[currentStep][choice]);
                console.log("\nAttacking the aliens, you realize too late that they are much more powerful... You die instantly. GAME OVER!\n\n");
                gameOver = true
            } else if (currentStep === 9 && choice === 3) {
                console.log("\nYou chose: " + steps[currentStep][choice]);
                console.log("\nInviting the aliens to Earth, they decide to conquer your planet... You die trying to stop them. GAME OVER!\n\n");
                gameOver = true
            } else if (currentStep === 9 && choice === 4) {
                console.log("\nYou chose: " + steps[currentStep][choice]);
                console.log("\nDestroying the parts, you squander the only chance to return to Earth, what a shame! GAME OVER!\n\n");
                gameOver = true
            }
            
        }
        // Condition for the win in each langage
        if (!gameOver) {
            console.log(`\nYou chose: ${steps[currentStep][choice]}\n`);
            currentStep++;
            if (currentStep >= steps.length) {
                gameOver = true;
                if (languageChoice == 1) {
                    console.log("\nVous avez réussi à rentrer sur Terre sain et sauf! YOU WIN ! GG !\n\n");
                } else {
                    console.log("\nYou managed to return to Earth safe and sound! YOU WIN! GG!\n\n");
                }
            }
        }
    } else {
        console.log("\nInvalid choice. Please enter 1, 2, 3, or 4.\n");    // Managing errors
    }
}