// //Функция, возвращающая случайное целое число
// const getRandoms = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
// getRandoms(10, 500);
//
// //Функция для проверки максимальной длины строки
// const getStringLength = (str, maxLength) => str.length <= maxLength;
// getStringLength('Some very long text', 40);

const PHOTO_AMOUNT = 25;

const NAMES = ['Сергей', 'Игорь', 'Олег', 'Костя', 'Максим', 'Саша', 'Юля', 'Даша', 'Вероника', 'Марина'];

const DESCRIPTIONS = ['Лето_2014', 'Школьные годы', 'Море_2011', 'Поездка в Крым', 'Личные фото', 'Скрин доков', 'Выпускной_2012', 'Концерт Prodigy', 'На даче', 'Из Киева'];

const MESSAGES = ['Всё отлично!', 'В целом всё неплохо. Но не всё.', 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.', 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.', 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.', 'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'];

const likeValues = {
  MIN: 15, MAX: 200
};

const CommentsValues = {
  MIN: 1, MAX: 5
};

const AvatarValues = {
  MIN: 1, MAX: 6
};

const getRandomValues = () => {
  const max = (a, b) => a > b ? a : b;
  const min = (a, b) => a < b ? a : b;
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getRandomArrEl = (el) => el[getRandomValues(0, el.length - 1)];

let comment = 0;
const getCommentId = () => {
  comment++;
  return comment;
};

const createRandomComments = () => ({
  id: getCommentId(),
  avatar: `img/avatar-${getRandomValues(AvatarValues.MIN, AvatarValues.MAX)}.svg`,
  message: getRandomArrEl(MESSAGES),
  name: getRandomArrEl(NAMES),
});

const createPhotosRandom = () => Array.form({length: PHOTO_AMOUNT}, (item, index) => ({
  id: index + 1,
  url: `photos/${index + 1}.jpg`,
  description: getRandomArrEl(DESCRIPTIONS),
  likes: getRandomValues(likeValues.MIN, likeValues.MAX),
  comments: Array.from({length: getRandomValues(CommentsValues.MIN, CommentsValues.MAX)}, createRandomComments)
}));
createPhotosRandom();

