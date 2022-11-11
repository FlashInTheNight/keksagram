let idCounter = 0;
const SIMILAR_PHOTO_DESCR_COUNT = 25;
const COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];
const NAMES = [
  'Анна',
  'Кирилл',
  'Таисия',
  'Артём',
  'Евгений',
  'Валерия',
  'Полина',
  'Фёдор',
  'Александр',
  'Ксения',
];

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

const getRandomArrayElement = (elements) => elements[getRandomPositiveInteger(0, elements.length - 1)];

const createComments = () => ({
  id: 5, // доделать
  avatar: `img/avatar-${getRandomPositiveInteger(1, 6)}.svg`,
  message: getRandomArrayElement(COMMENTS),
  name: getRandomArrayElement(NAMES),
});

const createPhotoDescr = () => {
  ++idCounter;
  return {
    id: idCounter,
    url: `photos/${idCounter}.jpg`,
    description: 'Sample text', //улучшить
    likes: getRandomPositiveInteger(15, 200),
    comments: Array.from({length: getRandomPositiveInteger(1, 4)}, createComments)
  };
};

const storagePhotoDescr = Array.from({length: SIMILAR_PHOTO_DESCR_COUNT}, createPhotoDescr);

// console.log(storagePhotoDescr);


