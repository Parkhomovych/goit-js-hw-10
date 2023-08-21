import { Report } from 'notiflix/build/notiflix-report-aio';

const refs = {
  load: document.querySelector('.loader'),
  div: document.querySelector('.cat-info'),
  select: document.querySelector('.breed-select'),
};


function error(value) {
  refs.load.style.display = 'none';
  return Report.failure('Error', `😵‍💫😵‍💫😵‍💫_😵‍💫😵‍💫😵‍💫`, 'Okay');
}

export { refs, error };
