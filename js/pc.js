let pcFixe = [
    // {
    //     id: 1,
    //     denomination: "Lenovo ThinkCentre V530s-07ICR SFF (11BM002QFR)",
    //     description : "Intel Pentium Gold G5400 4 Go 1 To Graveur DVD Windows 10 Professionnel 64 bits",
    //     price: 439.96,
    //     prixAffiche: "Prix: 439.<sup>96</sup>€",
    //     img: 'img/pc-fixe-lenovo.jpg',
    //     lien: 'Page_article1.html'
    // },
    // {
    //     id: 2,
    //     denomination: "Dell OptiPlex 3010 SFF",
    //     description: "Intel Core i5 3.20 GHz 8 Go DDR3 240 Go SSD DVD Writer HDMI Windows 10 Pro 64 bit (reconditionné)",
    //     price: 189.00,
    //     prixAffiche: "Prix: 189.<sup>00</sup>€",
    //     img: 'img/pc-fixe-dell.jpg',
    //     lien: '#'
    // },
    // {
    //     id: 3,
    //     denomination: "HP Pavilion TP01-2014ng",
    //     description: '11e génération de processeurs Intel® Core™ i5 i5-11400 16 GB DDR4-SDRAM 512 GB SSD Mini Tower PC Windows 10 Home',
    //     price: 695.65,
    //     prixAffiche: "Prix: 695.<sup>65</sup>€",
    //     img: 'img/pc-fixe-hp.jpg',
    //     lien: '#'
    // },
    // {
    //     id: 4,
    //     denomination: "Acer PC Tour Veriton M4630G",
    //     description: 'Intel i3-4130 RAM 8Go Disque Dur 1To Windows 10 WiFi (Reconditionné)',
    //     price: 274.90,
    //     prixAffiche: "Prix: 274.<sup>90</sup>€",
    //     img: 'img/pc-fixe-acer.jpg',
    //     lien: '#'
    // }
]

let panier =[];


const displayArticle = () => {
    const users = fetch('https://projet-ecommerce-grp2-default-rtdb.firebaseio.com/pcFixe.json')
        .then(async response => {
            try {
                const pcFixe = await response.json();
                console.log(pcFixe);
                const articlesNode = pcFixe.map((article) => {
                return createArticle(article)
                });
    app.append(...articlesNode)
    } catch(e) {
    console.log(e);
    }
        })

}
    
    const app = document.querySelector('.rayon');

    
    const createArticle = (article) => {
   
    const divArticle = document.createElement('div');
    const a = document.createElement('a');
    const image = document.createElement('img');
    const h2 = document.createElement('h4');
    const paragraph = document.createElement('p');
    const paragraph2 = document.createElement('p')
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
    paragraph2.classList.add('stock')
    paragraph2.innerHTML = "Dispo: " + article.dispo;
    price.innerHTML = article.prixAffiche;
    btnAjout.innerText = "Ajouter au panier";
    
    // modif bouton

    btnSupp.style.backgroundColor = 'red';
    btnSupp.innerText = "Supprimer du panier";
    btnSupp.classList.add('button');
    btnAjout.addEventListener('click', () => {
        btnSupp.classList.remove('button');
        btnAjout.classList.add('button');
        addArticleCart(article);
        priceCart();
    });

    btnSupp.addEventListener('click', () =>{
        btnAjout.style.backgroundColor = "#144e83";
        btnAjout.innerText = "Ajouter au panier";
        btnSupp.classList.add('button');
        btnAjout.classList.remove('button');
        removeArticleCart(article);
        priceCart();
    });


    
    a.appendChild(image);
    divArticle.append(a, h2, paragraph,paragraph2, divAction);
    divAction.append(price, btnAjout,btnSupp);
    
    return divArticle;
    }

    // fonction ajout panier

const addArticleCart = (article) => {
    panier.push(article);
    console.log(panier);
    span.classList.add('span')
    span.innerText =panier.length;
}
    // fonction suppression article au panier
