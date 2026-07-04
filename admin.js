import { auth, db } from "./app.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { collection, getDocs } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

window.login = async function(){

let email = document.getElementById("user").value;
let pass = document.getElementById("pass").value;

try{
await signInWithEmailAndPassword(auth,email,pass);
document.getElementById("panel").style.display="block";
alert("Login success");
}catch(e){
alert("Wrong login");
}
}

window.load = async function(){

let snap = await getDocs(collection(db,"bookings"));

let html="";

snap.forEach(doc=>{
let d = doc.data();

html += `
<div class="card">
<h3>${d.name}</h3>
<p>${d.room}</p>
<p>${d.date}</p>
</div>
`;
});

document.getElementById("panel").innerHTML = html;
}
