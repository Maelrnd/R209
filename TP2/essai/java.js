let pierre = document.getElementById("pierre");
let feuille = document.getElementById("feuille");
let ciseau = document.getElementById("ciseau");
let joueur = document.getElementById("joueur");
let ordi = document.getElementById("ordi");
let choix = ['Pierre', 'Ciseau', 'Feuille'];
let resultat
let resultatP = document.createElement('p')
document.body.appendChild(resultatP)

pierre.addEventListener('click', () => {
    joueur.textContent = pierre.textContent;
    let choixr = Math.floor(Math.random() * 3);
    ordi.textContent = choix[choixr];
    match(joueur.textContent,ordi.textContent)
});
feuille.addEventListener('click', () => {
    joueur.textContent = feuille.textContent;
    let choixr = Math.floor(Math.random() * 3);
    ordi.textContent = choix[choixr];
    match(joueur.textContent,ordi.textContent)
});
ciseau.addEventListener('click', () => {
    joueur.textContent = ciseau.textContent;
    let choixr = Math.floor(Math.random() * 3);
    ordi.textContent = choix[choixr];
    match(joueur.textContent,ordi.textContent)
});


function match(player, bot) {
    resultatP.textContent = '';
    resultat = 'Résultat: ';
    if (player === bot) {
        resultat += 'Égalité';
        egalites++;
        egalitesP.textContent = 'Égalités: ' + egalites;
    } else if (
        (player === "Pierre" && bot === 'Ciseau') ||
        (player === "Ciseau" && bot === 'Feuille') ||
        (player === "Feuille" && bot === 'Pierre')
    ) {
        resultat += 'Victoire';
        victoires++;
        victoiresP.textContent = 'Victoires: ' + victoires;
    } else {
        resultat += 'Défaite';
        defaites++;
        defaitesP.textContent = 'Défaites: ' + defaites;
    }
    resultatP.textContent = resultat;
}
let victoires = 0;
let defaites = 0;
let egalites = 0;

let victoiresP = document.createElement('p');
victoiresP.textContent = 'Victoires: 0';
document.body.appendChild(victoiresP);

let defaitesP = document.createElement('p');
defaitesP.textContent = 'Défaites: 0';
document.body.appendChild(defaitesP);

let egalitesP = document.createElement('p');
egalitesP.textContent = 'Égalités: 0';
document.body.appendChild(egalitesP);