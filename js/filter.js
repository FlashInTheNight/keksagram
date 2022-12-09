import { renderPictures } from './picture.js';
import { debounce } from './util.js';

const filter = {
  DEFAULT: 'filter-default',
  RANDOM: 'filter-random',
  DISCUSSED: 'filter-discussed',
};

const PICTURES_COUNT = 10;

const filtersElement = document.querySelector('.img-filters');

let currentFilter = '';
let pictures = [];

const turnFilterOn = (loadedPicture) => {
  filtersElement.classList.remove('img-filters--inactive');
  pictures = [...loadedPicture];
  currentFilter = filter.DEFAULT;
};


const randomSort = () => Math.random() - 0.5;

const discussedSort = (pictureA, pictureB) =>
  pictureB.comments.length - pictureA.comments.length;


const filterPictures = () => {
  switch (currentFilter) {
    case filter.RANDOM:
      return [...pictures].sort(randomSort).slice(0, PICTURES_COUNT);
    case filter.DISCUSSED:
      return [...pictures].sort(discussedSort);
    default:
      return [...pictures];
  }
};

const debouncedRenderPictures = debounce(renderPictures);


filtersElement.addEventListener('click', (evt) => {
  debouncedRenderPictures(filterPictures());
  if (!evt.target.classList.contains('img-filters__button')) {
    return;
  }

  const clickedButton = evt.target;
  if (clickedButton.id === currentFilter) {
    return;
  }

  filtersElement
    .querySelector('.img-filters__button--active')
    .classList.remove('img-filters__button--active');

  clickedButton.classList.add('img-filters__button--active');
  currentFilter = clickedButton.id;
  renderPictures(filterPictures());
});

export { turnFilterOn, filterPictures };
