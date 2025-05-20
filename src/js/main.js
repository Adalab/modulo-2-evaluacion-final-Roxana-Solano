"use strict";

const buttonSerch = document.querySelector(".js_bntSerch");
const buttonReset = document.querySelector(".js_bntReset");
const seriesList = document.querySelector(".js_serieslist");

//escucho el click del boton buscar
buttonSerch.addEventListener("click", () => {
  const inputSearch = document.querySelector(".js_inputSearch");
  const valueInputSearch = inputSearch.value;
  if (valueInputSearch === "") {
    seriesList.innerHTML = `<p> No hay resultados </p>`;
  } else {
    requestApi(valueInputSearch);
  }
});

function requestApi(name) {
  fetch(`https://api.jikan.moe/v4/anime?q=${name}`)
    .then((response) => response.json())
    .then((data) => renderData(data.data));
}

function renderData(data) {
  seriesList.innerHTML = ""; //limpia la lista
  console.log(data);
  //haces el for adentro del for llamas a draw
  for (const anime of data) {
    const title = anime.title;
    const image = anime.images.jpg.image_url;
    draw(image, title);
  }
}

function draw(image, title) {
  const serie = `<li>
                    <h2>${title}</h2>
                    <img src="${image}" alt="${title}" width="150">
                </li>`;
  //innerHTMl del LI seriesList.innerHTML = seriesList.innerHTML + serie
  seriesList.innerHTML += serie;
}
