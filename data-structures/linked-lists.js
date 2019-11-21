/**
 * Data Structure - Linked List
 * prepend()
 * append()
 * printList()
 * insert()
 * reverse()
 */

(function() {
  class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }

  class LinkedList {
    constructor(data) {
      this.head = {
        data: data,
        next: null
      };
      this.tail = this.head;
      this.length = 0;
    }
  }

  const myList = new LinkedList(5);
  console.log(myList);
})();
