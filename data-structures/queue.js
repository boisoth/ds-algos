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

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// Queue Linked List Implementation
class QueueL {
  constructor(data) {
    this.head = {
      data: data,
      next: null
    };
    this.tail = this.head;
    this.length = 0;
  }
  enqueue(data) {
    const node = new Node(data);
    this.tail.next = node;
    this.length++;
    return;
  }
  dequeue() {
    const holdingPointer = this.head.next;
    this.head = holdingPointer;
    this.length--;
    return;
  }
  // size() {}
  // printQueue() {}
  // isEmpty() {}
}

const queueList = new QueueL();
queueList.enqueue(50);
queueList.enqueue(60);
console.log(queueList);
