import { db } from "./app.js";
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

window.book = async function(){

let name = document.getElementById("name").value;
let phone = document.getElementById("phone").value;
let room = document.getElementById("room").value;
let date = document.getElementById("date").value;
let days = document.getElementById("days").value;

if(!name || !phone || !date || !days){
alert("Fill all fields");
return;
}

await addDoc(collection(db,"bookings"),{
name,phone,room,date,days,time:new Date()
});

document.getElementById("result").innerText =
"Booking saved ✔️";
}
