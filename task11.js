//Реалізуйте функцію generateKey(length, characters), яка повертає рядок випадкових символів із набору characters довжиною length. span>

const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

const randomString = (length, characters) => {
    let randomChars = '';
    for (let i = 1; i < length; i++){
        const randomCharNum = Math.floor(Math.random() * characters.length);
        const randomChar = characters[randomCharNum-1];
        randomChars = randomChars.concat("", randomChar);
    } 
    return randomChars;
}
const key = randomString(8, characters);
console.log(key);
