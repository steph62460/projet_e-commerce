let pcFixe = []

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
    let decimal = article.price;
    let decimalAsInt = Math.round((decimal - parseInt(decimal)) * 100);
    const sup = document.createElement('sup');
    sup.innerText = decimalAsInt
    let intNumber = parseInt(decimal);
    const spanPrice = document.createElement('span');
    const euro = document.createElement('span');
    euro.innerText = "€"
    spanPrice.innerText = intNumber + '.';
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
    price.append("Prix: " , spanPrice, sup, euro)
    
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
    let decimal = article.price;
    let decimalAsInt = Math.round((decimal - parseInt(decimal)) * 100);
    const sup = document.createElement('sup');
    sup.innerText = decimalAsInt
    let intNumber = parseInt(decimal);
    const spanPrice = document.createElement('span');
    const euro = document.createElement('span');
    euro.innerText = "€"
    spanPrice.innerText = intNumber + '.';
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
    price.append("Prix: " , spanPrice, sup, euro)
    
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
    let decimal = article.price;
    let decimalAsInt = Math.round((decimal - parseInt(decimal)) * 100);
    const sup = document.createElement('sup');
    sup.innerText = decimalAsInt
    let intNumber = parseInt(decimal);
    const spanPrice = document.createElement('span');
    const euro = document.createElement('span');
    euro.innerText = "€"
    spanPrice.innerText = intNumber + '.';
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
    price.append("Prix: " , spanPrice, sup, euro)

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
