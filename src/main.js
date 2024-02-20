import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import axios from 'axios';

const summary = {
    form: document.querySelector('.form'),
    gallery: document.querySelector('.gallery'),
    loader: document.querySelector('.loader'),
    btnElem: document.querySelector('.btn'),
};

const { form, gallery, loader, btnElem } = summary;
let page = 1; // Add page variable

loader.classList.add('hidden');
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import Axios from 'axios';

const searchParams = {
    key: '42200022-9c7e7676f0f903944c054771a',
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
    q: '',
};

const searchInput = document.querySelector('.input-name');
  },
});

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const inputValue = e.target.elements.input.value.trim();

    if (!inputValue) {
        iziToast.show({
            message: 'Please enter a valid search query.',
            backgroundColor: '#125487',
            messageColor: 'white',
            messageSize: '25',
        });
        return;
    }

    searchParams.q = inputValue;
    gallery.innerHTML = '';
    loader.classList.remove('hidden');

    searchParams.page = 1;
    const images = await getPhotoByName();
    searchParams.totalResults = images.totalHits;
    createGallery(images);
    checkBtnStatus();
    e.target.reset();
    searchInput.value = '';
let galleryLightbox = new SimpleLightbox('.image-link', {
  captionsData: 'alt',
  captionDelay: 250,
});

btnElem.addEventListener('click', async () => {
    searchParams.page += 1;
    const images = await getPhotoByName();
    createGallery(images);
    checkBtnStatus();
    window.scrollBy({
        top: 465,
        behavior: 'smooth',
async function getPhoto(event) {
  event.preventDefault();

  const searchQuery = searchInput.value.trim();

  if (searchQuery === '') {
    iziToast.show({
      title: 'Error',
      message: 'Please enter a search query',
    });
    searchInput.value = '';
});
    return;
  }

  gallery.innerHTML = '';
  page = 1;
  totalResult = 0;
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

function renderPhotos(photos, totalHits, totalResult) {
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
  hideLoadBtn();
  loader.classList.add('visible');

  const searchQuery = searchInput.value.trim();

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
    loader.classList.remove('visible');
  }
}

function isLoadMore(totalResult, totalHits) {
  if (totalResult >= totalHits) {
    iziToast.show({
      message: "We're sorry, but you've reached the end of search results.",
      backgroundColor: '#125487',
      messageColor: 'white',
      messageSize: '25',
    });
    hideLoadBtn();
    return;
  } else {
    showLoadBtn();
  }
}

function smoothScrollToNextGallery() {
  const galleryItemHeight = document
    .querySelector('.photo')
    .getBoundingClientRect().height;
  window.scrollBy({ top: galleryItemHeight * 2, behavior: 'smooth' });
}

async function getPhotoByName() {
    const urlParams = new URLSearchParams(searchParams);
    const response = await axios.get(`https://pixabay.com/api/?${urlParams}`);
    return response.data;
function showLoadBtn() {
  loadBtn.style.visibility = 'visible';
}

function createGallery(images) {
    if (images.hits.length === 0) {
        iziToast.show({
            message: 'Sorry, there are no images matching your search query. Please try again!',
            backgroundColor: '#125487',
            messageColor: 'white',
            messageSize: '25',
        });

        btnElem.classList.add('hidden');
    } else {
        const link = images.hits
            .map(
                (image) => `
                    <a class="gallery-link" href="${image.largeImageURL}">
                        <img class="gallery-image" src="${image.webformatURL}" alt="${image.tags}">
                    </a>
                    <div class="img-content">
                        <div>
                            <h3>Likes</h3>
                            <p>${image.likes}</p>
                        </div>
                        <div>
                            <h3>Views</h3>
                            <p>${image.views}</p>
                        </div>
                        <div>
                            <h3>Comments</h3>
                            <p>${image.comments}</p>
                        </div>
                        <div>
                            <h3>Downloads</h3>
                            <p>${image.downloads}</p>
                        </div>
                    </div>
                `
            )
            .join('');
        gallery.insertAdjacentHTML('beforeend', link);
        btnElem.classList.remove('hidden');
    }

    let lightBox = new SimpleLightbox;

    const searchQuery = searchInput.value.trim();

    if (searchQuery === '') {
        iziToast.show({
            title: 'Error',
            message: 'Please enter a search query',
        });
        return;
    }

    try {
        const response = await axios.get('/api/', {
          params: { q: searchQuery, page: page }, // Use the page variable
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
        loader.classList.remove('visible');
    }
function hideLoadBtn() {
  loadBtn.style.visibility = 'hidden';
}

searchInput.value = '';
form.addEventListener('submit', getPhoto);
loadBtn.addEventListener('click', onLoadMoreClick);