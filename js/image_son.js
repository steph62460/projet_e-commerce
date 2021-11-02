// ------------------------------------------ECRANS---------------------------------------------

let ecrans= [
// {
//     "id": 1,
//     "denomination": "LG 55 - TV OLED 4K - 139cm",
//     "marque": "LG",
//     "resolution": "OLED",
//     "taille": 55,
//     "dispo": "EN STOCK",
//     "price": 1299.95,
//     "img": "./img/IMG TV/lg 55 oled.jpg"
// },
// {
//     "id": 2,
//     "denomination": "HISENSE 32 - TV LED HD - 80cm",
//     "marque": "HISENSE",
//     "resolution": "HD",
//     "taille": 32,
//     "dispo": "EN STOCK",
//     "price": 199.96,
//     "img": "./img/IMG TV/hisense 32 hd.jpg"
// },
// {
//     "id": 3,
//     "denomination": "PANASONIC 55 - TV OLED 4K - 139cm",
//     "marque": "PANASONIC",
//     "resolution": "OLED",
//     "taille": 55,
//     "dispo": "EN STOCK",
//     "price": 1189.00,
//     "img": "./img/IMG TV/panasonic 55 oled.jpg"
// },
// {
//     "id": 4,
//     "denomination": "HISENSE 43 -TV  4K - 108cm",
//     "marque": "HISENSE",
//     "resolution": "4K",
//     "taille": 43,
//     "dispo": "EN STOCK",
//     "price": 349.96,
//     "img": "./img/IMG TV/hisense 43 4k.jpg"
// }
]

let panier = [];


const displayArticle = () => {
    const users = fetch ('https://projet-ecommerce-grp2-default-rtdb.firebaseio.com/ecrans.json')
    .then(async response => {
        try {
            const ecrans = await response.json();
            console.log(ecrans);
    
    const ecransNode = ecrans.map((article) => {
        return createArticle(article)
    });
    app.append(...ecransNode)

    } catch (e) {
        console.log(e);
    }
    })

    }
    
    const app = document.querySelector('.ecran_pc');

    const span = document.querySelector('.spanny');
    
    const createArticle = (article) => {
   
    
    const divArticle = document.createElement('div');
    const image = document.createElement('img');
    const h2 = document.createElement('h4');
    const paragraph = document.createElement('p');
    const divAction = document.createElement('div');
    const price = document.createElement('p');
    const btn = document.createElement('button');
    const btn2 = document.createElement('button2');
    
  
    divArticle.classList.add('article');
    image.src = article.img;
    image.alt = "tv lg";
    divAction.classList.add('article-action');
    
    

    h2.innerText = article.denomination;
    paragraph.innerText = article.dispo;
    price.innerText = article.price;
    btn.innerText = "Ajouter au panier";
    
    const btnDelete = document.createElement('button');
        btnDelete.style.backgroundColor = 'red';
        btnDelete.innerText = "Supprimer du panier";
        btnDelete.classList.add('dnone');
    
        btn.addEventListener('click', (event) => {
            event.preventDefault();
            btn.classList.add('dnone');
            btnDelete.classList.remove('dnone');
            addArticleToCart(article);
            priceCart();
        })
    
        btnDelete.addEventListener('click', (event) => {
            event.preventDefault();
            btnDelete.classList.add('dnone');
            btn.classList.remove('dnone');
            removeArticleToCart(article);
            priceCart();
        })
    
    divArticle.append(image, h2, paragraph, divAction);
    divAction.append(price, btn, btnDelete);
    
    return divArticle;
    }

    const addArticleToCart = (article) => {
        panier.push(article);
        console.log(panier);
        span.innerText =panier.length
    }
    const removeArticleToCart = (article) => {
       let deleteArticle = panier.filter(value => value.id !== article.id);
       panier = deleteArticle
       console.log(panier);
       if (panier.length == 0) {
           span.innerText ="";
       } else{
       span.innerText = panier.length
   }
   }


   const priceCart = () => {
       const total = panier.reduce((acc, value) => {
           acc += value.price;
           return acc;
           }, 0);
           console.log(total);
           const total2 = parseFloat(total.tofixed(2));
        console.log(total2);
   }

   

    

    displayArticle();


