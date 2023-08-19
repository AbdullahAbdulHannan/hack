import {app} from '../firebase.mjs'
import { getAuth,createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";
const auth=getAuth(app)
  let email=document.getElementById('email').value
  let password=document.getElementById('password').value
  let btn=document.getElementById('btn')
  btn.addEventListener('click',()=>{createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  })});