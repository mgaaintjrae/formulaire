/* Script de début du
    Formulaire
    d'inscription   */

/* ***** VARIABLES ***** */

// Variables globales ou scope globales
var formValid = document.querySelector("#myForm");
var regex;

// Variables pour mes input
var lastName = document.querySelector("#lastName");
var name = document.querySelector("#name");
var email = document.querySelector("#email");
var tel = document.querySelector("#tel");
var rue = document.querySelector("#rue");
var cp = document.querySelector("#cp");
var ville = document.querySelector("#ville");

// Variables pour le span erreur
var erreurLastName = document.querySelector("#erreurLastName");
var erreurName = document.querySelector("#erreurName");
var erreurEmail = document.querySelector("#erreurEmail");
var erreurTel = document.querySelector("#erreurTel");
var erreurRue = document.querySelector("#erreurRue");
var erreurCp = document.querySelector("#erreurCp");
var erreurVille = document.querySelector("#erreurVille");

//ou pour toutes :
// var messageError = document.querySelectorAll ("span");

/* VERIFIER LA PRESENCE D'UNE VALEUR */

//Création d'un gestionnaire d'évènement 'click' contenant la fonction validation
formValid.addEventListener('click', validation);


function validation(event) {
    // event.preventDefault(); // preventDefault bloque l'envoi du formulaire plutard si erreur

    if (lastName) { // Si lastName existe = à if(lastName == True)
        verifTexte(lastName, erreurLastName);
    }
    if (name) {
        verifTexte(name, erreurName);
    }
    if (ville) {
        verifTexte(ville, erreurVille);
    }





    event.preventDefault();
}


//si le champ est vide




/* ******** Gestion du OnBlur ******** */

function surligne(champ, erreur) {
    if (erreur)
        champ.style.backgroundColor = "#fba";
    else
        champ.style.backgroundColor = "";
}

// Champ Nom
function verifTexte(champ, spanErreur) {
    if (champ.value == "") {

        // erreurLastName.textContent = "";
        spanErreur.textContent = 'Champ vide !'; // textContent permet d'afficher l'erreur
        surligne(champ, true);
        //span.innerHTML = 'mon texte';
        // erreurLastName.style.color = 'red'; //gèrer dans le CSS
    } else if (champ.value.length < 3 || champ.value.length > 25) {
        spanErreur.textContent = "";
        spanErreur.textContent = 'Nombre de caractères incorrect'; // textContent permet d'afficher l'erreur
        surligne(champ, true);
    } else {
        regex = /^[a-z ,.'-]+$/i;
        // Si tout va bien
        if (regex.test(champ.value)) {
            surligne(champ, false);
        }
        // Sinon erreur
        else{
            spanErreur.textContent = 'Caractères incorrects'; // textContent permet d'afficher l'erreur

        }
    }
}
/*
// Champ Prénom
function verifUsername(champ) {
    if (champ.value.length < 2 || champ.value.length > 25) {
        surligne(champ, true);
        return false;
    } else {
        surligne(champ, false);
        return true;
    }
}
*/

// Champ Email avec une Regex
function verifEmail(champ, spanErreur) {
    if (champ.value == "") {
        spanErreur.textContent = 'Champ vide !';
        surligne(champ, true);
    } else 
        {
        regex = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
        if (regex.test(champ.value)) {
            surligne(champ, false);
    }
    
    
        
    // } else {
    //     surligne(champ, false);
    //     return true;
    // }
}
}

/*
// Champ tel
function verifTel(champ) {
    if (champ.value.length < 10 || champ.value.length > 14) {
        surligne(champ, true);
        return false;
    } else {
        surligne(champ, false);
        return true;
    }
}

// let checkNum = /^0[1-9]\d{8}$/;
// if (checkNum.test(tel)) {
//     msg += "Bon numéro";
//     console.log('bon');
// } else {
//     msg += "Mauvais numéro";
// }

// Champ rue */



