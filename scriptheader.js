
let userInteracted = false;
const header = document.getElementById('header');
const originalDisk = document.getElementById('disk');

// Positions cibles pour chaque morceau (correspondent aux positions des boutons) 
const positions = [
  { left: "20%", top: "20%" },                                // Haut-gauche
  { left: "78%", top: "30%" },                    // Haut-droit
  { left: "50%", top: "40%" },                    // Bas-gauche
  { left: "70%", top: "70%" },        // Bas-droit
  { left: "40%", top: "65%" },
  { left: "30%", top: "75%" }// Un peu au-dessus du centre
]; 

// Détection d'interaction utilisateur
const interact = () => {
  userInteracted = true;
  splitDisk();
};
originalDisk.addEventListener('click', interact);

header.addEventListener('click', interact);

// Fonction pour créer et animer les morceaux
const splitDisk = () => {
  // Supprime le disque initial
  originalDisk.remove();

  // Pour chaque position, créer un clone du disque et l'animer vers sa position cible
  positions.forEach((pos, index) => {
    const piece = document.createElement('div');
    piece.className = 'disk-piece';
    // Placer au centre (même position initiale que le disque)
    piece.style.left = "50%";
    piece.style.top = "50%";
    header.appendChild(piece);

    // Forcer un reflow pour garantir que la transition démarre
    piece.getBoundingClientRect();

    // Définir les positions cibles (la transition se déclenche ici)
    piece.style.left = pos.left;
    piece.style.top = pos.top;

    // Une fois la transition terminée, masquer le morceau et afficher le bouton correspondant
    piece.addEventListener('transitionend', () => {
      piece.remove();
      const btn = document.getElementById('btn' + (index + 1));
      if (btn) {
        btn.style.display = 'block';
      }
    });
  });
};

// Déclencher l'action après 7 secondes sans interaction
setTimeout(() => {
  if (!userInteracted) {
    splitDisk();
  }
}, 7000);
console.log(userInteracted);