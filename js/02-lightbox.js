import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<li class="gallery__item"><a class="gallery__link" href="${original}"><img class="gallery__image" src="${preview}" alt="${description}"/></a></li>`
  )
  .join("");

const ul = document.querySelector(".gallery");
ul.insertAdjacentHTML("beforeend", gallery);

console.log(ul);

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
  animationSpeed: 300,
});

// Подключение ( https://simplelightbox.com/ ) библиотеки SimpleLightbox
// Подключение через https://cdnjs.com/libraries/simplelightbox (два файла: js перед закрывающимся тегом </body> и css перед файлом стилей styles.css)
