import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import Axios from 'axios';

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

const form = document.querySelector('.form');
const searchInput = document.querySelector('.input-name');
const loader = document.querySelector('.loader');
const gallery = document.querySelector('.gallery');
const loadBtn = document.querySelector('.load-btn');
let page = 1;
let currentSearchQuery = '';
let totalHits = 0;

form.addEventListener('submit', getPhoto);

async function getPhoto(event) {
  event.preventDefault();

  const searchQuery = searchInput.value.trim();

  if (searchQuery === '') {
    showError('Please enter a search query');
    return;
  }

  if (searchQuery !== currentSearchQuery) {
    page = 1;
    currentSearchQuery = searchQuery;
  }

  loader.classList.add('visible');

  try {
    const response = await axios.get('/api/', {
      params: { q: searchQuery, page },
    });

    const data = response.data;
    totalHits = data.totalHits;
    renderPhotos(data.hits);
  } catch (error) {
    showError('Error fetching data');
    console.log('Error fetching data:', error);
  } finally {
    loader.classList.remove('visible');
  }
}

loadBtn.addEventListener('click', onLoadMoreClick);

async function onLoadMoreClick() {
  const searchQuery = searchInput.value.trim();

  loader.classList.add('visible');

  try {
    const response = await axios.get('/api/', {
      params: { q: searchQuery, page: page + 1 },
    });
    const data = response.data;
    renderPhotos(data.hits);
    page += 1;
  } catch (error) {
    showError('Error fetching more data');
    console.log('Error fetching more data:', error);
  } finally {
    loader.classList.remove('visible');
  }
}

function showError(message) {
  iziToast.show({
    title: 'Error',
    message,
    position: 'center', 
  });
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
        <img class="gallery-image" data-source="${largeImageURL}" src="${webformatURL}" alt="${tags}"></img>
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

function renderPhotos(photos) {
  gallery.innerHTML = ''; 

  if (photos.length === 0) {
    showError('Sorry, there are no images matching your search query. Please try again!');
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

  galleryLightbox.refresh();
  showLoadBtn();
}

function showLoadBtn() {
  if (page * 15 < totalHits && page <= Math.ceil(totalHits / 15)) {
    loadBtn.style.visibility = 'visible';
  } else {
    loadBtn.style.visibility = 'hidden';
    showError('Cannot visualize more images');
  }
}

searchInput.addEventListener('input', clearError);

function clearError() {
  const errorMessage = document.querySelector('.iziToast');
  if (errorMessage) {
    errorMessage.remove();
  }
}

form.addEventListener('submit', () => {
  clearError();
  searchInput.value = searchInput.value.trim(); 
});
