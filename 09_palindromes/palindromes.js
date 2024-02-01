const palindromes = function (word) {
    word = word.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
    reverseWord = word.split('').reverse().join('');

    return (reverseWord === word) ? true : false;


};

// Do not edit below this line
module.exports = palindromes;
