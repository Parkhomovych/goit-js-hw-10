import { error } from './helpers';
import axios from 'axios';
axios.defaults.headers.common['x-api-key'] =
  'live_UDoWVlW2V5rP1Mig7WdZ5QGJqgp2Gbevwrh42drIwrb9YbZKN9W969hM1jaHyUBK';

function fetchBreeds() {
  const BASE_URL = 'https://api.thecatapi.com/v1/breeds';

  return axios
    .get(BASE_URL)
    .then(response => {
      return response.data;
    })
    .catch((err) => {
      error(err);
    });
}
function fetchCatByBreed(breedId) {
  const BASE_URL = `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`;

  return axios
    .get(BASE_URL)
    .then(response => {
      return response.data;
    })
    .catch((err) => {
      error(err);
    });
}

export { fetchBreeds, fetchCatByBreed };
