const uploadForm = document.querySelector('.img-upload__form');
const uploadTextHashTag = uploadForm.querySelector('.text__hashtags');

const pristine = new Pristine(uploadForm, {
  classTo: 'img-upload__element', // Элемент, на который будут добавляться классы
  errorTextParent: 'img-upload__element', // Элемент, куда будет выводиться текст с ошибкой
  errorTextClass: 'img-upload_error' // Класс для элемента с текстом ошибки
});


const validateTags = (value) => {
  const re = /^#[A-Za-zА-Яа-яЁё0-9]{1,19}$/;
  let valid = false;
  const arrValue = value.split(' ');

  function checkRegExp (e) {
    valid = re.test(e);
  }

  arrValue.forEach((element) => checkRegExp(element));

  for (let i = 1; i < arrValue.length; i++) {
    if (arrValue[i-1] === arrValue[i]) {
      valid = false;
    }
  }

  if (arrValue.length > 5) {
    valid = false;
  }

  return valid;
};

pristine.addValidator(
  uploadTextHashTag,
  validateTags,
  'Неправильно заполнены хэштеги'
);


// uploadForm.addEventListener('submit', (evt) => {
//   evt.preventDefault();
//   pristine.validate();
// });
