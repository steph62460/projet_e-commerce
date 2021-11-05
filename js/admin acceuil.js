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
  appId: "1:134275146361:web:7061a84c95240bb203eaa8",
};

const app3 = initializeApp(firebaseConfig);

import {
  getDatabase,
  get,
  ref,
  set,
  child,
  update,
  remove,
} from "https://www.gstatic.com/firebasejs/9.1.3/firebase-database.js";

const db = getDatabase();
let menuB = document.querySelector("#menuB");
let IdB = document.querySelector("#IdB");
let nameB = document.querySelector("#nameB");
let marqueB = document.querySelector("#marqueB");
let Dsp = document.querySelector("#Dsp");
let prixB = document.querySelector("#prixB");
let Img = document.querySelector("#Img");

let insertBtn = document.querySelector("#insert");
let selectBtn = document.querySelector("#select");
let selectAllBtn = document.querySelector("#selectAll");
let updateBtn = document.querySelector("#update");
// let deleteBtn = document.querySelector("#delete");

function insertData() {
  set(ref(db, "promotion/" + IdB.value), {
    id: IdB.value,
    denomination: nameB.value,
    description: marqueB.value,
    dispo: Dsp.value,
    price: prixB.value,
    img: Img.value,
  })
    .then(() => {
      alert("data inserted");
    })
    .catch((error) => {
      alert("Error : " + error);
    });
}
insertBtn.addEventListener("click", insertData);

function selectData() {
  const bbref = ref(db);

  get(child(bbref, "promotion/" + IdB.value))
    .then((snapshot) => {
      if (snapshot.exists()) {
        IdB.value = snapshot.val().id;
        nameB.value = snapshot.val().denomination;
        marqueB.value = snapshot.val().description;
        Dsp.value = snapshot.val().dispo;
        prixB.value = snapshot.val().price;
        Img.value = snapshot.val().img;
      } else {
        alert("No User Found !!!");
      }
    })
    .catch((error) => {
      alert("Error : " + error);
    });
}
selectBtn.addEventListener("click", selectData);

//function update
function updateData() {
  update(ref(db, "promotion/" + IdB.value), {
    id: IdB.value,
    denomination: nameB.value,
    description: marqueB.value,
    dispo: Dsp.value,
    price: prixB.value,
    img: Img.value,
  })
    .then(() => {
      alert("data updated");
    })
    .catch((error) => {
      alert("Error : " + error);
    });
}
// updateBtn.addEventListener("click", updateData);


let allMyUser = [];

//function selectALL
function selectAllData() {
  const users = fetch(
    "https://projet-ecommerce-grp2-default-rtdb.firebaseio.com/promotion.json"
  ).then(async (response) => {
    try {
      const allMyUser = await response.json();
      console.log(allMyUser);
      tab = allMyUser;
      displayArticle();
    } catch (e) {
      console.log(e);
    }
  });
}
selectAllBtn.addEventListener("click", selectAllData);




// ----------------------------------------------/-premier tableau/------------------------------------------------------------------//

let tab = [];

const app = document.querySelector(".container");

const displayArticle = () => {
  const users = fetch(
    "https://projet-ecommerce-grp2-default-rtdb.firebaseio.com/promotion.json"
  ).then(async (response) => {
    try {
      tab = await response.json();
      console.log(tab);
      const articleNode = tab.map((app) => {
        return createTable(app);
      });
       app.append(...articleNode);
    } catch (e) {
      console.log(e);
    }  
  });
};

