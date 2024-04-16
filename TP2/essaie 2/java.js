let pierre =  document.createElement('button');
pierre.textContent = 'Pierre';
document.body.appendChild(pierre);
let feuille = document.createElement('button');
feuille.textContent = 'Feuille';
document.body.appendChild(feuille);
let ciseau = document.createElement('button');
ciseau.textContent = 'Ciseau';
document.body.appendChild(ciseau);

let joueur = document.createElement('p');
let ordi = document.createElement('p');
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
        total++;
        totalP.textContent = 'Total: '+total;
    } else if (
        (player === "Pierre" && bot === 'Ciseau') ||
        (player === "Ciseau" && bot === 'Feuille') ||
        (player === "Feuille" && bot === 'Pierre')
    ) {
        resultat += 'Victoire';
        victoires++;
        total++;
        victoiresP.textContent = 'Victoires: ' + victoires;
        totalP.textContent = 'Total: '+total;
    } else {
        resultat += 'Défaite';
        defaites++;
        total++;
        defaitesP.textContent = 'Défaites: ' + defaites;
        totalP.textContent = 'Total: '+total;
    }
    pourcentageP.textContent = 'pourcentage de victoire :'+Math.floor( victoires*100/total)+' %';
    resultatP.textContent = resultat;
}
let total = 0;
let victoires = 0;
let defaites = 0;
let egalites = 0;
let pourcentage = 0;



let totalP = document.createElement('p');
totalP.textContent = 'Total: 0';
document.body.appendChild(totalP);

let victoiresP = document.createElement('p');
victoiresP.textContent = 'Victoires: 0';
document.body.appendChild(victoiresP);

let defaitesP = document.createElement('p');
defaitesP.textContent = 'Défaites: 0';
document.body.appendChild(defaitesP);

let egalitesP = document.createElement('p');
egalitesP.textContent = 'Égalités: 0';
document.body.appendChild(egalitesP);

let pourcentageP = document.createElement('p');
pourcentageP.textContent = 'pourcentage de victoire  : %';
document.body.appendChild(pourcentageP);