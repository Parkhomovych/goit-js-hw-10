import { fetchBreeds, fetchCatByBreed } from './js/cat-api';
import { error, refs } from './js/helpers';
const { select, load, div } = refs;
fetchBreeds()
  .then(data => {
    select.innerHTML = createOption(data);
    refs.load.style.display = 'none';
    refs.select.style.display = 'block';
  })
  .catch(err => error(err));

function createOption(arrBreed) {
  return arrBreed
    .map(breed => `<option value='${breed.id}'>${breed.name}</option>`)
    .join();
}

select.addEventListener('change', evt => {
  load.style.display = 'block';
  div.style.display = 'none';

  const catId = evt.target.value;
  fetchCatByBreed(catId)
    .then(data => {
      createMarkup(data);
      load.style.display = 'none';
      div.style.display = 'flex';
    })
    .catch(err => error(err));
});

function createMarkup(cats) {
  cats.map(cat => {
    const { temperament, description, name } = cat.breeds[0];
    return (div.innerHTML = `<img src="${cat.url}" alt="${name}" height: '200' width = '250'/>
        <div class = "box">
           <h2>${name}</h2>
           <p>${description}</p>
           <p><b>Temperament:</b> ${temperament}</p>
         </div>`);
  });
}
