const articles = [
    {
        id: 1,
        denomination: "Lenovo ThinkCentre V530s-07ICR SFF (11BM002QFR)",
        description : "Intel Pentium Gold G5400 4 Go 1 To Graveur DVD Windows 10 Professionnel 64 bits",
        price: 439.96,
        img: 'img/pc-fixe-lenovo.jpg',
        lien: 'Page_article1.html'
    },
    {
        id: 2,
        denomination: "Dell OptiPlex 3010 SFF",
        description: "Intel Core i5 3.20 GHz 8 Go DDR3 240 Go SSD DVD Writer HDMI Windows 10 Pro 64 bit (reconditionné)",
        price: 189.00,
        img: 'img/pc-fixe-dell.jpg',
        lien: '#'
    },
    {
        id: 3,
        denomination: "HP Pavilion TP01-2014ng",
        description: '11e génération de processeurs Intel® Core™ i5 i5-11400 16 GB DDR4-SDRAM 512 GB SSD Mini Tower PC Windows 10 Home',
        price: 695.65,
        img: 'img/pc-fixe-hp.jpg',
        lien: '#'
    },
    {
        id: 4,
        denomination: "Acer PC Tour Veriton M4630G",
        description: 'Intel i3-4130 RAM 8Go Disque Dur 1To Windows 10 WiFi (Reconditionné)',
        price: 274.90,
        img: 'img/pc-fixe-acer.jpg',
        lien: '#'
    }
]

let panier =[];


const displayArticle = () => {
    const articlesNode = articles.map((article) => {
        return createArticle(article)
    });
    app.append(...articlesNode)
    }
    
    const app = document.querySelector('.rayon');

    
    const createArticle = (article) => {
   
    const divArticle = document.createElement('div');
    const a = document.createElement('a');
    const image = document.createElement('img');
    const h2 = document.createElement('h4');
    const paragraph = document.createElement('p');
    const divAction = document.createElement('div');
    const price = document.createElement('p');
    const btnAjout = document.createElement('button');
    const btnSupp = document.createElement('button');
      
    divArticle.classList.add('article');
    a.href = article.lien;
    image.src = article.img;
    image.alt = "tv lg";
    divAction.classList.add('article-action');
    
    h2.innerText = article.denomination;
    paragraph.innerText = article.description;
    price.innerText = article.price;
    btnAjout.innerText = "Ajouter au panier";
    
    // modif bouton

    btnSupp.style.backgroundColor = 'red';
    btnSupp.innerText = "Supprimer du panier";
    btnSupp.classList.add('button');
    btnAjout.addEventListener('click', () => {
        btnSupp.classList.remove('button');
        btnAjout.classList.add('button');
        addArticleCart(article);
    });

    btnSupp.addEventListener('click', () =>{
        btnAjout.style.backgroundColor = "#144e83";
        btnAjout.innerText = "Ajouter au panier";
        btnSupp.classList.add('button');
        btnAjout.classList.remove('button');
        removeArticleCart(article);
    });


    
    a.appendChild(image);
    divArticle.append(a, h2, paragraph, divAction);
    divAction.append(price, btnAjout,btnSupp);
    
    return divArticle;
    }

    // fonction ajout panier

const addArticleCart = (article) => {
    panier.push(article);
    console.log(panier);
    priceCart();
}
    // fonction suppression article au panier
const removeArticleCart = (article) => {
    let deleteArticle = panier.filter(value => value.id !== article.id);
    panier = deleteArticle;
    console.log(panier);
    priceCart();
};

// calcul du panier
const priceCart = () => {
    const total = panier.reduce((acc, value) => {
        acc += value.price;
        return acc;
        
}, 0);
const total2 = parseFloat(total.toFixed(2));
console.log(total2);
};

    displayArticle();

