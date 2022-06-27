//Функция, возвращающая случайное целое число
const getRandom = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
getRandom(10, 500);

//Функция для проверки максимальной длины строки
const getStringLength = (str, maxLength) => str.length <= maxLength;
getStringLength('Some very long text', 40);
