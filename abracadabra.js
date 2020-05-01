function abracadabra() {
    
    do {
    var prenom = prompt("Quel est votre prénom ?");
    var nom    = prompt("Quel est votre nom ?");
    var age    = prompt("Quel est votre age ?");

    } while(prenom == "" || prenom == null, nom == "" || prenom == null, age== "" || prenom == null)

    alert("Sapristi ! On ne m'avait pas prévenu que c'était toi, "
            + prenom
            + " ! Euh... Je veux dire vous... Madame ou Monsieur "
            + nom
            + " ! Cela fait déjà "
            + age
            + " ans que je vous attends !");

}

abracadabra();
