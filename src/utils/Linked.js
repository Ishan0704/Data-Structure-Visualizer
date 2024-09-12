class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Linked {
  constructor() {
    this.head = null;
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
  }

  insertAtHead(data) {
    const newNode = new Node(data);
    if (this.head === null) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
  }

  insertAtPosition(pos, data) {
    if (pos < 0) {
      return -1;
    } else if (pos === 0) {
      const newNode = new Node(data);
      newNode.next = this.head;
      this.head = newNode;
    } else {
      let curr = this.head;
      let cnt = 0;
      while (curr !== null && cnt < pos - 1) {
        cnt++;
        curr = curr.next;
      }
      if (curr === null) {
        return -1;
      }

      const newNode = new Node(data);
      newNode.next = curr.next;
      curr.next = newNode;
    }
  }

  searchByVal(data) {
    let curr = this.head;
    while (curr !== null) {
      if (curr.data === data) {
        return true; 
      }
      curr = curr.next;
    }
    return false;
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
}

module.exports = Linked;
