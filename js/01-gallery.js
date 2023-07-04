import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const ul = document.querySelector(".gallery");

//
// Через append
//

// function createList(items) {
//   const listItems = items.map((item) => {
//     const li = document.createElement("li");
//     li.classList.add("gallery__item");

//     const a = document.createElement("a");
//     a.classList.add("gallery__link");
//     a.href = item.original;

//     const img = document.createElement("img");
//     img.classList.add("gallery__image");
//     img.src = item.preview;
//     img.alt = item.description;
//     img.setAttribute("data-source", item.original);

//     a.appendChild(img);
//     li.appendChild(a);

//     return li;
//   });

//   ul.append(...listItems);
// }

//
// Черкз innderHTML
//
// function createList(items) {
//   const listHTML = items
//     .map(
//       (item) =>
//         `<li class="gallery__item">
//           <a class="gallery__link" href="${item.original}">
//             <img class="gallery__image" src="${item.preview}" alt="${item.description}" data-source="${item.original}">
//           </a>
//         </li>`
//     )
//     .join("");

//   ul.innerHTML = listHTML;
// }

// createList(galleryItems);

//
//
// Через insertAdjacentHTML

function createList(items) {
  const listHTML = items
    .map(
      (item) =>
        `<li class="gallery__item">
          <a class="gallery__link" href="${item.original}">
            <img class="gallery__image" src="${item.preview}" alt="${item.description}" data-source="${item.original}">
          </a>
        </li>`
    )
    .join("");

  ul.insertAdjacentHTML("beforeend", listHTML);
}

createList(galleryItems);

//
//
// Без закрытия кнопкой Escape

// ul.addEventListener("click", (e) => {
//   e.preventDefault();
//   if (e.target.nodeName !== "IMG") {
//     return;
//   }

//   {
//     basicLightbox
//       .create(
//         `
//         <img src="${e.target.dataset.source}">
//       `
//       )
//       .show();
//   }
// });

//
//
//
ul.addEventListener("click", (e) => {
  e.preventDefault();

  if (e.target.nodeName !== "IMG") {
    return;
  } else {
    const imageSource = e.target.dataset.source;

    const modal = basicLightbox.create(`
      <img src="${imageSource}" width="800" height="600">
    `);

    modal.show();

    const closeModal = () => {
      modal.close();
      document.removeEventListener("keydown", handleKeyDown);
    };

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    modal.element().addEventListener("click", closeModal);
    document.addEventListener("keydown", handleKeyDown);
  }
});

// Подключение ( https://basiclightbox.electerious.com/ ) basic lightbox библиотеки.
// Подключить два файла https://www.jsdelivr.com/package/npm/basiclightbox?path=dist (js перед закрывающимся тегом </body> и css перед файлом стилей styles.css)
