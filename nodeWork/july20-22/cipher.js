
// function printAlphabet() {
    
//     let a = 'abcdefghijklmnopqrstuvwxyz'

//     for (let index = 0; index < a.length; index++) {
//         console.log(a[index].toUpperCase(), a[index].charCodeAt()-96)
//     }
// }
// console.log(printAlphabet())

// function textToAlphabetPos(text = '')  {
//     let result = text

    

//     return result
// }

// console.log(textToAlphabetPos('abc bb xyz'))
// let str = 'abc bb xyz'
// var symbolsMap = {
//     "A": 1,
//     "B": 2,
//     "C": 3,
//     "D": 4,
//     "E": 5,
//     "F": 6,
//     "G": 7,
//     "H": 8,
//     "I": 9,
//     "J": 10,
//     "K": 11,
//     "L": 12,
//     "M": 13,
//     "N": 14,
//     "O": 15,
//     "P": 16,
//     "Q": 17,
//     "R": 18,
//     "S": 19,
//     "T": 20,
//     "U": 21,
//     "V": 22,
//     "W": 23,
//     "X": 24,
//     "Y": 25,
//     "Z": 26
// }
// let numbers = str.replace(/./gi,$0=>symbolsMap[$0.toUpperCase()]||$0)
// console.log(numbers);    



// function printAlphabet() {
//     for (let i = 1; i <= 26; i++) {
//         let letter = String.fromCharCode(64 + i);
//         console.log(letter, i)
//     }
    
// }
// function textToAlphabetPos(text) {
//     const alpabet = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
//              'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x','y', 'z' ]

//     const result = text.split('').map(item => alpabet.indexOf(item)+1).join(' ').replace(/ 0/g,"  ");
//     return result
// }
// console.log(textToAlphabetPos('abc bb xyz'))

// function textToAlphabetPos(text) {
//     let words = text.split(/[^\w']+/);
//     return words
//         .map(word => word.split('').map(positionInAlphabet).join(' '))
//         .join('   ');
// }

// function positionInAlphabet(letter) {
//     let code = letter.toUpperCase().charCodeAt(0);
//     if (65 <= code && code <= 90) {
//         return code - 64;
//     } else {
//         return 0;
//     }
// }

// console.log(textToAlphabetPos('hello world'))




