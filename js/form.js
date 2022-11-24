import {isEscapeKey} from './util.js';

const uploadFile = document.querySelector('#upload-file');
const uploadOverlay = document.querySelector('.img-upload__overlay');
const bodyTag = document.querySelector('body');
const uploadCancel = document.querySelector('#upload-cancel');


const onUploadEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeUploadOverlay();
  }
};

const openUploadOverlay = function () {
  uploadOverlay.classList.remove('hidden');
  bodyTag.classList.add('modal-open');
  document.addEventListener('keydown', onUploadEscKeydown);
};

function closeUploadOverlay () {
  uploadOverlay.classList.add('hidden');
  bodyTag.classList.remove('modal-open');
  uploadFile.value = '';
  document.removeEventListener('keydown', onUploadEscKeydown);
}

uploadFile.addEventListener('change', () => {
  openUploadOverlay();
});

uploadCancel.addEventListener('click', () => {
  closeUploadOverlay();
});
