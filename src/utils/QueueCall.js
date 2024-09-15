const Queue = require("./Queue");

const queue = new Queue(5);

queue.push_from_rear(2);
queue.push_from_rear(5);
queue.push_from_rear(4);
queue.push_from_rear(6);

queue.pop_from_front();
queue.push_from_rear(8);
queue.pop_from_front();

if (queue.isempty()) {
    console.log("Queue is underflow");
} else {
    console.log("Queue is not empty");
}

if (queue.isfull()) {
    console.log("Queue is overflow");
} else {
    console.log("Queue is not full");
}

queue.front_ele();
console.log(`Queue contents: ${queue.items}`);
console.log(`Queue size: ${queue.size}`);
