const uploadForm = document.querySelector('.img-upload__form');


const pristine = new Pristine(uploadForm, {
  classTo: 'text__hashtags',
  errorClass: 'text__hashtags--invalid',
  successClass: 'text__hashtags--valid',
  errorTextParent: 'text__hashtags',
  errorTextTag: 'span',
  errorTextClass: 'text__error'
});

pristine.addValidator(uploadForm.querySelector('.text__hashtags'));

uploadForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  pristine.validate();
});
