
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
let menuB = document.querySelector("#menuB")
let IdB = document.querySelector("#IdB");
let nameB = document.querySelector("#nameB");
let marqueB = document.querySelector("#marqueB");
let Dsp = document.querySelector("#Dsp")
let prixB = document.querySelector("#prixB");
let Img = document.querySelector("#Img");



let insertBtn = document.querySelector("#insert");
let selectBtn = document.querySelector("#select");
let selectAllBtn = document.querySelector("#selectAll");
let updateBtn = document.querySelector("#update");
let deleteBtn = document.querySelector("#delete");

function insertData() {
    set(ref(db, "promotion/" + IdB.value), {
      menuB: menuB.value,
      nameB: nameB.value,
      marqueB: marqueB.value,
      Dsp: Dsp.value,
      prixB: prixB.value,
      Img: Img.value,
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
          menuB.value = snapshot.val().menuB;
          nameB.value = snapshot.val().nameB;
          marqueB.value = snapshot.val().marqueB;
          Dsp.value = snapshot.val().Dsp;
          prixB.value= snapshot.val().prixB;
          Img.value = snapshot.val().Img;

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
      menuB: menuB.value,
      nameB: nameB.value,
      marqueB: marqueB.value,
      Dsp: Dsp.value,
      prixB: prixB.value,
      Img: Img.value,
    })
      .then(() => {
        alert("data updated");
      })
      .catch((error) => {
        alert("Error : " + error);
      });
  }
  updateBtn.addEventListener("click", updateData);

  //function delete
  function deleteData() {
    remove(ref(db, "promotion/" + IdB.value))
      .then(() => {
        alert("data deleted");
      })
      .catch((error) => {
        alert("Error : " + error);
      });
  }
  deleteBtn.addEventListener("click", deleteData);

  //function selectALL
  function selectAllData() {
    const users = fetch(
      "https://projet-ecommerce-grp2-default-rtdb.firebaseio.com/'+ value +'.json"
    ).then(async (response) => {
      try {
        const allMyUser = await response.json();
        console.log(allMyUser);
      } catch (e) {
        console.log(e);
      }
    });
  }
  selectAllBtn.addEventListener("click", selectAllData);