const palindromes = function (word) {
    word = word.replace(/[^a-zA-Z]/g, '');

    let newWord = '';
    for (let index = word.length - 1; index >= 0; index--) {
        newWord += word[index];
    }

    newWord = newWord.toLowerCase();
    word = word.toLowerCase();

    return newWord === word ? true : false;
};

// Do not edit below this line
module.exports = palindromes;
