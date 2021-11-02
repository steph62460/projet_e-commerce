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
const app = initializeApp(firebaseConfig);

import { getDatabase, get, ref, set, child, update, remove }
    from "https://www.gstatic.com/firebasejs/9.1.3/firebase-database.js";

const db = getDatabase();

// REFERENCES
let menub = document.querySelector("#menuB");
let idb = document.querySelector("#idB");
let nameb = document.querySelector("#nameB");
let denob = document.querySelector("#denoB");
let dispob = document.querySelector("#dispoB");
let priceb = document.querySelector("#priceB");
let imgb = document.querySelector("#imgB");

let insertBtn = document.querySelector("#insert");
let selectBtn = document.querySelector("#select");
let selectAllBtn = document.querySelector("#selectAll");
let updateBtn = document.querySelector("#update");
let deleteBtn = document.querySelector("#delete");

let articles= [];

const displayTable = () => {
    const tableauNode = articles.map((article) => {
        return createTable(article)
    });
    app2.append(...tableauNode)
}

const app2 = document.querySelector('tbody');

const createTable = (article) => {

const tr2 = document.createElement('tr');
const td = document.createElement('td');
const td2 = document.createElement('td');
const td3 = document.createElement('td');
const td4 = document.createElement('td');
const td5 = document.createElement('td');
const td6 = document.createElement('td');
const td7 = document.createElement('td');
const btnEdit = document.createElement('button');
const btnSupp = document.createElement('button');

td = article.id;
td2 = article.name;
td3 = article.denomnation;
td4 = article.dispo;
td5 = article.price;
btnEdit.classList.add('edit');
btnEdit.innerText = "Edit"
btnSupp.classList.add('delete');
btnSupp.innerText = "Delete";


tr2.append(td, td2, td3, td4, td5, td6, td7)
td6.appendChild(btnEdit);
td7.appendChild(btnSupp);
  
return tr2;

}  

// FUNCTION INSERT

function insertData() {
    set(ref(db,(menuB.value + "/") + idb.value), {
        denomination: nameb.value,
        description: denob.value,
        dispo: dispob.value,
        price: priceb.value,
        img: imgb.value
    })
        .then(() => {
            alert('data inserted')
        })
        .catch((error) => {
            alert('Error : ' + error)
        })
}
insertBtn.addEventListener('click', insertData)

// FUNCTION SELECT

function selectData() {
    const dbref = ref(db);

    get(child(dbref, (menuB.value + "/") + idb.value))
        .then((snapshot) => {
            if (snapshot.exists()) {
                nameb.value = snapshot.val().denomination;
                denob.value = snapshot.val().description;
                dispob.value = snapshot.val().dispo;
                priceb.value = snapshot.val().price;
                imgb.value = snapshot.val().img
            } else {
                alert('No User Found !!!')
            }
        })
        .catch((error) => {
            alert('Error :' + error)
        })
}

selectBtn.addEventListener('click', selectData)

// FUNCTION UPDATE

function updateData() {
    update(ref(db, (menuB.value + "/") + idb.value), {
        denomination: nameb.value,
        description: denob.value,
        dispo: dispob.value,
        price: priceb.value,
        img: imgb.value
    })
        .then(() => {
            alert('data updated')
        })
        .catch((error) => {
            alert('Error : ' + error)
        })
}

updateBtn.addEventListener('click', updateData)

// FUNCTION DELETE

function deleteData() {
    remove(ref(db, (menuB.value + "/") + idb.value), {
    })
        .then(() => {
            alert('data deleted')
        })
        .catch((error) => {
            alert('Error : ' + error)
        })
}

deleteBtn.addEventListener('click', deleteData)

// FUNCTION SELECTALL

function selectAllData() {
    const value = menub.value;
    console.log(value);
    const users = fetch('https://projet-ecommerce-grp2-default-rtdb.firebaseio.com/' + value +'.json')
        .then(async response => {
            try {
                const allMyUser = await response.json();
                console.log(allMyUser);
            } catch (e) {
                console.log(e);
            }
        })
}

selectAllBtn.addEventListener('click', selectAllData)

displayTable();
    
