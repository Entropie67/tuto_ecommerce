// Réccupère l'id du produit dans l'url
// l'id se trouve dans value
let parms = location.search.substring(1).split("&");
let temp = parms[0].split("=");  // Les autres varaibles se trouvent éventuellement en params[i]
let variable = decodeURI(temp[0]);
let value = decodeURI(temp[1]);
// --------------------------------------------

let main = document.getElementById("main");
main.innerHTML += `<h2> Article ${value}</h2>
    <p>Voici le détail de l'article</p>
    <button id="btn"> J'achète !!</button>`; 

// Ici on enregistre le produit dans la mémoire du navigateur    
let btn = document.getElementById("btn");
btn.addEventListener("click", (e) => {
    alert("Aticle ajouté au panier");
    sessionStorage.setItem("article", value);
})

