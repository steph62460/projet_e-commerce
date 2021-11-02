let panier =[];

const numberPanier = document.querySelector(".lien3")
const span = document.createElement('span');
const lien = document.createElement('a');
const panier2 = document.createElement('img');
panier2.classList.add('panier')
panier2.src = "./img/panier.png"
numberPanier.append(lien, span);
lien.appendChild(panier2);