const Linked = require('./Linked');

const list = new Linked();
list.insertAtTail(1);
list.insertAtTail(2);
list.insertAtTail(3);


list.insertAtHead(4);
list.insertAtHead(5);
list.insertAtPosition(2,6);
const ans = list.searchByVal(2);
list.printList();

console.log(`Search result for 2: ${ans}`);
