// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const listE = document.querySelector('.gallery');
const photoM = createGalleryItem(galleryItems);

function createGalleryItem(e) {
  return e
    .map(({ preview, original, description }) => {
      return `<a class='gallery__link' href="${preview}">
            <img class='gallery__image' src = ${original} alt = ${description} /> 
            </a>`;
    })
    .join('');
}
listE.insertAdjacentHTML('beforeend', photoM);
const galleryH = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionsDelay: 250,
});
galleryH.on('show.simplelightbox');
