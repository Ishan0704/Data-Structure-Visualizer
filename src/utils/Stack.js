class Stack {
    constructor(maxSize) {
        this.items = [];
        this.size = 0;
        this.maxSize = maxSize || Infinity; 
    }

    push(ele) {
        if (this.isfull()) {
            console.log("Stack overflow");
            return;
        }
        this.items.push(ele);
        this.size++;
    }

    pop() {
        if (this.isempty()) {
            console.log("Stack is empty");
            return;
        }
        let a = this.items.pop();
        console.log(`Element Popped: ${a}`);
        this.size--;
    }

    isempty() {
        return this.size === 0;
    }

    isfull() {
        return this.size >= this.maxSize;
    }
}

module.exports = Stack;