const articles2 = [
    {
        id: 5,
        denomination: "Acer Aspire 3 A317-53-34A6 Ordinateur Portable 17.3'' HD+",
        description: 'Intel Core i3-1115G4, RAM 8 Go, SSD 512 Go, Intel UHD Graphics, Windows 10',
        price: 629.00,
        promo: "",
        img: 'img/pc-portable-acer.jpg',
        lien: '#'
    },
    {
        id: 6,
        denomination: "Asus Chromebook C523NA-BR000 Ordinateur Portable 15.6\" HD",
        description: 'Celeron, RAM 4 Go, eMMC 64 Go, Chrome OS',
        price: 299.00,
        promo: "",
        img: 'img/pc-portable-asus.jpg',
        lien: '#'
    },
    {
        id: 7,
        denomination: "HP 17-by2024nf PC Portable 17.3\" HD+ Noir",
        description: 'Intel Core i3, RAM 4 Go, HDD 1 To, AZERTY, Windows 10',
        price: 490.87,
        promo : "",
        img: 'img/pc-portable-hp.jpg',
        lien: '#'
    },
    {
        id: 8,
        denomination: "Apple MacBook Pro MD101LL/A Ordinateur portable 13,3in",
        description: '2,5GHz, 4 Go de RAM, 500 Go de HD (Reconditionne)',
        price: 549.00,
        promo: "",
        img: 'img/pc-portable-apple.jpg',
        lien: '#'
    }
]

const displayArticle2 = () => {
    const articlesNode2 = articles2.map((article) => {
        return createArticle2(article)
    });
    app2.append(...articlesNode2)
    }
    
    const app2 = document.querySelector('.rayon2');

    const createArticle2 = (article) => {
   
    const divArticle = document.createElement('div');
    const a = document.createElement('a');
    const image = document.createElement('img');
    const h2 = document.createElement('h4');
    const paragraph = document.createElement('p');
    const divAction = document.createElement('div');
    const price = document.createElement('p');
    const btnAjout = document.createElement('button');
    const btnSupp = document.createElement('button');
      
    
    divArticle.classList.add('article');
    a.href = article.lien;
    image.src = article.img;
    image.alt = "tv lg";
    divAction.classList.add('article-action');
    
    h2.innerText = article.denomination;
    paragraph.innerText = article.description;
    price.innerHTML = article.price;
    btnAjout.innerText = "Ajouter au panier";

    btnSupp.style.backgroundColor = 'red';
    btnSupp.innerText = "Supprimer du panier";
    btnSupp.classList.add('button');
    
    btnAjout.addEventListener('click', () => {
        btnSupp.classList.remove('button');
        btnAjout.classList.add('button');
        addArticleCart2(article);
    });

    btnSupp.addEventListener('click', () =>{
        btnAjout.style.backgroundColor = "#144e83";
        btnAjout.innerText = "Ajouter au panier";
        btnSupp.classList.add('button');
        btnAjout.classList.remove('button');
        removeArticleCart2(article);
    });

    a.appendChild(image);
    divArticle.append(a, h2, paragraph, divAction);
    divAction.append(price, btnAjout, btnSupp);
    
    return divArticle;
    }
    
    const addArticleCart2 = (article) => {
        panier.push(article);
        console.log(panier);
        priceCart();
    }
        // fonction suppression article au panier
    const removeArticleCart2 = (article) => {
        let deleteArticle = panier.filter(value => value.id !== article.id);
        panier = deleteArticle;
        console.log(panier);
        priceCart();
    };
    
    // calcul du panier
    const priceCart2 = () => {
        const total = panier.reduce((acc, value) => {
            acc += value.price;
            return acc;
    }, 0);
    const total2 = parseFloat(total.toFixed(2));
    console.log(total2);
    };
    
    displayArticle2();

