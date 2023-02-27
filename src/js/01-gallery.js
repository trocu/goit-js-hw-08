import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const galleryList = document.querySelector('.gallery');
const galleryMarkup = galleryItems
  .map(
    image =>
      `<a class="gallery__item" href="${image.original}"><img class="gallery__image" src="${image.preview}" alt="${image.description}" /></a>`
  )
  .join('');

galleryList.insertAdjacentHTML('afterbegin', galleryMarkup);

let lightbox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
});
