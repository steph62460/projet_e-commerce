const articles = [
  {
    id: 1,
    denomination: "PC portable Acer Aspire 3 A317-53-34A6",
    marque: "Acer Aspire",
    description:
      "Intel core I3-1115G4 et Intel UHD graphics RAM 8 Go SSD 512 Go",
    price: 629.0,
    img: "img/pc-portable-acer.jpg",
  },
  {
    id: 2,
    denomination: 'Asus Chromebook C223NA-GJ0010 Ordinateur Portable 15.6" HD',
    marque: "Asus",
    description: 'Intel HD Graphics 500 11.6" Celeron RAM 4 Go, EMMC 32 Go',
    price: 309.99,
    promo: "209.99 euro",
    img: "img/ordinateur-portable-chromebook-asus-c223na-gj0010.jpg",
  },
  {
    id: 3,
    denomination: "apple 27¨ apple-27-imac-retina-5k-2020",
    marque: "Apple",
    description: 'Intel core I5 16 Go" RAM 8Go,stockage 256Go 2020',
    price: 1999.0,
    promo: "1 758.93 euro",
    img: "img/apple-27-imac-retina-5k-2020-intel-core-i5.jpg",
  },
  {
    id: 4,
    denomination: "pc portable gamer MSI",
    marque: "MSI",
    description:
      'RAM 8Go- stockage 512Go15.6" FHD 144Hz-core I5-10300H SSD-GTX 1650 Max Q ',
    price: 899.0,
    promo: "818.99 euro",
    img: "img/pc-portable-gamer-msi-gf63-thin-10sc-079xfr-15.jpg",
  },
];

let panier = [];

const app = document.querySelector(".rayon");
const span = document.querySelector(".spanny");
const divart =document.querySelector(".div");

const displayArticle = () => {
  const articleNode = articles.map((app) => {
    return createArticle(app);
  });
  app.append(...articleNode);
};

const createArticle = (app) => {
  const div = document.createElement("div");
  const a = document.createElement("a");
  const img = document.createElement("img");
  const h2 = document.createElement("h2");
  const p = document.createElement("p");
  
  div.classList.add("article");
  a.href = "#";
  img.classList.add("pc");
  img.src = app.img;
  img.alt = app.marque;
  h2.classList.add("reference");
  h2.innerText = app.denomination;
  p.innerText = app.description;

  // button js
  const divArt = document.createElement("button");
  const p2 = document.createElement("p");
  divArt.classList.add("article-action");
  p2.classList.add("prix");
  p2.innerText = app.price;
  
  const btnAjout = document.createElement("button");
  const btnSupp = document.createElement("button");

  btnAjout.innerText = "Ajouter au panier";
  btnAjout.classList.add("button");
  btnSupp.innerText = "Supprimer du panier";
  btnSupp.classList.add("dnone");
  btnSupp.style.backgroundColor = "red";

  btnAjout.addEventListener("click", () => {
    btnAjout.classList.add("dnone");
    btnSupp.classList.remove("dnone");
    addArticleToCart(app);
  });

  btnSupp.addEventListener("click", () => {
    btnSupp.classList.add("dnone");
    btnAjout.classList.remove("dnone");
    removeArticleToCart(app);
  });

  divArt.append( btnAjout, btnSupp);
  div.append(a, h2, p, p2, divArt);
  a.appendChild(img);

  return div;
};

// panier js
const addArticleToCart = (app) => {
  panier.push(app);
  console.log(panier);
  priceCart();
};

const removeArticleToCart = (app) => {
  let deleteArticle = panier.filter((value) => value.id !== app.id);
  panier = deleteArticle;
  console.log(panier);
  priceCart();
};

const priceCart = () => {
  const total = panier.reduce((acc, value) => {
    acc += value.price;
    return acc;
  }, 0);
  console.log(total);
};

displayArticle();




















const article2 = [
  {
    id: 5,
    denomination: "Acer Predator Orion 5000 (PO5-615s DG.E1YEF.007)",
    marque: "pc gameur acer",
    description:
      "Intel Core i7-10700K 16 Go SSD 1 To NVIDIA GeForce RTX 3080 11 Go Graveur DVD Wi-Fi AC Windows 10 Famille 64 bits",
    price: 3299.95,
    img: "img/pc-gameur-acer.jpg",
  },
  {
    id: 6,
    denomination: "LDLC PC10 Zen Perfect",
    marque: "pc gameur ldlc",
    description:
      "AMD Ryzen 5 5600X (3.7 GHz / 4.6 GHz) 16 Go SSD 240 Go + HDD 2 To NVIDIA GeForce RTX 3060 12 Go LAN 2.5 GbE Windows 10 Famille 64 bits",
    price: 1759.94,
    img: "img/pc-gameur-ldlc.jpg",
  },
  {
    id: 7,
    denomination: "pc gameur asus",
    marque: "ASUS ROG STRIX G15 G512LI-HN101T",
    description:
      'Intel Core i5-10300H 16 Go SSD 512 Go 15.6" LED Full HD 144 Hz NVIDIA GeForce GTX 1650 Ti 4 Go Wi-Fi AX/Bluetooth Windows 10 Famille 64 bits',
    price: 999.95,
    img: "img/pc-gameur-asus.jpg",
  },
  {
    id: 8,
    denomination: "Gigabyte Aero 15 OLED XD-73FR644SP",
    marque: "pc gameur gigabyte",
    description:
      'Intel Core i7-11800H 32 Go SSD 1 To 15.6" OLED Ultra HD NVIDIA GeForce RTX 3070 8 Go Wi-Fi AX/Bluetooth Webcam Windows 10 Professionnel 64 bits',
    price: 2699.95,
    img: "img/pc-gameur-gigabyte.jpg",
  },
];
const app2 = document.querySelector(".rayon2");
const span2 = document.querySelector(".spanny");

const displayArticle2 = () => {
  const articleNode2 = article2.map((art) => {
    return createArticle2(art);
  });
  app2.append(...articleNode2);
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
  img.alt = art.marque;
  a.href = "#";
  h2.classList.add("reference");
  h2.innerText = art.denomination;
  p.innerText = art.description;

  // button js
  const divArt2 = document.createElement("div");
  const p2 = document.createElement("p");
  divArt2.classList.add("article-action");
  p2.classList.add("prix");
  p2.innerText = art.price;
  
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
  div.append(a, h2, p,  divArt2);
  a.appendChild(img);

  return div;
};


// panier js
const addArticleToCart2 = (art) => {
  panier.push(art);
  console.log(panier);
};

const removeArticleToCart2 = (art) => {
  let deleteArticle = panier.filter((value) => value.id !== art.id);
  panier = deleteArticle;
  console.log(panier);
};

const priceCart2 = () => {
  const total = panier.reduce((acc, value) => {
    acc += value.price;
    return acc;
  }, 0);
  console.log(total);
};

displayArticle2();
