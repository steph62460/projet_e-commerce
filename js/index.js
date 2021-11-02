let promotion = [
  // {
  //   id: 1,
  //   denomination: "PC portable Acer Aspire 3 A317-53-34A6",
  //   marque: "Acer Aspire",
  //   description:
  //     "Intel core I3-1115G4 et Intel UHD graphics RAM 8 Go SSD 512 Go",
  //   price: 629.0,
  //   prixAffiche: "PRIX: 629.<sup>00</sup>€",
  //   img: "img/pc-portable-acer.jpg",
  // },
  // {
  //   id: 2,
  //   denomination: 'Asus Chromebook C223NA-GJ0010 Ordinateur Portable 15.6" HD',
  //   marque: "Asus",
  //   description: 'Intel HD Graphics 500 11.6" Celeron RAM 4 Go, EMMC 32 Go',
  //   price: 309.99,
  //   prixAffiche: "PRIX: 309.<sup>99</sup>€",
  //   img: "img/ordinateur-portable-chromebook-asus-c223na-gj0010.jpg",
  // },
  // {
  //   id: 3,
  //   denomination: "apple 27¨ apple-27-imac-retina-5k-2020",
  //   marque: "Apple",
  //   description: 'Intel core I5 16 Go" RAM 8Go,stockage 256Go 2020',
  //   price: 1999.0,
  //   prixAffiche: "PRIX: 1999.<sup>00</sup>€",
  //   img: "img/apple-27-imac-retina-5k-2020-intel-core-i5.jpg",
  // },
  // {
  //   id: 4,
  //   denomination: "pc portable gamer MSI",
  //   marque: "MSI",
  //   description:
  //     'RAM 8Go- stockage 512Go15.6" FHD 144Hz-core I5-10300H SSD-GTX 1650 Max Q ',
  //   price: 899.0,
  //   prixAffiche: "PRIX:899.<sup>00</sup>€",
  //   img: "img/pc-portable-gamer-msi-gf63-thin-10sc-079xfr-15.jpg",
  // },
];

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAM3I5CDdy3-xLrPd_dRBb1kqztc4RdVdA",
  authDomain: "projet-ecommerce-grp2.firebaseapp.com",
  databaseURL: "https://projet-ecommerce-grp2-default-rtdb.firebaseio.com/",
  projectId: "projet-ecommerce-grp2",
  storageBucket: "projet-ecommerce-grp2.appspot.com",
  messagingSenderId: "134275146361",
  appId: "1:134275146361:web:7061a84c95240bb203eaa8"
};

// Initialize Firebase
const app3 = initializeApp(firebaseConfig);
import {
  getDatabase,
  get,
  ref,
  set,
  child,
  update,
  remove,
} from "https://www.gstatic.com/firebasejs/9.1.3/firebase-database.js";
const db = getDatabase();

let panier = [];

const app = document.querySelector(".rayon");
// const divAction = document.querySelector(".div");

const displayArticle = () => {
  const users = fetch(
    "https://projet-ecommerce-grp2-default-rtdb.firebaseio.com/promotion.json"
  ).then(async (response) => {
    try {
      const promotion = await response.json();
      console.log(promotion);
      const articleNode = promotion.map((app) => {
        return createArticle(app);
      });
       app.append(...articleNode);
    } catch (e) {
      console.log(e);
    }  
  });
};


const createArticle = (app) => {
  const div = document.createElement("div");
  const h2 = document.createElement("h2");
  const a = document.createElement("a");
  const img = document.createElement("img");
  const p = document.createElement("p");

  div.classList.add("article");
  h2.classList.add("reference");
  h2.innerText = app.denomination;
  a.href = "#";
  img.classList.add("pc");
  img.src = app.img;
  // img.alt = app.marque;
  p.innerText = app.description;

  const divAction = document.createElement("div");
  const p2 = document.createElement("p");
  const btnAjout = document.createElement("button");
  const btnSupp = document.createElement("button");

  divAction.classList.add("article-action");
  p2.classList.add("prix");
  p2.innerHTML = app.prixAffiche;

  btnAjout.innerText = "Ajouter au panier";
  btnAjout.classList.add("button");
  btnSupp.innerText = "Supprimer du panier";
  btnSupp.classList.add("dnone");
  btnSupp.style.backgroundColor = "red";

  btnAjout.addEventListener("click", () => {
    btnAjout.classList.add("dnone");
    btnSupp.classList.remove("dnone");
    addArticleToCart(app);
    priceCart();
  });

  btnSupp.addEventListener("click", () => {
    btnSupp.classList.add("dnone");
    btnAjout.classList.remove("dnone");
    removeArticleToCart(app);
    priceCart();
  });

  div.append(a, img, h2, p, p2, divAction);
  divAction.append(p2, btnAjout, btnSupp);
  a.appendChild(img);

  return div;
};

// panier js
const addArticleToCart = (app) => {
  panier.push(app);
  console.log(panier);
  span.classList.add("span");
  span.innerText = panier.length;
  
};

const removeArticleToCart = (app) => {
  let deleteArticle = panier.filter((value) => value.id !== app.id);
  panier = deleteArticle;
  if (panier.length !== 0) {
    span.classList.add("span");
    span.innerText = panier.length; 
  }else{ 
      span.innerText = " "; 
      span.classList.remove('span');
  }
//   console.log(panier);
};

const priceCart = () => {
  const total = panier.reduce((acc, value) => {
    acc += value.price;
    return acc;
  }, 0);
  const total2 = parseFloat(total.toFixed(2));
  console.log(total2);
};

