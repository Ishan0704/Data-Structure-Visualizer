class Queue {
  constructor(maxSize) {
      this.items = [];
      this.size = 0;
      this.maxSize = maxSize || Infinity;
  }

  push_from_rear(ele) {
      if (this.isfull()) {
          alert("Queue is full");
          return;
      }
      this.items.push(ele);
      this.size++;
  }

  pop_from_front() {
      if (this.isempty()) {
          alert("Queue is empty");
          return;
      }
      this.size--;
      return this.items.shift();
      
  }

  front_ele() {
      if (this.isempty()) {
          console.log("Queue is empty");
          return;
      }
      return this.items[0];
      // const a = this.items[0];
      // alert(`Front element: ${a}`);
  }

  isempty() {
      return this.size === 0;
  }

  isfull() {
      return this.size >= this.maxSize;
  }

  getElements() {

      return [...this.items];
  }
}

module.exports = Queue;
