import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const ul = document.querySelector(".gallery");

function createList(items) {
  const listItems = items.map((item) => {
    const li = document.createElement("li");
    li.classList.add("gallery__item");

    const a = document.createElement("a");
    a.classList.add("gallery__link");
    a.href = item.original;

    const img = document.createElement("img");
    img.classList.add("gallery__image");
    img.src = item.preview;
    img.alt = item.description;
    img.setAttribute("data-source", item.original);

    a.appendChild(img);
    li.appendChild(a);

    return li;
  });

  ul.append(...listItems);
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
