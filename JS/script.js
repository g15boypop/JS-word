var histo = [];

function word() {
    var mot = prompt("Veuillez entrez un mot");
    histo.push(mot);

    var len = mot.length;

    for (var text = 0; text < 3; text++) {

        var tmp = "texte" + text;

        document.getElementById(tmp).innerHTML = mot;
    }

    document.getElementById("texte0").style.fontWeight = "bold";
    document.getElementById("texte0").style.color = "rgb(55, 25, 25)";
    document.getElementById("texte1").style.textTransform = "lowercase";
    document.getElementById("texte2").style.textTransform = "uppercase";

    var countvoyelle = 0;
    var countconsonne = 0;

    var motm = mot.toLowerCase(); //pour qu'il prenne en compte les lettre en majuscule

    for (var i = 0; i < len; i++) {
        if (motm[i] == "a" || motm[i] == "e" || motm[i] == "i" || motm[i] == "o" || motm[i] == "u" || motm[i] == "y") {
            countvoyelle++;
        } else {
            countconsonne++;
        }
        document.getElementById("VC").innerHTML = "Le nombre de voyelle est de : " + countvoyelle + " et " + "le nombre de consonne est de : " + countconsonne;

    }

    console.log("nombre de voyelle : " + countvoyelle);
    console.log("nombre de consonne : " + countconsonne);

    var motinverse = mot.split("").reverse().join(""); //le split sépare, le reverse inverse et le joint assemble le tout inversé
    console.log(motinverse);
    document.getElementById("reverse").innerHTML = motinverse;

    var palin = (mot == motinverse) ? "ceci est un palindrome" : "ceci n'est pas un palindrome"; //true : false
    console.log("Le résultat est que " + palin);

    document.getElementById("palindrome").innerHTML = palin;


    document.getElementById("divhisto").innerHTML += histo.join("<br>");



}
// vu que j'appel la fonction par le bouton je n'ai pas besoin de l'appeller en dehors de la fonction
