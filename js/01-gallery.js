import * as basicLightbox from 'basiclightbox'
import { galleryItems } from './gallery-items.js';

const gallery = document.querySelector('.gallery');

gallery.innerHTML = galleryItems
  .map(({ preview, original, description }) => {
    return `
      <li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </li>
    `;
  })
  .join('');

gallery.addEventListener('click', (event) => {
  event.preventDefault();
  if (event.target.classList.contains('gallery__image')) {
    const instance = basicLightbox.create(`
      <img width="800" height="600" src="${event.target.dataset.source}">
    `);
    instance.show();
  }
});