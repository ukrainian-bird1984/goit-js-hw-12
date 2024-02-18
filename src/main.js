import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import Axios from 'axios';

const form = document.querySelector('.form');
const searchInput = document.querySelector('.input-name');
const loader = document.querySelector('.loader');
const gallery = document.querySelector('.gallery');
const loadBtn = document.querySelector('.load-btn');
let currentSearchQuery = '';
let totalResult = 0;
let totalHits = 0;
let page = 1;

const axios = Axios.create({
  baseURL: 'https://pixabay.com',
  params: {
    key: '42310325-d8e2b88bd4f4d7db9639050a5',
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 15,
    page: 1,
  },
});

let galleryLightbox = new SimpleLightbox('.image-link', {
  captionsData: 'alt',
  captionDelay: 250,
});

form.addEventListener('submit', getPhoto);
loadBtn.addEventListener('click', onLoadMoreClick);

async function getPhoto(event) {
  event.preventDefault();

  const searchQuery = searchInput.value.trim();

  if (searchQuery === '') {
    iziToast.show({
      title: 'Error',
      message: 'Please enter a search query',
    });
    return;
  }

  gallery.innerHTML = '';
  page = 1;
  totalResult = 0;
  currentSearchQuery = searchQuery; // Зберігаємо поточний пошуковий запит
  hideLoadBtn();
  loader.classList.add('visible');

  try {
    const response = await axios.get('/api/', {
      params: { q: searchQuery },
    });
    const data = response.data;
    totalHits = data.totalHits;
    totalResult = renderPhotos(data.hits, totalHits, totalResult);
  } catch (error) {
    console.log('Error fetching data:', error);
    iziToast.show({
      title: 'Error',
      message: 'Oops, something went wrong',
    });
  } finally {
    loader.classList.remove('visible');
  }
}

function renderPhotos(photos) {
  if (photos.length === 0) {
    iziToast.show({
      message:
        'Sorry, there are no images matching your search query. Please try again!',
      backgroundColor: 'red',
      messageColor: 'white',
      messageSize: '25',
    });
    return;
  }

  photos.forEach(photo => {
    const {
      webformatURL,
      largeImageURL,
      tags,
      likes,
      views,
      comments,
      downloads,
    } = photo;
    const photoElement = makeMarkup(
      webformatURL,
      largeImageURL,
      tags,
      likes,
      views,
      comments,
      downloads
    );
    gallery.insertAdjacentHTML('beforeend', photoElement);
  });

  totalResult += photos.length;

  galleryLightbox.refresh();

  isLoadMore(totalResult, totalHits);
  return totalResult;
}

function makeMarkup(
  webformatURL,
  largeImageURL,
  tags,
  likes,
  views,
  comments,
  downloads
) {
  return `<li class="photo">
  <div class="photo-card">
    <a class="image-link" data-lightbox="image" href="${largeImageURL}">
    <img class="gallery-image" data-source="${largeImageURL}"  src="${webformatURL}" alt="${tags}"></img>
    </a>
    </div>
      <div class="description">
        <p class="description-item"> Likes ${likes}</p>
        <p class="description-item"> Views ${views}</p>
        <p class="description-item"> Comments ${comments}</p>
        <p class="description-item"> Downloads ${downloads}</p>
    </div>
  </li>`;
}

async function onLoadMoreClick() {
  const searchQuery = searchInput.value.trim();

  if (totalResult >= totalHits || totalResult >= 29) {
    if (currentSearchQuery === '') {
      iziToast.show({
        message: "We're sorry, but you've reached the end of search results.",
        backgroundColor: '#125487',
        messageColor: 'white',
        messageSize: '25',
      });
    } else {
      iziToast.show({
        message: "Cannot load more images. You've reached the limit.",
        backgroundColor: '#125487',
        messageColor: 'white',
        messageSize: '25',
      });
    }
    hideLoadBtn();
    return;
  }

  loader.classList.add('visible');

  try {
    const response = await axios.get('/api/', {
      params: { q: searchQuery, page: (page += 1) },
    });
    const data = response.data;

    totalHits = data.totalHits;
    totalResult = renderPhotos(data.hits, totalHits, totalResult);
    smoothScrollToNextGallery();
  } catch (error) {
    console.log('Error fetching data:', error);
    iziToast.show({
      title: 'Error',
      message: 'Oops, something went wrong',
    });
  } finally {
    loader
