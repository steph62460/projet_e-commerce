
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
    

    
    const app = document.querySelector('.articles-container');

    
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