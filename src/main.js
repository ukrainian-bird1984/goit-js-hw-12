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

form.addEventListener('submit', getPhoto);

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

  loader.classList.add('visible');

  try {
    const response = await axios.get('/api/', {
      params: { q: searchQuery, page },
    });
    const data = response.data;
    renderPhotos(data.hits);
  } catch (error) {
    iziToast.error({
      title: 'Error fetching data',
      message: 'An error occurred while fetching data. Please try again later.',
    });
  } finally {
    loader.classList.remove('visible');
  }
}

loadBtn.addEventListener('click', onLoadMoreClick);

async function onLoadMoreClick() {
  const searchQuery = currentSearchQuery;

  loader.classList.add('visible');

  try {
    const response = await axios.get('/api/', {
      params: { q: searchQuery, page: ++page },
    });
    const data = response.data;
    renderPhotos(data.hits);
  } catch (error) {
    iziToast.error({
      title: 'Error fetching data',
      message: 'An error occurred while fetching data. Please try again later.',
    });
  } finally {
    loader.classList.remove('visible');
  }
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

  resetForm();

  if (photos.length === 0 && page === 1) {
    iziToast.show({
      message:
        'Sorry, there are no images matching your search query. Please try again!',
      backgroundColor: 'red',
      messageColor: 'white',
      messageSize: '25',
    });
    loadBtn.style.visibility = 'hidden';
  } else {
    loadBtn.style.visibility = 'visible';
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
}

function resetForm() {
  form.reset();
}

loadBtn.style.visibility = 'hidden';

const totalPages = Math.ceil(images.totalHits / perPage);

if (currentPage >= totalPages) {
  loadMoreBtn.style.display = 'none';
  return iziToast.info({
    position: 'topRight',
    message: "We're sorry, but you've reached the end of search results.",
  });
} else {
  loadMoreBtn.style.display = 'block';
}
