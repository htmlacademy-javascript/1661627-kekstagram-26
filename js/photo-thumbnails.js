import {createRandomPhotos} from './data.js';

const picturesBox = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

const photoData = createRandomPhotos();

const picturesFragment = document.createDocumentFragment();

photoData.forEach(({url, comments, likes}) => {
  const pictureElement = pictureTemplate.cloneNode(true);
  pictureElement.querySelector('.picture__img').src = url;
  pictureElement.querySelector('.picture__comments').textContent = comments.length;
  pictureElement.querySelector('.picture__likes').textContent = likes;
  picturesFragment.append(pictureElement);
});
picturesBox.append(picturesFragment);


