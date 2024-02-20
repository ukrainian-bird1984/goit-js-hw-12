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

loader.classList.add('hidden');

const searchParams = {
    key: '42200022-9c7e7676f0f903944c054771a',
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 15,
    page: 1,
    q: '',
};

const searchInput = document.querySelector('.input-name');

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
        searchInput.value = ''; // Очистка поля пошуку
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
    searchInput.value = ''; // Очистка поля пошуку
});

btnElem.addEventListener('click', async () => {
    searchParams.page += 1;
    const images = await getPhotoByName();
    createGallery(images);
    checkBtnStatus();
    window.scrollBy({
        top: 465,
        behavior: 'smooth',
    });
    searchInput.value = ''; // Очистка поля пошуку
});

async function getPhotoByName() {
    const urlParams = new URLSearchParams(searchParams);
    try {
        const response = await axios.get(`https://pixabay.com/api/?${urlParams}`);
        return response.data;
    } catch (error) {
        console.log('Error fetching data:', error);
        iziToast.show({
            title: 'Error',
            message: 'Oops, something went wrong',
        });
        searchInput.value = ''; // Очистка поля пошуку
        return { hits: [] }; // Повертаємо пустий об'єкт для уникнення помилок при обробці hits.length
    }
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
        searchInput.value = ''; // Очистка поля пошуку
    }
}