const createTable = (tab) => {
  const table = document.createElement("table");
  const thead = document.createElement("thead");
  const tr = document.createElement("tr");
  const th = document.createElement("th");
  const th1 = document.createElement("th");
  const th2 = document.createElement("th");
  const th3 = document.createElement("th");
  const th4 = document.createElement("th");

  table.classList.add("table");
  th.innerText = "id";
  th1.innerText = "Reférence";
  th2.innerText = "Description";
  th3.innerText = "Dispo";
  th4.innerText = "prix";


  const tbody = document.createElement("tbody");
  const tr1 = document.createElement("tr");
  const td = document.createElement("td");
  const td1 = document.createElement("td");
  const td2 = document.createElement("td");
  const td3 = document.createElement("td");
  const td4 = document.createElement("td");

  td.innerText  = tab.id;
  td1.innerText = tab.denomination;
  td2.innerText = tab.description;
  td3.innerText = tab.dispo;
  td4.innerText = tab.price;

  const tdBtnUpdate = document.createElement("update");
  tdBtnUpdate.innerText = "UPDATE";
  tdBtnUpdate.style.backgroundColor = "cornflowerblue";
  tdBtnUpdate.style.boxShadow = "1px 0px 20px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.24)";
  tdBtnUpdate.style.borderRadius = " 5px solid black";
  tdBtnUpdate.addEventListener('click', updateData);


  table.append(thead, tr, th,th1,th2,th3,th4, tbody);
  tbody.append(tr1, td, td1, td2, td3, td4, tdBtnUpdate);
  // div.append(table, tbody);

  return table;
};

function selectData2() {
  const bbref = ref(db);

  get(child(bbref, "promotion/" + IdB.value))
    .then((snapshot) => {
      if (snapshot.exists()) {
        IdB.value = snapshot.val().id;
        nameB.value = snapshot.val().denomination;
        marqueB.value = snapshot.val().description;
        Dsp.value = snapshot.val().dispo;
        prixB.value = snapshot.val().price;
        Img.value = snapshot.val().img;
      } else {
        alert("No User Found !!!");
      }
    })
    .catch((error) => {
      alert("Error : " + error);
    });
}
selectBtn.addEventListener("click", selectData2);


displayArticle();


// ------------------------------------------/deuxieme tableau/---------------------------------------------------------//

const displayArticle2 = () => {
  const users = fetch(
    "https://projet-ecommerce-grp2-default-rtdb.firebaseio.com/nouveautes.json"
  ).then(async (response) => {
    try {
      tab = await response.json();
      console.log(tab);
      const articleNode = tab.map((app) => {
        return createTable2(app);
      });
       app.append(...articleNode);
    } catch (e) {
      console.log(e);
    }  
  });
};

const createTable2 = (tab2) => {
  const table = document.createElement("table");
  const thead = document.createElement("thead");
  const tr = document.createElement("tr");
  const th = document.createElement("th");
  const th1 = document.createElement("th");
  const th2 = document.createElement("th");
  const th3 = document.createElement("th");
  const th4 = document.createElement("th");

  table.classList.add("table");
  th.innerText = "id";
  th1.innerText = "Reférence";
  th2.innerText = "Description";
  th3.innerText = "Dispo";
  th4.innerText = "prix";


  const tbody = document.createElement("tbody");
  const tr1 = document.createElement("tr");
  const td = document.createElement("td");
  const td1 = document.createElement("td");
  const td2 = document.createElement("td");
  const td3 = document.createElement("td");
  const td4 = document.createElement("td");

  td.innerText  = tab2.id;
  td1.innerText = tab2.denomination;
  td2.innerText = tab2.description;
  td3.innerText = tab2.dispo;
  td4.innerText = tab2.price;

  const tdBtnUpdate = document.createElement("update");
  tdBtnUpdate.innerText = "UPDATE";
  tdBtnUpdate.style.backgroundColor = "cornflowerblue";
  tdBtnUpdate.style.boxShadow = "1px 0px 20px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.24)";
  tdBtnUpdate.style.borderRadius = " 5px solid black";
  tdBtnUpdate.addEventListener('click', updateData);


  table.append(thead, tr, th,th1,th2,th3,th4, tbody);
  tbody.append(tr1, td, td1, td2, td3, td4, tdBtnUpdate);
  // div.append(table, tbody);

  return table;
};

function selectData3() {
  const bbref = ref(db);

  get(child(bbref, "nouveautes/" + IdB.value))
    .then((snapshot) => {
      if (snapshot.exists()) {
        IdB.value = snapshot.val().id;
        nameB.value = snapshot.val().denomination;
        marqueB.value = snapshot.val().description;
        Dsp.value = snapshot.val().dispo;
        prixB.value = snapshot.val().price;
        Img.value = snapshot.val().img;
      } else {
        alert("No User Found !!!");
      }
    })
    .catch((error) => {
      alert("Error : " + error);
    });
}
selectBtn.addEventListener("click", selectData3);

displayArticle2();