//-----------------------------------------CASQUES-----------------------------------------------------



    let casque= [
    // {
    //     "id": 5,
    //     "denomination": "Casque gamer Roccat ELO 7.1 AIR",
    //     "marque": "ROCCAT",
    //     "son": "Surround 7.1",
    //     "connexion":"sans fils",
    //     "dispo": "EN STOCK",
    //     "price": 92.99,
    //     "img": "./img/img_casques/Casque gamer Roccat ELO 7.1 AIR.png"
    // },
    // {
    //     "id": 6,
    //     "denomination": "Casque gamer Razer Barracuda X",
    //     "marque": "RAZER",
    //     "son": "Surround 7.1",
    //     "connexion":"sans fils",
    //     "dispo": "EN STOCK",
    //     "price": 99.99,
    //     "img": "./img/img_casques/Casque gamer Razer Barracuda X.png"
    // },
    // {
    //     "id": 7,
    //     "denomination": "Casque gamer Hyperx Cloud Stinger S 7.1 PC",
    //     "marque": "HYPERX",
    //     "son": "Surround 7.1",
    //     "connexion":"Filaire Jack",
    //     "dispo": "EN STOCK",
    //     "price": 69.99,
    //     "img": "./img/img_casques/Casque gamer Hyperx Cloud Stinger S 7.1 PC.png"
    // },
    // {
    //     "id": 8,
    //     "denomination": "Casque gamer JBL Quantum 200 Noir",
    //     "marque": "JBL",
    //     "son": "Surround 7.1",
    //     "connexion":"Filaire Jack",
    //     "dispo": "EN STOCK",
    //     "price": 59.99,
    //     "img": "./img/img_casques/Casque gamer JBL Quantum 200 Noir.png"
    // }
]




    const displayArticle2 = () => {
        const users = fetch ('https://projet-ecommerce-grp2-default-rtdb.firebaseio.com/casque.json')
        .then(async response => {
            try {
                const casque = await response.json();
                console.log(casque);
                const casque2Node = casque.map((article) => {
                    return createArticle2(article)
                });
                app2.append(...casque2Node)
               

            } catch (e) {
                console.log(e);
            }
        })

     
    }
    
        
        const app2 = document.querySelector('.casques');
    
    
        
        const createArticle2 = (article) => {
       
        
        const divArticle = document.createElement('div');
        const image = document.createElement('img');
        const h2 = document.createElement('h4');
        const paragraph = document.createElement('p');
        const divAction = document.createElement('div');
        const price = document.createElement('p');
        const btn = document.createElement('button');
        const btn2 = document.createElement('button2');
        
      
        divArticle.classList.add('article');
        image.src = article.img;
        image.alt = "tv lg";
        divAction.classList.add('article-action');
        
        
    
        h2.innerText = article.denomination;
        paragraph.innerText = article.dispo;
        price.innerText = article.price;
        btn.innerText = "Ajouter au panier";


        
        const btnDelete = document.createElement('button');
        btnDelete.style.backgroundColor = 'red';
        btnDelete.innerText = "Supprimer du panier";
        btnDelete.classList.add('dnone');
    
        btn.addEventListener('click', (event) => {
            event.preventDefault();
            btn.classList.add('dnone');
            btnDelete.classList.remove('dnone');
            addArticleToCart2(article);
            priceCart();
        })
    
        btnDelete.addEventListener('click', (event) => {
            event.preventDefault();
            btnDelete.classList.add('dnone');
            btn.classList.remove('dnone');
            removeArticleToCart2(article);
            priceCart();
        })


        
        divArticle.append(image, h2, paragraph, divAction);
        divAction.append(price, btn,btnDelete);
        
        return divArticle;
        }
    
     const addArticleToCart2 = (article) => {
         panier.push(article);
         console.log(panier);
         span.innerText =panier.length
     }
     const removeArticleToCart2 = (article) => {
        let deleteArticle = panier.filter(value => value.id !== article.id);
        panier = deleteArticle
        console.log(panier);
        if (panier.length == 0) {
            span.innerText ="";
        } else{
        span.innerText = panier.length
    }
    }

    const priceCart2 = () => {
        const total = panier.reduce((acc, value) => {
            acc += value.price;
            return acc;
            }, 0);
            console.log(total);
            const total2 = parseFloat(total.tofixed(2));
        console.log(total2);
    }
        
        
    
        displayArticle2();


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
    

        import { getDatabase,get,ref,set,child, update, remove}
        from "https://www.gstatic.com/firebasejs/9.1.3/firebase-database.js";


        const db = getDatabase();

