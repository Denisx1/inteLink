class Task {
    constructor(attributes) {
        Object.assign(this, attributes);
    }

    toString() {
        let indexPart = this.id + '. ';
        let headLine = indexPart + `[${this.done ? 'x' : ' '}] ${this.title}`;
        if (this.dueDate) {
            let datePart = this.dueDate.toDateString().match(/\w{3} \d{1,2}/)[0];
            headLine += ` (${datePart})`;
        }
        if (this.desc) {
            let indexPadding = ' '.repeat(indexPart.length);
            return headLine + '\n' + indexPadding + this.desc;
        } else {
            return headLine;
        }
    }
    
    toggle() {
        this.done = !this.done;
    }
    
    isOverdue() {
        return this.dueDate ? this.dueDate < new Date() : false;
    }
    
    postpone(timeSpan) {
        this.dueDate.setDate(this.dueDate.getDate() + timeSpan.days);
    }
    
}

let start = new Date('2022-01-17');
let task = new Task({dueDate: start});
task.postpone({days: 2})
console.log(task.dueDate.toDateString());