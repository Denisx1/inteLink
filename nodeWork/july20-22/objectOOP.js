// function printTask(id, task) {
//     let data = task.dueDate.toDateString().split('').slice(3, 10).join('').trim()
//     if(task.done === true){
//         console.log(`${id}. [x] ${task.title} ${task.dueDate? task.dueDate.toDateString().split('').slice(3, 10).join('').trim():''}`)
//         console.log(`${task.desc? task.desc:''}`)
//     }else{
//         console.log(`${id}. [ ] ${task.title} ${task.dueDate? task.dueDate.toDateString().split('').slice(3, 10).join('').trim():''}`)
//         console.log(`${' '}${task.desc? task.desc:''}`)
//     }


// }

// printTask(3, {
//     done: false,
//     title: 'Objects',
//     desc: 'Learn more about this',
//     dueDate: new Date(2022, 3, 28)
//   })

// function printTask(id, task) {
    
//     if (task.done === true) {
//         console.log(`${id}. [x] ${task.title} ${task.dueDate ?`(${task.dueDate.toDateString().split(' ').slice(1,3).join(' ')})` : ''}`)
//         console.log(`${id>9? '   ':'  '} ${task.desc ? task.desc : ''} `)
//     } else {
//         console.log(`${id}. [ ] ${task.title} ${task.dueDate ? `(${task.dueDate.toDateString().split(' ').slice(1,3).join(' ')})`: ''}`)
//         console.log(`${id>9? '   ':'  '} ${task.desc ? task.desc : ''} `)
//     }
// }
	
//  printTask(4,
//      {done: false,
//      title: 'Complete first course task', dueDate: new Date('2022-01-17')})
  



