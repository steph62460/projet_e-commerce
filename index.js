{
  const articles = [
    {
        id: 1,
        denomination: "PC portable Acer Aspire 3 A317-53-34A6",
        marque: "Acer Aspire",
        processeur: "Intel core I3-1115G4 et Intel UHD graphics ",
        taille: "RAM 8 Go",
        SSD: "512 Go",
        price: 629.00,
        img: "img/pc-portable-acer.jpg",
      },
      {
        id: 2,
        denomination: "Asus Chromebook C223NA-GJ0010 Ordinateur Portable 15.6\" HD",
        marque: "Asus",
        processeur: "Intel HD Graphics 500",
        taille: "11.6\" Celeron",
        SSD: "RAM 4 Go, EMMC 32 Go",
        price: 209.99,
        img: "img/ordinateur-portable-chromebook-asus-c223na-gj0010.jpg",
      },
      {
        id: 3,
        denomination: "apple 27¨ apple-27-imac-retina-5k-2020",
        marque: "Apple",
        processeur: "Intel core I5",
        taille: "16 Go",
        SSD: "RAM 8Go,stockage 256Go 2020",
        price: 1758.99,
        img: "img/apple-27-imac-retina-5k-2020-intel-core-i5.jpg",
      },
      {
        id: 4,
        denomination: "pc portable gamer MSI",
        marque: "MSI",
        processeur: "RAM 8Go- stockage 512Go ",
        taille: "15.6\" FHD 144Hz-core I5-10300H",
        SSD: "SSD-GTX 1650 Max Q",
        price: 818.99,
        img: "img/pc-portable-gamer-msi-gf63-thin-10sc-079xfr-15.jpg",
      },
    {
      id: 5,
      denomination: "Acer Predator Orion 5000",
      marque: "Acer",
      processeur: "Intel core I7-10700K",
      taille: "16 Go",
      SSD: "1 To NVIDIA GeoForce RTX 3080 11 Go",
      price: 3299.95,
      img: "",
    },
    {
      id: 6,
      denomination: "LDLC pc 10 Zen Perfect",
      marque: "LDLC",
      processeur: "AMD Ryzen 5 5600X 16 Go",
      taille: "16 Go",
      SSD: "240 Go + HDD 2To NVIDIA GeForce RTX 3060 12 Go",
      price: 1759.94,
      img: "",
    },
    {
      id: 7,
      denomination: "ASUS Rog Strix G15",
      marque: "ASUS",
      processeur: "Intel core I5-10300H 16Go",
      taille: "15.6' LED Full HD 144Hz ",
      SSD: "512 Go NVIDIA GeForce GTX 1650 Ti 4Go",
      price: 999.95,
      img: "",
    },
    {
      id: 8,
      denomination: "Gigabyte Aero 15 OLED XD",
      marque: "Aero OLED",
      processeur: "Intel core I7-11800 32Go",
      taille: "15.6 Oled Ultra HD",
      SSD: "1 To NVIDIA GeForce RTX 3070 8Go",
      price: 2699.95,
      img: "",
    },
  ];
}
const app = document.querySelector(".rayon");

const displayArticle = () => {
  const articleNode = articles.map((app) => {
    return createArticle(app);
  });
  app.append(...articleNode);
};



const createArticle = (app) => {
  


  







 

  return div;
};

displayArticle();
