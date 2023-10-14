import SimpleLightbox from 'simplelightbox';
import { galleryItems } from './gallery-items.js';

// Initialize SimpleLightbox
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

// You can also add more options to customize the behavior

console.log(galleryItems);
