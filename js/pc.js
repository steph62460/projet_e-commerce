const articles = [
    {
        id: 1,
        denomination: "Lenovo ThinkCentre V530s-07ICR SFF (11BM002QFR)",
        description : "Intel Pentium Gold G5400 4 Go 1 To Graveur DVD Windows 10 Professionnel 64 bits",
        price: 'PRIX: 439.<sup>96</sup>€',
        promo: "",
        img: 'img/pc-fixe-lenovo.jpg',
        lien: 'Page_article1.html'
    },
    {
        id: 2,
        denomination: "Dell OptiPlex 3010 SFF",
        description: "Intel Core i5 3.20 GHz 8 Go DDR3 240 Go SSD DVD Writer HDMI Windows 10 Pro 64 bit (reconditionné)",
        price: 'PRIX: <del>199.<sup>50</sup>',
        promo : '189.<sup>00</sup>€',
        img: 'img/pc-fixe-dell.jpg',
        lien: '#'
    },
    {
        id: 3,
        denomination: "HP Pavilion TP01-2014ng",
        description: '11e génération de processeurs Intel® Core™ i5 i5-11400 16 GB DDR4-SDRAM 512 GB SSD Mini Tower PC Windows 10 Home',
        price: 'PRIX: 695.<sup>65</sup>€',
        promo: "",
        img: 'img/pc-fixe-hp.jpg',
        lien: '#'
    },
    {
        id: 4,
        denomination: "Acer PC Tour Veriton M4630G",
        description: 'Intel i3-4130 RAM 8Go Disque Dur 1To Windows 10 WiFi (Reconditionné)',
        price: 'PRIX: 274.<sup>95</sup>€',
        promo: "",
        img: 'img/pc-fixe-acer.jpg',
        lien: '#'
    }
]

const art = document.querySelector('.rayon');

const displayArticle = () => {
    const articlesNode = articles.map((art) => {
        return createArticleElement(art);
    });
    art.append(...articlesNode);
}

const createArticleElement = (art) => {

    const div2 = document.createElement('div');
    div2.classList.add('article');
    const a = document.createElement('a');
    a.href = art.lien;
    const img = document.createElement('img');
    img.classList.add('pc')
    img.src = art.img;
    const title = document.createElement('h4');
    title.innerText = art.denomination;
    const paragr = document.createElement('p');
    paragr.innerText = art.description;
    const paragr2 = document.createElement('p');
    paragr2.classList.add('prix');
    paragr2.innerHTML = art.price;
    const paragr3 = document.createElement('p');
    paragr3.classList.add('prix');
    paragr3.classList.add('promo');
    paragr3.innerHTML = art.promo;
    
    a.appendChild(img);
    div2.append(a , title, paragr, paragr2, paragr3);
    return div2;
    }
    
    displayArticle();

const articles2 = [
    {
        id: 5,
        denomination: "Acer Aspire 3 A317-53-34A6 Ordinateur Portable 17.3'' HD+",
        description: 'Intel Core i3-1115G4, RAM 8 Go, SSD 512 Go, Intel UHD Graphics, Windows 10',
        price: 'PRIX: 629.<sup>00</sup>€',
        promo: "",
        img: 'img/pc-portable-acer.jpg',
        lien: '#'
    },
    {
        id: 6,
        denomination: "Asus Chromebook C523NA-BR000 Ordinateur Portable 15.6\" HD",
        description: 'Celeron, RAM 4 Go, eMMC 64 Go, Chrome OS',
        price: 'PRIX: 299.<sup>00</sup>€',
        promo: "",
        img: 'img/pc-portable-asus.jpg',
        lien: '#'
    },
    {
        id: 7,
        denomination: "HP 17-by2024nf PC Portable 17.3\" HD+ Noir",
        description: 'Intel Core i3, RAM 4 Go, HDD 1 To, AZERTY, Windows 10',
        price: 'PRIX: <del>549.<sup>00</sup></del>€',
        promo : "490.<sup>87</sup>€",
        img: 'img/pc-portable-hp.jpg',
        lien: '#'
    },
    {
        id: 8,
        denomination: "Apple MacBook Pro MD101LL/A Ordinateur portable 13,3in",
        description: '2,5GHz, 4 Go de RAM, 500 Go de HD (Reconditionne)',
        price: 'PRIX: 549.<sup>00</sup>€',
        promo: "",
        img: 'img/pc-portable-apple.jpg',
        lien: '#'
    }
]

