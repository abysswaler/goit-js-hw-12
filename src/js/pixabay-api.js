import axios from 'axios';

const API_KEY = '46359106-f72dd377f08be81b63b245749';
const BASE_URL = 'https://pixabay.com/api/';
let page = 1;

export const fetchImages = async (query) => {
    const url = `${BASE_URL}?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&per_page=15&page=${page}`;

    try {
        const response = await axios.get(url);
        return response.data.hits;
    } catch (error) {
        throw new Error('Error fetching images');
    }
};

export const incrementPage = () => {
    page += 1;
};
