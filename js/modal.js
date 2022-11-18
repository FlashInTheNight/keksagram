const modalWindow = document.querySelector('.big-picture');
const bigPicture = modalWindow.querySelector('.big-picture__img').querySelector('img');
const likes = modalWindow.querySelector('.likes-count');
const comments = modalWindow.querySelector('.comments-count');
const commentsList = modalWindow.querySelector('.social__comments');
const caption = modalWindow.querySelector('.social__caption');
const bodyTag = document.querySelector('body');
const cancelBtn = modalWindow.querySelector('.cancel');
// Временно прячем счётчик и загрузку комментариев
const commentCount = modalWindow.querySelector('.social__comment-count');
const commentLoader = modalWindow.querySelector('.comments-loader');


const addCommentsItem = function (commentElement) {
  commentsList.innerHTML = '';
  commentElement.comments.forEach((element) => {
    commentsList.insertAdjacentHTML('beforeEnd', `
    <li class="social__comment">
      <img
          class="social__picture"
          src="${element.avatar}"
          alt="${element.name}"
          width="35" height="35">
      <p class="social__text">${element.message}</p>
    </li>
    `);
  });
};

const changeData = function (data) {
  bigPicture.src = data.url;
  likes.textContent = data.likes;
  comments.textContent = data.comments.length;
  addCommentsItem(data);
  caption.textContent = data.description;
};

const CreateListener = function (arrPics, element) {
  element.addEventListener('click', () => {
    modalWindow.classList.remove('hidden');
    commentCount.classList.add('hidden');
    commentLoader.classList.add('hidden');
    bodyTag.classList.add('modal-open');
    changeData(arrPics);
  });
};

cancelBtn.addEventListener('click', () => {
  modalWindow.classList.add('hidden');
  bodyTag.classList.remove('modal-open');
});

document.addEventListener('keydown', (evt) => {
  if(evt.key === 'Escape') {
    modalWindow.classList.add('hidden');
    bodyTag.classList.remove('modal-open');
  }
});

export {CreateListener};
