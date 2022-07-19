// function isAdult(age) {
//     let res = age >= 18? true: false
//     return res
// }

// isAdult(18)


// function plural(count, one, few, many) {
//     const valueCount = count % 10
    
//     if(5<= count && count <= 20 || 5<=valueCount&&valueCount<=0){
//         return count+ ' ' + many
//     }
//     if(valueCount == 1){
//         return count+ ' ' + one
//     }
//     if(2<=valueCount && valueCount <=4  ){
//         return count+ ' ' + few
//     }
// }

// document.write(plural(20, 'банан', 'банана', 'бананів'))


// const plural = (count, one, few, many) => 5<= count && count <= 20 || 5<=count%10&&count%10==0?count+ ' ' + many:count%10 == 1?count+ ' ' + one:2<=count%10 && count%10 <=4?count+ ' ' + few:count%10 == 0?count+ ' ' + many:false
// console.log(plural(101, 'банан', 'банана', 'бананів'))