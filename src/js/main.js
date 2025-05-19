"use strict";

const inputSearch = document.querySelector(".js_inputSearch");
const buttonSerch = document.querySelector(".js_bntSerch");
const buttonReset = document.querySelector(".js_bntReset");
const seriesList = document.querySelector(".js_serieslist");

buttonSerch.addEventListener("click", () => {});

function requestApi(name) {
  fetch(`https://api.jikan.moe/v4/anime?q=${name}`)
    .then((response) => response.json())
    .then((data) => renderData(data.data));
}
function renderData(data) {
  console.log(data);
}
requestApi();
