class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Linked {
  constructor() {
    this.head = null;
    this.size = 0;
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
    this.size++;
  }

  insertAtHead(data) {
    const newNode = new Node(data);
    if (this.head === null) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.size++;
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
      this.size++;
    }
  }
  updateAtHead(data) {
    if (this.head === null) {
      return -1;
    } else {
      this.head.data = data;
    }
  }

  updateAtPos(data, pos) {
    let cnt = 0;
    if (pos < 0) {
      console.log("Please Enter correct position");
    } else if (pos === 0) {
      this.updateAtHead(data);
    } else if (pos > this.size) {
      alert("Enter position in limited size")
    } else {
      let curr = this.head;
      while (curr != null) {
        if (cnt === pos ) {
          curr.data = data;
        }
        curr = curr.next;
        cnt++;
      }
    }
  }

  searchByVal(data) {
    let cnt = 0;
    let curr = this.head;
    while (curr !== null) {
      if (curr.data === data) {
        console.log("Found at index : ", cnt);
      }
      curr = curr.next;
      cnt++;
    }
    if(cnt === 0)
    {
      console.log("Element not found");
    }
  }

  searchByPos(pos) {
    if (pos < 0 || pos >= this.size) {
      console.log("Please enter a valid position within the list boundaries.");
      return;
    }
    
    let curr = this.head;
    let cnt = 0;
  
    while (cnt < pos) {
      curr = curr.next;
      cnt++;
    }
  
    console.log(`Element at position ${pos}: `, curr.data);
  }

  deleteAtHead() {
    if (this.head === null) {
      console.log("The list is already empty.");
      return;
    }
    this.head = this.head.next;
    this.size--;
  }

  deleteAtTail() {
    if (this.head === null) {
        console.log("The list is empty.");
        return;
    }

    if (this.head.next === null) {
        this.head = null;
    } else {
        let curr = this.head;
        let prev = null;
        while (curr.next !== null) {
            prev = curr;
            curr = curr.next;
        }
        prev.next = null; 
    }
    this.size--; 
}

deleteAtPos(pos) {
  if (pos < 0 || pos >= this.size) {
    console.log("Please enter a valid position within the list boundaries.");
    return;
  }

  // delete at head
  if (pos === 0) {
    this.deleteAtHead();
    return;
  }

  // delete at tail
  if (pos === this.size - 1) {
    this.deleteAtTail();
    return;
  }

  // delete at any other position
  let curr = this.head;
  let prev = null;
  let cnt = 0;

  while (curr !== null && cnt < pos) {
    prev = curr;
    curr = curr.next;
    cnt++;
  }

  if (curr !== null) {
    prev.next = curr.next;
    curr.next = null; 
    this.size--; 
  }
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
