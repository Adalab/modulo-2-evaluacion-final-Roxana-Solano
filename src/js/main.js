"use strict";

const buttonSerch = document.querySelector(".js_bntSerch");
const buttonReset = document.querySelector(".js_bntReset");
const seriesList = document.querySelector(".js_serieslist");
const inputSearch = document.querySelector(".js_inputSearch");
const seriesFavorite = document.querySelector(".js_seriesfavorite");
const favorite = [];

//escucho el click del boton buscar
buttonSerch.addEventListener("click", (ev) => {
  ev.preventDefault();
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

  for (const anime of data) {
    const title = anime.title;
    const image = anime.images.jpg.image_url;
    const id = anime.mal_id;
    draw(image, title, id, seriesList);
    addEventSerie(image, title, id, seriesFavorite);
  }
}

function draw(image, title, id, container) {
  const serie = `<li id="serie-${id}">
                    <h2>${title}</h2>
                    <img src="${image}" alt="${title}" width="150">
                </li>`;
  //innerHTMl del LI seriesList.innerHTML = seriesList.innerHTML + serie
  container.insertAdjacentHTML("beforeend", serie);
}

function addEventSerie(image, title, id, seriesFavorite) {
  const item = document.querySelector(`#serie-${id}`);
  item.addEventListener("click", (ev) => {
    ev.preventDefault();
    draw(image, title, id, seriesFavorite);
  });
}

buttonReset.addEventListener("click", (ev) => {
  ev.preventDefault();
  seriesList.innerHTML = "";
  inputSearch.innerHTML = "";
});
