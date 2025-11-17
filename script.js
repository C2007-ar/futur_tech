const scriptURL = "https://script.google.com/macros/s/AKfycbwDHFbzVwx4v5sD7trp2MHS5fbBHHkd2jlw1Kosyu4YxCMIoEmcufGbEzh81hhuyjV2-A/exec";
const form = document.getElementById("inscriptionForm");


form.addEventListener("submit", function (e) {
e.preventDefault();


const domaine = document.getElementById("domaine").value;


fetch(scriptURL, { method: "POST", body: new FormData(form) })
.then(() => {
if (domaine === "robotique") {
window.location.href = "robotique.html";
} else if (domaine === "devweb") {
window.location.href = "devweb.html";
}
})
.catch((error) => alert("Erreur: " + error.message));
});
