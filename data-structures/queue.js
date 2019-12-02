/**
 * Queue Data Structure
 * enqueue
 * dequeue
 * isEmpty
 * printQueue
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
}

// Queue Linked List Implementation
class QueueL {}
