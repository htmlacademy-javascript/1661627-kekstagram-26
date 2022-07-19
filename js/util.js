const getRandomValues = (a, b) => {
  const max = a > b ? a : b;
  const min = a < b ? a : b;
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getRandomArrEl = (el) => {
  if (el) {
    return el[getRandomValues(0, el.length - 1)];
  }
};

const getStringLength = (str, maxLength) => str.length <= maxLength;
getStringLength('Some very long text', 40);

const escapeButton = (evt) => evt.key === 'Escape';

export {getRandomValues, getRandomArrEl, getStringLength, escapeButton};
