const modalWindow = document.querySelector('.big-picture');
const bigPicture = modalWindow.querySelector('.big-picture__img').querySelector('img');
const likes = modalWindow.querySelector('.likes-count');
const comments = modalWindow.querySelector('.comments-count');
const commentsList = modalWindow.querySelector('.social__comments');
const caption = modalWindow.querySelector('.social__caption');


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
    changeData(arrPics);
  });
};


export {CreateListener};
