/*global window*/
(function () {
    "use strict";
    /*** variables "globales" (IIFE) ***/

    /*** les fonctions du script (les utilisées avant celles qui les utilisent) ***/

    let joueurs = [
            {
                numero1: "1",
                numero2: "5",
                nom: "Anthony",
                victoire: 0,
            },
            {
                numero1: "2",
                numero2: "6",
                nom: "Masset",
                victoire: 0,
            },
            {
                numero1: "3",
                numero2: "7",
                nom: "Noémie",
                victoire: 0,
            },
            {
                numero1: "4",
                numero2: "8",
                nom: "Luca",
                victoire: 0,
            },
        ];

    if(window.localStorage){
        const lsJoueurs = localStorage.getItem("joueurs");
        if(lsJoueurs){
            joueurs = JSON.parse(lsJoueurs);
        }
    }


    let i,j,k,v,b, numero1, numero2, joueur1, joueur2, victoire1, victoire2;
    const jeu = document.getElementById("jeu");
    const jeuDiv = document.getElementById("jeuDiv");
    const form = document.getElementById("joueur");
    let winner1 = document.getElementById("win1");
    let winner2 = document.getElementById("win2");
    const joueur1Selec = document.getElementsByName('joueur1')[0].selectedOptions;
    const joueur2Selec = document.getElementsByName('joueur2')[0].selectedOptions;



    function submitJeu (e) {
            const playerOne = document.getElementById("joueurOne");
            const playerTwo = document.getElementById("joueurTwo");
            let scoreOne = document.getElementById("scoreJoueurOne");
            let scoreTwo = document.getElementById("scoreJoueurTwo");
            
    

            for(i = 0; i < joueur1Selec.length; i++){

                for(v = 0; v < joueur2Selec.length; v++){

                    numero1 = joueur1Selec[i].value;
                    numero2 = joueur2Selec[v].value;
                    
                    for(j = 0; joueurs[j].numero1 != numero1; j++);
                    for(b = 0; joueurs[b].numero2 != numero2; b++);

                    joueur1 = joueurs[j].nom;
                    joueur2 = joueurs[b].nom;

                    winner1.value = joueur1 + " gagne !";
                    winner2.value = joueur2 + " gagne !";

                    victoire1 = joueurs[j].victoire;
                    victoire2 = joueurs[b].victoire;
                    
                    playerOne.innerHTML = joueur1;
                    playerTwo.innerHTML = joueur2;


                    if (victoire1 < 10) {
                        scoreJoueurOne.innerHTML = "0" + victoire1;
                    }else {
                       scoreJoueurOne.innerHTML =  victoire1;
                    }


                    if (victoire2 < 10) {
                        scoreJoueurTwo.innerHTML = "0" + victoire2;
                        }else {
                        scoreJoueurTwo.innerHTML =  victoire2; 
                    }
                    
                }
            }
            if(joueur1 != joueur2){
                form.classList.add("hidden");
                jeu.classList.remove("hidden");
            }


            e.preventDefault();
            return false;
    }



    function fPageIsLoaded() {
        document.getElementById("SelectJoueur").addEventListener("submit", submitJeu, false);       
    };


    //gestion de l'événement "load" pour démarrer le script
    window.addEventListener("load", fPageIsLoaded, false);
}());
