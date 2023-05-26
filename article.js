// Réccupère l'id du produit dans l'url
// l'id se trouve dans value
let parms = location.search.substring(1).split("&");
let temp = parms[0].split("=");  // Les autres varaibles se trouvent éventuellement en params[i]
let variable = decodeURI(temp[0]);
let value = decodeURI(temp[1]);
// --------------------------------------------
const prod = produits[value-1]
let main = document.getElementById("main");
main.innerHTML += `<article>
        <h2> ${prod.title}</h2>
        <p>${prod.description}</p>
        <p id="prix">${prod.price} €</p>
        <div id="gallerie"></div>
        <button id="btn"> J'achète !!</button>
    </article>`; 

// Ici on enregistre le produit dans la mémoire du navigateur    
let gal = document.getElementById("gallerie");
gal.innerHTML += `<img class="image" src="${prod.images[0]}" alt=""></img>`

let btn = document.getElementById("btn");
btn.addEventListener("click", (e) => {
    alert("Aticle ajouté au panier");
    sessionStorage.setItem("article", value);
})

