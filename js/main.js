let idCounter = 0;
const SIMILAR_PHOTO_DESCR_COUNT = 25;

const getRandomPositiveInteger = (a, b = 1) => {
  if (a === undefined) {
    throw new Error('Первый параметр должен быть число');
  }

  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const checkLengthLine = (line, maxLength) => (line.length <= maxLength);

const createComments = () => {};

const createPhotoDescr = () => {
  ++idCounter;
  return {
    id: idCounter,
    url: `photos/${idCounter}.jpg`,
    description: 'Sample text',
    likes: getRandomPositiveInteger(15, 200),
    comments: [
      {
        id: 5,
        avatar: `img/avatar-${getRandomPositiveInteger(1, 6)}.svg`,
      }
    ]
  };
};

const storagePhotoDescr = Array.from({length: SIMILAR_PHOTO_DESCR_COUNT}, createPhotoDescr);

console.log(storagePhotoDescr);

// В файле main.js на основе написанных по заданию ранее вспомогательных функций напишите необходимые функции для создания массива из 25 сгенерированных объектов. Каждый объект массива — описание фотографии, опубликованной пользователем.

// Структура каждого объекта должна быть следующей:

// id, число — идентификатор описания. Это число от 1 до 25. Идентификаторы не должны повторяться. /check

// url, строка — адрес картинки вида photos/{{i}}.jpg, где {{i}} — это число от 1 до 25. Адреса картинок не должны повторяться. /check

// description, строка — описание фотографии. Описание придумайте самостоятельно. /check

// likes, число — количество лайков, поставленных фотографии. Случайное число от 15 до 200. /check

// --------------------------------------------------------------------------------------------------

// comments, массив объектов — список комментариев, оставленных другими пользователями к этой фотографии. Количество комментариев к каждой фотографии вы определяете на своё усмотрение. Все комментарии генерируются случайным образом. Пример описания объекта с комментарием:

// У каждого комментария есть идентификатор — id — случайное число. Идентификаторы не должны повторяться.

// Поле avatar — это строка, значение которой формируется по правилу img/avatar-{{случайное число от 1 до 6}}.svg. Аватарки подготовлены в директории img.

// Для формирования текста комментария — message — вам необходимо взять одно или два случайных предложения из представленных ниже:

// Имена авторов также должны быть случайными. Набор имён для комментаторов составьте сами. Подставляйте случайное имя в поле name.

getRandomPositiveInteger(1, 0);
checkLengthLine('test', 10);
