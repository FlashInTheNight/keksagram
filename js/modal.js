const modalWindow = document.querySelector('.big-picture');
const bigPicture = modalWindow.querySelector('.big-picture__img').querySelector('img');
const likes = modalWindow.querySelector('.likes-count');
const comments = modalWindow.querySelector('.comments-count');

const changeData = function (data) {
  bigPicture.src = data.url;
  likes.textContent = data.likes;
  comments.textContent = data.comments.length;
};

const CreateListener = function (arrPics, element) {
  element.addEventListener('click', () => {
    modalWindow.classList.remove('hidden');
    changeData(arrPics);
  });
};


export {CreateListener};