const articles3 = [
    {
        id: 9,
        denomination: "Acer Predator Orion 5000 (PO5-615s DG.E1YEF.007)",
        description: 'Intel Core i7-10700K 16 Go SSD 1 To NVIDIA GeForce RTX 3080 11 Go Graveur DVD Wi-Fi AC Windows 10 Famille 64 bits',
        price: 3299.90,
        promo: "",
        img: 'img/pc-gameur-acer.jpg',
        lien: '#'
    },
    {
        id: 10,
        denomination: "LDLC PC10 Zen Perfect",
        description: 'AMD Ryzen 5 5600X (3.7 GHz / 4.6 GHz) 16 Go SSD 240 Go + HDD 2 To NVIDIA GeForce RTX 3060 12 Go LAN 2.5 GbE Windows 10 Famille 64 bits',
        price: 1759.94,
        promo: "",
        img: 'img/pc-gameur-ldlc.jpg',
        lien: '#'
    },
    {
        id: 11,
        denomination: "ASUS ROG STRIX G15 G512LI-HN101T",
        description: 'Intel Core i5-10300H 16 Go SSD 512 Go 15.6" LED Full HD 144 Hz NVIDIA GeForce GTX 1650 Ti 4 Go Wi-Fi AX/Bluetooth Windows 10 Famille 64 bits',
        price: 999.95,
        promo: "",
        img: 'img/pc-gameur-asus.jpg',
        lien: '#'
    },
    {
        id: 12,
        denomination: "Gigabyte Aero 15 OLED XD-73FR644SP",
        description: 'Intel Core i7-11800H 32 Go SSD 1 To 15.6" OLED Ultra HD NVIDIA GeForce RTX 3070 8 Go Wi-Fi AX/Bluetooth Webcam Windows 10 Professionnel 64 bits',
        price: 2699.95,
        promo: "",
        img: 'img/pc-gameur-gigabyte.jpg',
        lien: '#'
    }
]

const displayArticle3 = () => {
    const articlesNode3 = articles3.map((article) => {
        return createArticle3(article)
    });
    app3.append(...articlesNode3)
    }
    

    
    const app3 = document.querySelector('.rayon3');

    
    const createArticle3 = (article) => {
   
    
    const divArticle = document.createElement('div');
    const a = document.createElement('a')
    const image = document.createElement('img');
    const h2 = document.createElement('h4');
    const paragraph = document.createElement('p');
    const divAction = document.createElement('div');
    const price = document.createElement('p');
    const btnAjout = document.createElement('button');
    const btnSupp = document.createElement('button');
      
    
  
    divArticle.classList.add('article');
    a.href = a.lien;
    image.src = article.img;
    image.alt = "tv lg";
    divAction.classList.add('article-action');
    
    

    h2.innerText = article.denomination;
    paragraph.innerText = article.description;
    price.innerHTML = article.price;
    btnAjout.innerText = "Ajouter au panier";
    
    btnSupp.style.backgroundColor = 'red';
    btnSupp.innerText = "Supprimer du panier";
    btnSupp.classList.add('button');
    btnAjout.addEventListener('click', () => {
        btnSupp.classList.remove('button');
        btnAjout.classList.add('button');
        addArticleCart3(article);
    });

    btnSupp.addEventListener('click', () =>{
        btnAjout.style.backgroundColor = "#144e83";
        btnAjout.innerText = "Ajouter au panier";
        btnSupp.classList.add('button');
        btnAjout.classList.remove('button');
        removeArticleCart3(article);
    });

    a.appendChild(image);
    divArticle.append(a, h2, paragraph, divAction);
    divAction.append(price, btnAjout, btnSupp);

    return divArticle;
    };
    

    const addArticleCart3 = (article) => {
        panier.push(article);
        console.log(panier);
        priceCart();
    }
        // fonction suppression article au panier
    const removeArticleCart3 = (article) => {
        let deleteArticle = panier.filter(value => value.id !== article.id);
        panier = deleteArticle;
        console.log(panier);
        priceCart();
    };
    
    // calcul du panier
    const priceCart3 = () => {
        const total = panier.reduce((acc, value) => {
            acc += value.price;
            return acc;
    }, 0);
    const total2 = parseFloat(total.toFixed(2));
    console.log(total2);
    }

    displayArticle3();