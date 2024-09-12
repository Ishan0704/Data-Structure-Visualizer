class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Linked {
  constructor() {
    this.head = null;
    this.size = 0; // Initialize size property
  }

  insertAtTail(data) {
    const newNode = new Node(data);

    if (this.head === null) {
      this.head = newNode;
    } else {
      let curr = this.head;
      while (curr.next !== null) {
        curr = curr.next;
      }
      curr.next = newNode;
    }
    this.size++; // Increment size
  }

  insertAtHead(data) {
    const newNode = new Node(data);
    if (this.head === null) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.size++; // Increment size
  }

  insertAtPosition(data, pos) {
    if (pos < 0) {
      console.error("Invalid position: cannot be negative");
      return -1;
    } else if (pos === 0) {
      this.insertAtHead(data);
    } else {
      let curr = this.head;
      let cnt = 0;
      while (curr !== null && cnt < pos - 1) {
        cnt++;
        curr = curr.next;
      }
      if (curr === null) {
        console.error("Invalid position: position exceeds list length");
        return -1;
      }
  
      const newNode = new Node(data);
      newNode.next = curr.next;
      curr.next = newNode;
      this.size++; // Increment size
    }
  }
  
  searchByVal(data) {
    let cnt = 0;
    let curr = this.head;
    while (curr !== null) {
      cnt++;
      if (curr.data === data) {
        console.log("Found at index : ",cnt); 
      }
      curr = curr.next;
    }
    if(cnt===0)
    {
      return false;
    }
    return true;
    
  }

  printList() {
    let curr = this.head;
    let result = [];
    while (curr) {
      result.push(curr.data);
      curr = curr.next;
    }
    console.log(result.join(" -> "));
  }

  getLength() {
    return this.size; // Return the size
  }
}

module.exports = Linked;
