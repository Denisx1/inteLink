// function renderField(field) {
//     let output = "";
   
//     const formatArr = field.map((element) => {
//       let item = element;
//       if (element === 0) {
//         item = " ";
//       } else if (item === 1) {
//         item = "x";
//       } else if (item === -1) {
//         item = 0;
//       }
   
//       return item;
//     });

//     let row1 = " " + formatArr[0] + " | " + formatArr[1] + " | " + formatArr[2];
//     let row2 = " " + formatArr[3] + " | " + formatArr[4] + " | " + formatArr[5];
//     let row3 = " " + formatArr[6] + " | " + formatArr[7] + " | " + formatArr[8];
//     let structureRow = "---+---+---";
   
//     console.log(row1);
//     console.log(structureRow);
//     console.log(row2);
//     console.log(structureRow);
//     console.log(row3);
   
//     return output;
// }

// console.log(renderField([
//     0, 0, 0, 
//     0, -1, 0, 
//     0, 0, 0, 
//    ]))

// function gameStatus(field) {
//     let status = "";
//     let winner = null;
   
//     const calculateWinner = () => {
//       if (field[0] == field[1] && field[0] == field[2]) {
//         return field[0];
//       } else if (field[3] == field[4] && field[3] == field[5]) {
//         return field[3];
//       } else if (field[6] == field[7] && field[6] == field[8]) {
//         return field[6];
//       } else if (field[0] == field[3] && field[0] == field[6]) {
//         return field[0];
//       } else if (field[1] == field[4] && field[1] == field[7]) {
//         return field[1];
//       } else if (field[2] == field[5] && field[2] == field[8]) {
//         return (winner = field[2]);
//       } else if (field[0] == field[4] && field[0] == field[8]) {
//         return field[0];
//       } else if (field[2] == field[4] && field[2] == field[6]) {
//         return field[2];
//       }
//       return false;
//     };
   
//     const emptyCellsArr = field.filter((element) => element === 0);
//     winner = calculateWinner();
   
//     if (winner) {
//       status = winner === 1 ? "x" : "0";
//     } else if (!emptyCellsArr.length) {
//       status = "end";
//     } else {
//       status = "turn";
//     }
   
//     return status;
//   }
// function makeTurn(field, player, index) {
//     if (field[index] === 0) {
//       field[index] = player;
//       return true;
//     } else if (field[index] === 1 || field[index] === -1) {
//       return false;
//     }
//     return false;
//   }

//   let field = new Array(9).fill(0);
//   console.log(makeTurn(field, 1, 2));
//   console.log(field[2])  

