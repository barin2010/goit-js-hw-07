import { galleryItems } from "./gallery-items.js";

const gallery = document.querySelector(".gallery");

const galleryMarkup = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </li>`
  )
  .join("");

gallery.innerHTML = galleryMarkup;

gallery.addEventListener("click", (event) => {
  event.preventDefault();

  if (event.target.classList.contains("gallery__image")) {
    const instance = basicLightbox.create(`
      <img width="800" height="600" src="${event.target.dataset.source}">
    `);

    const closeOnEscape = (event) => {
      if (event.key === "Escape") {
        instance.close();
        window.removeEventListener("keyup", closeOnEscape);
      }
    };

    instance.on("show", () => {
      window.addEventListener("keyup", closeOnEscape);
    });

    instance.on("close", () => {
      window.removeEventListener("keyup", closeOnEscape);
    });

    instance.show();
  }
});
