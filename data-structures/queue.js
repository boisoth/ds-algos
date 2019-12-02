/**
 * Queue Data Structure
 * enqueue - add to the end
 * dequeue - remove from the front
 * isEmpty - returns true if no length
 * printQueue - if queue is not empty, return queue as an array
 *
 * Implementation
 * Array enqueue O(1), add to head O(n)
 * Linked Lists O(1), add to head O(1)
 */

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// Queue Array Implementation
class QueueA {
  constructor() {
    this.data = [];
  }
  printQueue() {
    if (!this.data.length) {
      return "Queue is empty";
    }
    return this.data;
  }
  enqueue(data) {
    this.data.push(data);
    return this.printQueue();
  }
  dequeue() {
    this.data.shift();
    return this.printQueue();
  }
}

const myQueue = new QueueA();
myQueue.enqueue(20);
myQueue.enqueue(30);
myQueue.enqueue(40);
myQueue.dequeue();
console.log(myQueue.printQueue());

// Queue Linked List Implementation
class QueueL {
  constructor() {}
  enqueue(data) {}
  dequeue() {}
  size() {}
  printQueue() {}
  isEmpty() {}
}
