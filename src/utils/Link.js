const Linked = require('./Linked');

const list = new Linked();
list.insertAtTail(1);
list.insertAtTail(2);
list.insertAtTail(3);


list.insertAtHead(4);
list.insertAtHead(5);
list.insertAtPosition(2,6);
list.printList();
console.log("Searching : ");
const ans = list.searchByVal(4);
const ans1 = list.searchByVal(9999);
console.log(ans1);
list.searchByPos(2);

console.log("Updation at head : ");
list.updateAtHead(8);
list.updateAtHead(10);
list.printList();

console.log("Updation at Position : ");
list.updateAtPos(7,2);
list.printList();
console.log("Deleting at head : ");
list.deleteAtHead();

list.deleteAtTail();

list.deleteAtPos(0);
list.printList();

