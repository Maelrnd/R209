// À vous de jouer !

const currentUrl = new URL(window.location.href);
const params = new URLSearchParams(currentUrl.search);
const idParam = params.get('id');
console.log(idParam)
fetch(`https://637d41d916c1b892ebca9a5a.mockapi.io/api/discs/${idParam}`)
    .then(reponse => reponse.json())
    .then(data => {
        document.getElementById("cover").innerHTML = `<img src="${data.cover_url}" alt="${data.title}">`
        document.getElementById("artist").textContent = data.artist
        document.getElementById("year").textContent = data.year
        document.getElementById("price").textContent = data.price
        document.title= data.title
    })