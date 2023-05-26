
// On réccupère le produit dans la mémoire du navigateur
let truc =  sessionStorage.getItem('article');


let main = document.getElementById("main");
main.innerHTML += `<p>Vous avez acheté l'article ${truc}</p>`