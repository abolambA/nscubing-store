import { initializeApp } from "https://www.gstatic.com/firebasejs/8.6.8/firebase-app.js"
import { getAuth, createUserWithEmailAndPassword } from "fhttps://www.gstatic.com/firebasejs/8.6.8/firebase-auth.js";
const firebaseConfig = {
    apiKey: "AIzaSyChFj4J2vmqyLWDujNPm9jv9tmm2kesci0",
    authDomain: "nscubingstore.firebaseapp.com",
    databaseURL: "https://nscubingstore-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "nscubingstore",
    storageBucket: "nscubingstore.appspot.com",
    messagingSenderId: "570487937616",
    appId: "1:570487937616:web:45a742b3d20b6814c94f55",
    measurementId: "G-QLF91G0X2X"
};

const app = initializeApp(firebaseConfig);
//submit button 

const submit = document.getElementById('submit');
submit.addEventListener("click", function () {
    event.preventDefault()

    //inputs
    const name = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;


    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            alert("Account Created !")
            window.location.href = "index.html";
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage)
            // ..
        });

})


