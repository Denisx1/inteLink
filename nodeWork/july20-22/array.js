// function sum(items) {
//     let result = items.length == 0?0:items.reduce((t, c)=> t+c)
//     return result;
// }

// console.log(sum([1,2,3]))

// function difference(a, b) {
//     let res = a.filter(x=> !b.includes(x))
//     return res;
// }

// console.log(difference([1, 2], [1, 2, 3]))

// function capitalizeText(text = '') {
//     return text.split(/\s+/).map(world => world[0].toUpperCase() + world.substring(1)).join(' ')
// }

// console.log(capitalizeText("i can't wait to be king"))

// function isValidParentheses(expression = '') {
//     if(expression === '')return 'Ok'
//     const right = /\(/gi;
//     const left = /\)/gi;
//     let numLeft = expression.match(left);
//     let numRight = expression.match(right);
//     if (!numLeft || !numRight)return true
//     if ((!numLeft || !numRight) || numLeft.length !== numRight.length) return false;
//     right.lastIndex = 0;
//     left.lastIndex = 0;

//     const { length } = expression;
//     const firstHalf = expression.substring(0, length / 2);
//     const secondHalf = expression.substring(length / 2);

//     numLeft = firstHalf.match(right);
//     numRight = secondHalf.match(left);

//     if ((!numLeft || !numRight) || numLeft.length > numRight.length) return false;
//     return true;
// }

// function isValidParentheses(expression) {
//     let parentheses = [];
//     for (let c of expression.split('')) {
//         if (c === '(') {
//             parentheses.push(c);
//         } else if (c === ')') {
//             if (parentheses.length !== 0) {
//                 parentheses.pop();
//             } else {
//                 return false;
//             }
//         }
//     }
//     return parentheses.length === 0;
// }
// console.log(isValidParentheses('a + b') ? 'OK' : 'ERROR')
