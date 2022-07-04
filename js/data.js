import {getRandomValues,getRandomArrEl} from './util.js';

const PHOTO_AMOUNT = 25;

const NAMES = ['Сергей', 'Игорь', 'Олег', 'Костя', 'Максим', 'Саша', 'Юля', 'Даша', 'Вероника', 'Марина'];

const DESCRIPTIONS = ['Лето_2014', 'Школьные годы', 'Море_2011', 'Поездка в Крым', 'Личные фото', 'Скрин доков', 'Выпускной_2012', 'Концерт Prodigy', 'На даче', 'Из Киева'];

const MESSAGES = ['Всё отлично!', 'В целом всё неплохо. Но не всё.', 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.', 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.', 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.', 'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'];

const likeValue = {
  MIN: 15, MAX: 200
};

const CommentsValue = {
  MIN: 1, MAX: 5
};

const AvatarValue = {
  MIN: 1, MAX: 6
};
let comment = 0;
const getCommentId = () => {
  comment++;
  return comment;
};

const createRandomComments = () => ({
  id: getCommentId(),
  avatar: `img/avatar-${getRandomValues(AvatarValue.MIN, AvatarValue.MAX)}.svg`,
  message: getRandomArrEl(MESSAGES),
  name: getRandomArrEl(NAMES),
});

const createRandomPhotos = () => Array.from({length: PHOTO_AMOUNT}, (item, index) => ({
  id: index + 1,
  url: `photos/${index + 1}.jpg`,
  description: getRandomArrEl(DESCRIPTIONS),
  likes: getRandomValues(likeValue.MIN, likeValue.MAX),
  comments: Array.from({length: getRandomValues(CommentsValue.MIN, CommentsValue.MAX)}, createRandomComments)
}));

export {createRandomPhotos};
