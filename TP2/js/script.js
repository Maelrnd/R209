// À vous de jouer !

const listeAlbums = document.getElementById("items");
fetch("https://637d41d916c1b892ebca9a5a.mockapi.io/api/discs")
    .then(reponse => reponse.json())
    .then(data => {
        const res = data.filter(item => { return item.id !== "7"});
        console.table(res)
        res.forEach(album => {
            listeAlbums.innerHTML += `
                <a href="./product.html?id=${album.id}">
                    <article>
                        <img src="${album.cover_url}" alt="${album.title}">
                        <h3 class="productName">${album.title}</h3>
                        <p class="productDescription">${album.price} €</p>
                    </article>
                </a>
            `

        })
    })
