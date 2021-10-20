const articles= [
{
    "id": 1,
    "denomination": "LG 55 - TV OLED 4K - 139cm",
    "marque": "LG",
    "resolution": "OLED",
    "taille": 55,
    "dispo": "EN STOCK",
    "price": 1299.95,
    "img": "./img/IMG TV/lg 55 oled.jpg"
},
{
    "id": 2,
    "denomination": "HISENSE 32 - TV LED HD - 80cm",
    "marque": "HISENSE",
    "resolution": "HD",
    "taille": 32,
    "dispo": "EN STOCK",
    "price": 199.96,
    "img": "./img/IMG TV/hisense 32 hd.jpg"
},
{
    "id": 3,
    "denomination": "PANASONIC 55 - TV OLED 4K - 139cm",
    "marque": "PANASONIC",
    "resolution": "OLED",
    "taille": 55,
    "dispo": "EN STOCK",
    "price": 1189.00,
    "img": "./img/IMG TV/panasonic 55 oled.jpg"
},
{
    "id": 4,
    "denomination": "HISENSE 43 -TV  4K - 108cm",
    "marque": "HISENSE",
    "resolution": "4K",
    "taille": 43,
    "dispo": "EN STOCK",
    "price": 349.96,
    "img": "./img/IMG TV/hisense 43 4k.jpg"
},
{
    "id": 5,
    "denomination": "PHILIPS 32 - TV Full HD - 80cm",
    "marque": "PHILIPS",
    "resolution": "Full HD",
    "taille": 32,
    "dispo": "EN STOCK",
    "price": 299.95,
    "img": "./img/IMG TV/PHILIPS 32 - TV Full HD - 80cm.jpg"
},
{
    "id": 6,
    "denomination": "LG 55nano - TV 4K 139cm",
    "marque": "LG",
    "resolution": "4K",
    "taille": 55,
    "dispo": "EN STOCK",
    "price": 849.95,
    "img": "./img/IMG TV/lg 55nano 4k.jpg"
},
{
    "id": 7,
    "denomination": "TCL 55 - TV 4K 139cm",
    "marque": "TCL",
    "resolution": "4K",
    "taille": 55,
    "dispo": "EN STOCK",
    "price": 649.90,
    "img": "./img/IMG TV/tcl 55 4k.jpg"
}
]




const displayArticle = () => {
    const articlesNode = articles.map((article) => {
        return createArticle(article)
    });
    app.append(...articlesNode)
    }
    
    const app = document.querySelector('.ecran_pc');


    
    const createArticle = (article) => {
   
    
    const divArticle = document.createElement('div');
    const image = document.createElement('img');
    const h2 = document.createElement('h');
    const paragraph = document.createElement('p');
    const divAction = document.createElement('div');
    const price = document.createElement('p');
    const btn = document.createElement('button');
    
  
    divArticle.classList.add('article');
    image.src = article.img;
    image.alt = "tv lg";
    divAction.classList.add('article-action');
    
    

    h2.innerText = article.denomination;
    paragraph.innerText = article.dispo;
    price.innerText = article.price;
    btn.innerText = "Ajouter au panier";
    

    
    divArticle.append(image, h2, paragraph, divAction);
    divAction.append(price, btn);
    
    return divArticle;
    }

    
    

    displayArticle();

    const articles2= [
    {
        "id": 5,
        "denomination": "Casque gamer Roccat ELO 7.1 AIR",
        "marque": "ROCCAT",
        "son": "Surround 7.1",
        "connexion":"sans fils",
        "dispo": "EN STOCK",
        "price": 92.99,
        "img": "./img/img_casques/Casque gamer Roccat ELO 7.1 AIR.png"
    },
    {
        "id": 6,
        "denomination": "Casque gamer Razer Barracuda X",
        "marque": "RAZER",
        "son": "Surround 7.1",
        "connexion":"sans fils",
        "dispo": "EN STOCK",
        "price": 99.99,
        "img": "./img/img_casques/Casque gamer Razer Barracuda X.png"
    },
    {
        "id": 7,
        "denomination": "Casque gamer Hyperx Cloud Stinger S 7.1 PC",
        "marque": "HYPERX",
        "son": "Surround 7.1",
        "connexion":"Filaire Jack",
        "dispo": "EN STOCK",
        "price": 69.99,
        "img": "./img/img_casques/Casque gamer Hyperx Cloud Stinger S 7.1 PC.png"
    },
    {
        "id": 8,
        "denomination": "Casque gamer JBL Quantum 200 Noir",
        "marque": "JBL",
        "son": "Surround 7.1",
        "connexion":"Filaire Jack",
        "dispo": "EN STOCK",
        "price": 59.99,
        "img": "./img/img_casques/Casque gamer JBL Quantum 200 Noir.png"
    }]

    const displayArticle2 = () => {
        const articles2Node = articles2.map((article) => {
            return createArticle2(article)
        });
        app2.append(...articles2Node)
        }
        
    
        
        const app2 = document.querySelector('.casques');
    
    
        
        const createArticle2 = (article) => {
       
        
        const divArticle = document.createElement('div');
        const image = document.createElement('img');
        const h2 = document.createElement('h');
        const paragraph = document.createElement('p');
        const divAction = document.createElement('div');
        const price = document.createElement('p');
        const btn = document.createElement('button');
        
      
        divArticle.classList.add('article');
        image.src = article.img;
        image.alt = "tv lg";
        divAction.classList.add('article-action');
        
        
    
        h2.innerText = article.denomination;
        paragraph.innerText = article.dispo;
        price.innerText = article.price;
        btn.innerText = "Ajouter au panier";
        
    
        
        divArticle.append(image, h2, paragraph, divAction);
        divAction.append(price, btn);
        
        return divArticle;
        }
    
     
        
        
    
        displayArticle2();