const numberPanier = document.querySelector(".lien");
const span = document.createElement("span");
const lien = document.createElement("a");
const panier2 = document.createElement("img");
panier2.classList.add("panier");
panier2.src = "./img/panier.png";

numberPanier.append(lien, span);
lien.appendChild(panier2);

displayArticle();




























const nouveautes = [
  // {
  //   id: 5,
  //   denomination: "Acer Predator Orion 5000 (PO5-615s DG.E1YEF.007)",
  //   marque: "pc gameur acer",
  //   description:
  //     "Intel Core i7-10700K 16 Go SSD 1 To NVIDIA GeForce RTX 3080 11 Go Graveur DVD Wi-Fi AC Windows 10 Famille 64 bits",
  //   price: 3299.95,
  //   prixAffiche: "PRIX: 3299.<sup>95</sup>€",
  //   img: "img/pc-gameur-acer.jpg",
  // },
  // {
  //   id: 6,
  //   denomination: "LDLC PC10 Zen Perfect",
  //   marque: "pc gameur ldlc",
  //   description:
  //     "AMD Ryzen 5 5600X (3.7 GHz / 4.6 GHz) 16 Go SSD 240 Go + HDD 2 To NVIDIA GeForce RTX 3060 12 Go LAN 2.5 GbE Windows 10 Famille 64 bits",
  //   price: 1759.94,
  //   prixAffiche: "PRIX: 1759.<sup>94</sup>€",
  //   img: "img/pc-gameur-ldlc.jpg",
  // },
  // {
  //   id: 7,
  //   denomination: "pc gameur asus",
  //   marque: "ASUS ROG STRIX G15 G512LI-HN101T",
  //   description:
  //     'Intel Core i5-10300H 16 Go SSD 512 Go 15.6" LED Full HD 144 Hz NVIDIA GeForce GTX 1650 Ti 4 Go Wi-Fi AX/Bluetooth Windows 10 Famille 64 bits',
  //   price: 999.95,
  //   prixAffiche: "PRIX: 999.<sup>95</sup>€",
  //   img: "img/pc-gameur-asus.jpg",
  // },
  // {
  //   id: 8,
  //   denomination: "Gigabyte Aero 15 OLED XD-73FR644SP",
  //   marque: "pc gameur gigabyte",
  //   description:
  //     'Intel Core i7-11800H 32 Go SSD 1 To 15.6" OLED Ultra HD NVIDIA GeForce RTX 3070 8 Go Wi-Fi AX/Bluetooth Webcam Windows 10 Professionnel 64 bits',
  //   price: 2699.95,
  //   prixAffiche: "PRIX: 2699.<sup>95</sup>€",
  //   img: "img/pc-gameur-gigabyte.jpg",
  // },
];
const app2 = document.querySelector(".rayon2");

const displayArticle2 = () => {
  const users2 = fetch(
    "https://projet-ecommerce-grp2-default-rtdb.firebaseio.com/nouveautes.json"
  ).then(async (response) => {
    try {
      const nouveautes = await response.json();
      console.log(nouveautes);
      const articleNode = nouveautes.map((app2) => {
        return createArticle(app2);
      });
      app2.append(...articleNode);
    } catch (e) {
      console.log(e);
    }  
  });
};

const createArticle2 = (art) => {
  const div = document.createElement("div");
  const a = document.createElement("a");
  const img = document.createElement("img");
  const h2 = document.createElement("h4");
  const p = document.createElement("p");

  div.classList.add("article");
  img.classList.add("pc");
  img.src = art.img;
  // img.alt = art.marque;
  a.href = "#";
  h2.classList.add("reference");
  h2.innerText = art.denomination;
  p.innerText = art.description;

  // button js
  const divArt2 = document.createElement("div");
  const p2 = document.createElement("p");
  divArt2.classList.add("article-action");
  p2.classList.add("prix");
  p2.innerHTML = art.prixAffiche;

  const btnAjout = document.createElement("button");
  btnAjout.innerText = "Ajouter au panier";
  btnAjout.classList.add("button");

  const btnSupp = document.createElement("button");
  btnSupp.innerText = "Supprimer du panier";
  btnSupp.classList.add("dnone");
  btnSupp.style.backgroundColor = "red";

  btnAjout.addEventListener("click", () => {
    btnAjout.classList.add("dnone");
    btnSupp.classList.remove("dnone");
    addArticleToCart(art);
  });

  btnSupp.addEventListener("click", () => {
    btnSupp.classList.add("dnone");
    btnAjout.classList.remove("dnone");
    removeArticleToCart(art);
  });

  divArt2.append(p2, btnAjout, btnSupp);
  div.append(a, h2, p, divArt2);
  a.appendChild(img);

  return div;
};

// panier js
const addArticleToCart2 = (art) => {
  panier.push(art);
  console.log(panier);
  span.classList.add("span");
  span.innerText = panier.length;
 
};

const removeArticleToCart2 = (art) => {
  let deleteArticle = panier.filter(value => value.id !== art.id);
  panier = deleteArticle;
 
  if (panier.length !== 0) {
    span.classList.add("span");
    span.innerText = panier.length; 
  }else{ 
      span.innerText = " "; 
      span.classList.remove('span');
  }
};

const priceCart2 = () => {
  const total = panier.reduce((acc, value) => {
    acc += value.price;
    return acc;
  }, 0);
  const total2 = parseFloat(total.toFixed(2));
  console.log(total2);
};

displayArticle2();
