

let url = 'https://coffee.alexflipnote.dev/random.json';
let image = document.getElementById('image');

setInterval(async function () {
    fetch(url)
.then((response) => response.json())
.then((data) =>
    image.src=data.file

)
},1000)