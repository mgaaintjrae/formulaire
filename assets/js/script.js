/* Script de début du
    Formulaire
    d'inscription ne fonctionne pas !  */

/* ***** VARIABLES ***** */

// Variables globales ou scope globales
var formValid = document.querySelector("#myForm");
var regex;

// Variables pour mes input
var lastName = document.querySelector("#lastName");
var firstName = document.querySelector("#firstName");
var email = document.querySelector("#email");
var valid_email = document.querySelector("#valid_email");
var phone = document.querySelector("#phone");
var valid_phone = document.querySelector("#valid_phone");
var rue = document.querySelector("#rue");
var cp = document.querySelector("#cp");
var ville = document.querySelector("#ville");

// Variables pour le span erreur
var erreurLastName = document.querySelector("#erreurLastName");
var erreurName = document.querySelector("#erreurName");
var erreurEmail = document.querySelector("#erreurEmail");
var confirmEmail = document.querySelector("#confirmEmail");
var erreurPhone = document.querySelector("#erreurPhone");
var confirmPhone = document.querySelector("#confirmPhone")
var erreurRue = document.querySelector("#erreurRue");
var erreurCp = document.querySelector("#erreurCp");
var erreurVille = document.querySelector("#erreurVille");

//ou pour toutes :
// var messageError = document.querySelectorAll ("span");

/* VERIFIER LA PRESENCE D'UNE VALEUR */

//Création d'un gestionnaire d'évènement 'soumettre' contenant la fonction validation
formValid.addEventListener('submit', validation);



function validation(event) {
    // event.preventDefault(); // preventDefault bloque l'envoi du formulaire plutard si erreur
    event.preventDefault();
    if (lastName) { // Si lastName existe = à if(lastName == True)
        verifTexte(lastName, erreurLastName);
    }
    if (firstName) {
        verifTexte(firstName, erreurName);
    }
    if (ville) {
        verifTexte(ville, erreurVille);
    }
    if (rue) {
        verifRue(rue, erreurRue);
    }
    if (cp) {
        verifCp(cp, erreurCp);
    }
    if (phone) {
        verifPhone(phone, erreurPhone);
    }
    if (valid_phone) {
        verifValid_phone(valid_phone, confirmPhone);
    }
    if (email) {
        verifEmail(email, erreurEmail);
    }
    if (valid_email) {
        verifValid_email(valid_email, confirmEmail);
    }
}


//si le champ est vide




/* ******** Gestion du OnBlur ******** */

function surligne(champ, erreur) {
    if (erreur)
        champ.style.backgroundColor = "#fba";
    else
        champ.style.backgroundColor = "";
}

// Champ Nom,Prénom,Ville
function verifTexte(champ, spanErreur) {

    if (champ.value == "") {

        // erreurSpan.textContent = "";
        spanErreur.textContent = 'Champ vide !'; // textContent permet d'afficher l'erreur
        surligne(champ, true);
        //span.innerHTML = 'mon texte';
        // erreurSpan.style.color = 'red'; //gèrer dans le CSS
    } else if (champ.value.length < 3 || champ.value.length > 25) {
        spanErreur.textContent = "";
        spanErreur.textContent = 'Nombre de caractères incorrect :'; // textContent permet d'afficher l'erreur
        surligne(champ, true);
    } else {
        regex = /^[a-z ,.'-]+$/i;
        // Si tout va bien
        if (regex.test(champ.value)) {
            surligne(champ, false);
        }
        // Sinon erreur
        else {
            spanErreur.textContent = 'Caractères incorrects :'; // textContent permet d'afficher l'erreur

        }
    }
}
// Champ Cp
function verifCp(champ, spanErreur) {

    if (champ.value == "") {

        // erreurSpan.textContent = "";
        spanErreur.textContent = 'Champ vide !'; // textContent permet d'afficher l'erreur
        surligne(champ, true);
        //span.innerHTML = 'mon texte';
        // erreurSpan.style.color = 'red'; //gèrer dans le CSS
    } else {
        regex = /[0-9]{5}/g;
        // Si tout va bien
        if (regex.test(champ.value)) {
            surligne(champ, false);
        }
        // Sinon erreur
        else {
            spanErreur.textContent = 'Code Postal invalide'; // textContent permet d'afficher l'erreur

        }
    }
}

// Champ Rue
function verifRue(champ, spanErreur) {

    if (champ.value == "") {

        // erreurSpan.textContent = "";
        spanErreur.textContent = 'Champ vide !'; // textContent permet d'afficher l'erreur
        surligne(champ, true);
        //span.innerHTML = 'mon texte';
        // erreurSpan.style.color = 'red'; //gèrer dans le CSS
    } else {
        regex =  /^[A-Z0-9a-z -é'èàçêâîôëäïö,0-9]+$/;
        // Si tout va bien
        if (regex.test(champ.value)) {
            surligne(champ, false);
        }
        // Sinon erreur
        else {
            spanErreur.textContent = 'Merci de saisir une rue valide'; // textContent permet d'afficher l'erreur

        }
    }
}

// Champ Phone
function verifPhone(champ, spanErreur) {

    if (champ.value == "") {

        // erreurSpan.textContent = "";
        spanErreur.textContent = 'Champ vide !'; // textContent permet d'afficher l'erreur
        surligne(champ, true);
        //span.innerHTML = 'mon texte';
        // erreurSpan.style.color = 'red'; //gèrer dans le CSS
    } else if (champ.value.length < 10 || champ.value.length > 14) {
        spanErreur.textContent = "";
        spanErreur.textContent = 'Nombre de caractères incorrect :'; // textContent permet d'afficher l'erreur
        surligne(champ, true);
    } else {
        regex = /^(01|02|03|04|05|06|07|08|09)[0-9]{8}$/;
        // Si tout va bien
        if (regex.test(champ.value)) {
            surligne(champ, false);
        }
        // Sinon erreur
        else {
            spanErreur.textContent = 'Format incorrect'; // textContent permet d'afficher l'erreur

        }
    }
}

function verifValid_phone(champ, spanErreur) {

    if (champ.value == "") {
        spanErreur.textContent = "Merci de confirmer votre téléphone !"; // textContent permet d'afficher l'erreur
        surligne(champ, true);
    }
}

// Champ Email
function verifEmail(champ, spanErreur) {
    if (champ.value == "") {
        spanErreur.textContent = 'Champ vide !';
        surligne(champ, true);
    } else {
        regex = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
        if (regex.test(champ.value)) {
            surligne(champ, false);
        } else {
            spanErreur.textContent = 'Email incorrect'; // textContent permet d'afficher l'erreur

        }
    }
}
function verifValid_email(champ, spanErreur) {

    if (champ.value == "") {
        spanErreur.textContent = "Merci de confirmer votre mail !"; // textContent permet d'afficher l'erreur
        surligne(champ, true);
    }
}

//Confirmation Formulaire avant envoi
// function confirmSubmit() {
//     var manquant = false;
//     for (var i = 0; i < document.myForm.elements.length; i++) {
//         if ((document.myForm.elements[i].type == 'text', 'email', 'tel') && (document.myForm.elements[i].value == '')) {
//             manquant = true;
//         }
//     }
//     if (manquant) {
//         choix = confirm("oui ou non?");
//         if (choix == true) {
//             document.myForm.submit();
//         } else {
//             return false;
//         }
//     }
// }

function confirmation(formulaire)
{
    console.log(formulaire);
	alert(formulaire);
	if(confirm('Etes-vous sur(e) de vouloir confirmer ?'))
	{
		formulaire.submit();
	}
}