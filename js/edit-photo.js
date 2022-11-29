const scaleControlSmaller = document.querySelector('.scale__control--smaller');
const scaleControlBigger = document.querySelector('.scale__control--bigger');
const scaleControlValue = document.querySelector('.scale__control--value');
const scaleSlider = document.querySelector('.scale__slider');
const imgUploadPreview = document.querySelector('.img-upload__preview').querySelector('img');


// Масштаб

scaleControlValue.value = 100;

noUiSlider.create(scaleSlider, {
  range: {
    min: 25,
    max: 100,
  },
  start: 100,
  step: 25,
  format: {
    to: function (value) {
      return `${value}%`;
    },
    from: function (value) {
      return parseFloat(value);
    },
  }
});

scaleSlider.noUiSlider.on('update', () => {
  scaleControlValue.value = scaleSlider.noUiSlider.get();
});


scaleControlSmaller.addEventListener('click', () => {
  let x = parseFloat(scaleControlValue.value);
  scaleSlider.noUiSlider.updateOptions({
    start: x -= 25,
  });
  if (!(x < 25)) {
    imgUploadPreview.style.transform = `scale(${x / 100})`;
  }
});

scaleControlBigger.addEventListener('click', () => {
  let x = parseFloat(scaleControlValue.value);
  scaleSlider.noUiSlider.updateOptions({
    start: x += 25,
  });
  if (!(x > 100)) {
    imgUploadPreview.style.transform = `scale(${x / 100})`;
  }
});

scaleSlider.style.display = 'none';


// Наложение эффекта на изображение
// const effectList = document.querySelector('.effects__list');
const effectLevelValue = document.querySelector('.effect-level__value');
const effectLevelSlider = document.querySelector('.effect-level__slider');
const form = document.querySelector('.img-upload__form');


const EFFECTS = [
  {
    name: 'none',
    style: '',
    min: 0,
    max: 100,
    step: 1,
    unit: '',
  },
  {
    name: 'chrome',
    style: 'grayscale',
    min: 0,
    max: 1,
    step: 0.1,
    unit: '',
  },
  {
    name: 'sepia',
    style: 'sepia',
    min: 0,
    max: 1,
    step: 0.1,
    unit: '',
  },
  {
    name: 'marvin',
    style: 'invert',
    min: 0,
    max: 100,
    step: 1,
    unit: '%',
  },
  {
    name: 'phobos',
    style: 'blur',
    min: 0,
    max: 3,
    step: 0.1,
    unit: 'px',
  },
  {
    name: 'heat',
    style: 'brightness',
    min: 1,
    max: 3,
    step: 0.1,
    unit: '',
  },
];
const DEFAULT_EFFECT = EFFECTS[0];
let chosenEffect = DEFAULT_EFFECT;

noUiSlider.create(effectLevelSlider, {
  range: {
    min: DEFAULT_EFFECT.min,
    max: DEFAULT_EFFECT.max,
  },
  start: DEFAULT_EFFECT.max,
  step: DEFAULT_EFFECT.step,
  connect: 'lower',
});

const isDefault = () => chosenEffect === DEFAULT_EFFECT;

const updateSlider = () => {
  effectLevelSlider.classList.remove('hidden');
  effectLevelSlider.noUiSlider.updateOptions({
    range: {
      min: chosenEffect.min,
      max: chosenEffect.max,
    },
    start: chosenEffect.max,
    step: chosenEffect.step,
  });

  if (isDefault()) {
    effectLevelSlider.classList.add('hidden');
  }
};

const onFormChange = (evt) => {
  if (!evt.target.classList.contains('effects__radio')) {
    return;
  }
  chosenEffect = EFFECTS.find((effect) => effect.name === evt.target.value);
  updateSlider();
};

form.addEventListener('change', onFormChange);


const onSliderUpdate = () => {
  imgUploadPreview.style.filter = 'none';
  imgUploadPreview.className = '';
  effectLevelValue.value = '';
  if (isDefault()) {
    return;
  }
  const sliderValue = effectLevelSlider.noUiSlider.get();
  imgUploadPreview.style.filter = `${chosenEffect.style}(${sliderValue}${chosenEffect.unit})`;
  imgUploadPreview.classList.add(`effects__preview--${chosenEffect.name}`);
  effectLevelValue.value = sliderValue;
};

effectLevelSlider.noUiSlider.on('update', onSliderUpdate);


// function changeFilter (evt) {
//   imgUploadPreview.removeAttribute('class');
//   imgUploadPreview.classList.add(`effects__preview--${evt.target.value}`);
// }

// effectList.addEventListener('change', changeFilter);


// noUiSlider.create(effectLevelSlider, {
//   start: 1,
//   range: {
//     'min': 0,
//     'max': 3
//   },
//   step: 0.1,
//   connect: 'lower',
// });

// effectLevelSlider.noUiSlider.on('update', () => {
//   effectLevelValue.value = effectLevelSlider.noUiSlider.get();
//   if (imgUploadPreview.classList.value === 'effects__preview--chrome') {
//     imgUploadPreview.style.filter = `grayscale(${effectLevelValue.value})`;
//   } else if (imgUploadPreview.classList.value === 'effects__preview--phobos') {
//     imgUploadPreview.style.filter = `blur(${effectLevelValue.value}px)`;
//   }
// });