const art2 = document.querySelector('.rayon2');

const displayArticle2 = () => {
    const articlesNode2 = articles2.map((art2) => {
        return createArticleElement2(art2);
    });
    art2.append(...articlesNode2);
}

const createArticleElement2 = (art2) => {

    const div2 = document.createElement('div');
    div2.classList.add('article');
    const a = document.createElement('a');
    a.href = art2.lien;
    const img = document.createElement('img');
    img.classList.add('pc')
    img.src = art2.img;
    const title = document.createElement('h4');
    title.innerText = art2.denomination;
    const paragr = document.createElement('p');
    paragr.innerText = art2.description;
    const paragr2 = document.createElement('p');
    paragr2.classList.add('prix');
    paragr2.innerHTML = art2.price;
    const paragr3 = document.createElement('p');
    paragr3.classList.add('prix');
    paragr3.classList.add('promo');
    paragr3.innerHTML = art2.promo;
    
    a.appendChild(img);
    div2.append(a , title, paragr, paragr2, paragr3);
    return div2;
    }
    
    displayArticle2();

const articles3 = [
    {
        id: 9,
        denomination: "Acer Predator Orion 5000 (PO5-615s DG.E1YEF.007)",
        description: 'Intel Core i7-10700K 16 Go SSD 1 To NVIDIA GeForce RTX 3080 11 Go Graveur DVD Wi-Fi AC Windows 10 Famille 64 bits',
        price: 'PRIX: 3 299.<sup>95</sup>€',
        promo: "",
        img: 'img/pc-gameur-acer.jpg',
        lien: '#'
    },
    {
        id: 10,
        denomination: "LDLC PC10 Zen Perfect",
        description: 'AMD Ryzen 5 5600X (3.7 GHz / 4.6 GHz) 16 Go SSD 240 Go + HDD 2 To NVIDIA GeForce RTX 3060 12 Go LAN 2.5 GbE Windows 10 Famille 64 bits',
        price: 'PRIX: 1 759.<sup>94</sup>€',
        promo: "",
        img: 'img/pc-gameur-ldlc.jpg',
        lien: '#'
    },
    {
        id: 11,
        denomination: "ASUS ROG STRIX G15 G512LI-HN101T",
        description: 'Intel Core i5-10300H 16 Go SSD 512 Go 15.6" LED Full HD 144 Hz NVIDIA GeForce GTX 1650 Ti 4 Go Wi-Fi AX/Bluetooth Windows 10 Famille 64 bits',
        price: 'PRIX: 999.<sup>95</sup>€',
        promo: "",
        img: 'img/pc-gameur-asus.jpg',
        lien: '#'
    },
    {
        id: 12,
        denomination: "Gigabyte Aero 15 OLED XD-73FR644SP",
        description: 'Intel Core i7-11800H 32 Go SSD 1 To 15.6" OLED Ultra HD NVIDIA GeForce RTX 3070 8 Go Wi-Fi AX/Bluetooth Webcam Windows 10 Professionnel 64 bits',
        price: 'PRIX: 2 699.<sup>95</sup>€',
        promo: "",
        img: 'img/pc-gameur-gigabyte.jpg',
        lien: '#'
    }
]

const art3 = document.querySelector('.rayon3');

const displayArticle3 = () => {
    const articlesNode3 = articles3.map((art3) => {
        return createArticleElement3(art3);
    });
    art3.append(...articlesNode3);
}

const createArticleElement3 = (art3) => {

    const div2 = document.createElement('div');
    div2.classList.add('article');
    const a = document.createElement('a');
    a.href = art3.lien;
    const img = document.createElement('img');
    img.classList.add('pc');
    img.src = art3.img;
    const title = document.createElement('h4');
    title.innerText = art3.denomination;
    const paragr = document.createElement('p');
    paragr.innerText = art3.description;
    const paragr2 = document.createElement('p');
    paragr2.classList.add('prix');
    paragr2.innerHTML = art3.price;
    const paragr3 = document.createElement('p');
    paragr3.classList.add('prix');
    paragr3.classList.add('promo');
    paragr3.innerHTML = art3.promo;
    
    a.appendChild(img);
    div2.append(a , title, paragr, paragr2, paragr3);
    return div2;
    }
    
    displayArticle3();