const removeArticleCart = (article) => {
    let deleteArticle = panier.filter(value => value.id !== article.id);
    panier = deleteArticle;
    console.log(panier);
    if (panier.length !==0) {
        span.classList.add('span')
    span.innerText =panier.length;
    } else {
        span.classList.remove('span');
        span.innerText = "";
    }

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

const numberPanier = document.querySelector(".lien3")
const span = document.createElement('span');
const lien = document.createElement('a');
const panier2 = document.createElement('img');
panier2.classList.add('panier')
panier2.src = "./img/panier.png"
numberPanier.append(lien, span);
lien.appendChild(panier2);

displayArticle();

let pcPortable = []



const displayArticle2 = () => {
    const users2 = fetch('https://projet-ecommerce-grp2-default-rtdb.firebaseio.com/pcPortable.json')
        .then(async response => {
            try {
                const pcPortable = await response.json();
                console.log(pcPortable);
                const articlesNode2 = pcPortable.map((article) => {
                return createArticle2(article)
                });
    app2.append(...articlesNode2)
    } catch(e) {
    console.log(e);
    }
        })
}
    
    const app2 = document.querySelector('.rayon2');

    const createArticle2 = (article) => {
   
    const divArticle = document.createElement('div');
    const a = document.createElement('a');
    const image = document.createElement('img');
    const h2 = document.createElement('h4');
    const paragraph = document.createElement('p');
    const paragraph2 = document.createElement('p')
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
    paragraph2.classList.add('stock')
    paragraph2.innerHTML = "Dispo: " + article.dispo;
    price.innerHTML = article.prixAffiche;
    btnAjout.innerText = "Ajouter au panier";

    btnSupp.style.backgroundColor = 'red';
    btnSupp.innerText = "Supprimer du panier";
    btnSupp.classList.add('button');

    btnAjout.addEventListener('click', () => {
        btnSupp.classList.remove('button');
        btnAjout.classList.add('button');
        addArticleCart2(article);
        priceCart();
    });

    btnSupp.addEventListener('click', () =>{
        btnAjout.style.backgroundColor = "#144e83";
        btnAjout.innerText = "Ajouter au panier";
        btnSupp.classList.add('button');
        btnAjout.classList.remove('button');
        removeArticleCart2(article);
        priceCart();
    });

    a.appendChild(image);
    divArticle.append(a, h2, paragraph, paragraph2, divAction);
    divAction.append(price, btnAjout, btnSupp);
    
    return divArticle;
    }
    
    const addArticleCart2 = (article) => {
        panier.push(article);
        console.log(panier);
        span.classList.add('span')
        span.innerText =panier.length;
        
    }
        // fonction suppression article au panier
    const removeArticleCart2 = (article) => {
        let deleteArticle = panier.filter(value => value.id !== article.id);
        panier = deleteArticle;
        console.log(panier);
        if (panier.length !==0) {
            span.classList.add('span')
        span.innerText =panier.length;
        } else {
            span.classList.remove('span');
            span.innerText = "";
        }
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

let pcGameur = []

const displayArticle3 = () => {
    const users3 = fetch('https://projet-ecommerce-grp2-default-rtdb.firebaseio.com/pcGameur.json')
        .then(async response => {
            try {
                const pcGameur = await response.json();
                console.log(pcGameur);
                const articlesNode3 = pcGameur.map((article) => {
                return createArticle3(article)
                });
    app3.append(...articlesNode3)
    } catch(e) {
    console.log(e);
    }
        })
}
    

    
    const app3 = document.querySelector('.rayon3');

    
    const createArticle3 = (article) => {
   
    
    const divArticle = document.createElement('div');
    const a = document.createElement('a')
    const image = document.createElement('img');
    const h2 = document.createElement('h4');
    const paragraph = document.createElement('p');
    const paragraph2 = document.createElement('p')
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
    paragraph2.classList.add('stock')
    paragraph2.innerHTML = "Dispo: " + article.dispo;
    price.innerHTML = article.prixAffiche;
    btnAjout.innerText = "Ajouter au panier";
    
    btnSupp.style.backgroundColor = 'red';
    btnSupp.innerText = "Supprimer du panier";
    btnSupp.classList.add('button');
    btnAjout.addEventListener('click', () => {
        btnSupp.classList.remove('button');
        btnAjout.classList.add('button');
        addArticleCart3(article);
        priceCart();
    });

    btnSupp.addEventListener('click', () =>{
        btnAjout.style.backgroundColor = "#144e83";
        btnAjout.innerText = "Ajouter au panier";
        btnSupp.classList.add('button');
        btnAjout.classList.remove('button');
        removeArticleCart3(article);
        priceCart();
    });

    a.appendChild(image);
    divArticle.append(a, h2, paragraph, paragraph2, divAction);
    divAction.append(price, btnAjout, btnSupp);

    return divArticle;
    };
    

    const addArticleCart3 = (article) => {
        panier.push(article);
        console.log(panier);
        span.classList.add('span')
        span.innerText =panier.length;
    }
        // fonction suppression article au panier
    const removeArticleCart3 = (article) => {
        let deleteArticle = panier.filter(value => value.id !== article.id);
        panier = deleteArticle;
        console.log(panier);
        if (panier.length !==0) {
            span.classList.add('span')
            span.innerText =panier.length;
        } else {
            span.classList.remove('span');
            span.innerText = "";
        }
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

    // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAM3I5CDdy3-xLrPd_dRBb1kqztc4RdVdA",
    authDomain: "projet-ecommerce-grp2.firebaseapp.com",
    projectId: "projet-ecommerce-grp2",
    // databaseURL: "https://projet-ecommerce-grp2-default-rtdb.firebaseio.com/",
    storageBucket: "projet-ecommerce-grp2.appspot.com",
    messagingSenderId: "134275146361",
    appId: "1:134275146361:web:7061a84c95240bb203eaa8"
  };

  // Initialize Firebase
  const app4 = initializeApp(firebaseConfig);
  import { getDatabase, get, ref, set, child, update, remove}
    from "https://www.gstatic.com/firebasejs/9.1.3/firebase-database.js";

    const db = getDatabase();