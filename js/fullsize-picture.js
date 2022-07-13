import {openModal, closeModal} from './pop-up.js';

const AVATAR_HEIGHT = 35;
const AVATAR_WIDTH = 35;

const fullSizePic = document.querySelector('.big-picture');
const closeFullSizePic = document.querySelector('.big-picture__cancel');
const commentLoaderEl = document.querySelector('.comments-loader');
const commentsList = document.querySelector('.social__comments');
const commentEl = document.querySelector('.social__comment');
const commentCount = document.querySelector('.social__comment-count');

const createCommentItem = ({avatar, name, message}) => {
  const commentItem = commentEl.cloneNode(true);
  commentItem.querySelector('.social__picture').src = avatar;
  commentItem.querySelector('.social__picture').alt = name;
  commentItem.querySelector('.social__picture').height = AVATAR_HEIGHT;
  commentItem.querySelector('.social__picture').width = AVATAR_WIDTH;
  commentItem.querySelector('.social__text').textContent = message;

  return commentItem;
};

const displayComments = (comments) => {
  const commentListFragment = document.createDocumentFragment();
  comments.forEach((comment) => {
    commentListFragment.append(createCommentItem(comment));
  });
  commentsList.innerHTML = '';
  commentsList.append(commentListFragment);
};

const displayPost = ({url, description, comments, likes}) => {
  fullSizePic.querySelector('.big-picture__img img').src = url;
  fullSizePic.querySelector('.likes-count').textContent = likes;
  fullSizePic.querySelector('.comments-count').textContent = comments.length;
  fullSizePic.querySelector('.social__caption').textContent = description;
  displayComments();
  openModal(fullSizePic);

  commentCount.classList.remove('hidden');
  commentLoaderEl.classList.remove('hidden');
};

closeFullSizePic.addEventListener('click', () => {
  closeModal();
});

export {fullSizePic, displayPost};
