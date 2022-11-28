const scaleControlSmaller = document.querySelector('.scale__control--smaller');
const scaleControlBigger = document.querySelector('.scale__control--bigger');
const scaleControlValue = document.querySelector('.scale__control--value');
const scaleSlider = document.querySelector('.scale__slider');
const imgUploadPreview = document.querySelector('.img-upload__preview').querySelector('img');

scaleControlValue.value = 100;

noUiSlider.create(scaleSlider, {
  range: {
    min: 25,
    max: 100,
  },
  start: 100,
  step: 25,
  connect: 'upper',
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
