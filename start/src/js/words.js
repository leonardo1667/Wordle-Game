import dictionary from './dictionary';
//getting a random word from the dictionary
export const getWord = () => dictionary[Math.floor(Math.random() * dictionary.length)];
//checking if the word entered is oresent in the dictionary
export const isInDictionary = (str) => dictionary.includes(str);

