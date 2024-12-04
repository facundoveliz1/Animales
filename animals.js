let main = document.querySelector("main");

let animal = JSON.parse(localStorage.getItem("clickedAnimal"));

main.innerHTML = 
    `<article>
        <h1>${animal.titulo}</h1>
        <img src="${animal.src2}" alt="${animal.alt}">
        <h3>${animal.descripcion}</h3>
        <p>${animal.texto}</p>
    </article>`;