// Un affichage dans la console pour voir la structure d'une produit
console.log(produits[0]);
// Générer des articles
let main = document.getElementById("main");
// Une simple boucle qui itère sur les produits
for (let prod of produits){
    main.innerHTML += `<article>
                            <h2> ${prod.title} </h2>
                            <img class="image" src="${prod.thumbnail}" alt="">
                            <p>Prix : ${prod.price}€</p>
                            <a href="article.html?id=${prod.id}">Détails</a>
                        </article>`;
}
