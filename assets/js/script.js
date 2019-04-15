/* Script de début du
      Formulaire
    d'inscription   */


/* ******** Gestion du OnBlur ******** */

function surligne(champ, erreur) {
    if (erreur)
        champ.style.backgroundColor = "#fba";
    else
        champ.style.backgroundColor = "";
}

// Champ Nom
function verifName(champ) {
    if (champ.value.length < 2 || champ.value.length > 25) {
        surligne(champ, true);
        return false;
    } else {
        surligne(champ, false);
        return true;
    }
}



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

// Champ Email avec une Regex
function verifEmail(champ) {
    var regex = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
    if (!regex.test(champ.value)) {
        surligne(champ, true);
        return false;
    } else {
        surligne(champ, false);
        return true;
    }
}

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

let checkNum = /^0[1-9]\d{8}$/;
if (checkNum.test(tel)) {
    msg += "Bon numéro";
    console.log('bon');
} else {
    msg += "Mauvais numéro";
}