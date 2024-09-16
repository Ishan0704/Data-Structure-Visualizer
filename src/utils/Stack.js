class Stack {
    constructor(maxSize) {
        this.items = [];
        this.size = 0;
        this.maxSize = maxSize || 10; 
    }

    push(ele) {
        if (this.isfull()) {
            alert("Stack overflow !! Stack is full ");
            return;
        }
        this.items.push(ele);
        this.size++;
    }

    pop() {
        if (this.isempty()) {
            alert("Stack Underflow !! Stack is empty");
            return;
        }
        let a = this.items.pop();
        console.log(`Element Popped: ${a}`);
        this.size--;
    }

    display() {
        if (this.isempty()) {
            console.log("Stack is empty");
            return;
        }
        for (let i = 0; i < this.size; i++) {
            console.log(`Element at index ${i}: ${this.items[i]}`);
        }
    }

    getStack()
    {
        return this.items;
    }
    top() {
        if (this.isempty()) {
            console.log("Stack is empty");
            return;
        }
        return this.items[this.size-1];
    }

    isempty() {
        return this.size === 0; 
    }

    isfull() {
        return this.size >= this.maxSize; 
    }
}

module.exports = Stack;