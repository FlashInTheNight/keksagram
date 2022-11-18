import {getPictures} from './data.js';

const picField = document.querySelector('.pictures');
const picTemplate = document.querySelector('#picture').content.querySelector('.picture');

const SimilarPics = getPictures(12);
const listFragment = document.createDocumentFragment();

SimilarPics.forEach(({url, likes, comments}) => {
  const clonePic = picTemplate.cloneNode(true);
  clonePic.querySelector('.picture__img').src = url;
  clonePic.querySelector('.picture__likes').textContent = likes;
  clonePic.querySelector('.picture__comments').textContent = comments.length;
  listFragment.appendChild(clonePic);
});

picField.appendChild(listFragment);
