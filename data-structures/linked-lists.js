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
      this.length = 1;
    }
    prepend(data) {
      const node = new Node(data);
      node.next = this.head;
      this.head = node;
      this.length++;
    }
    append(data) {
      const node = new Node(data);
      this.tail.next = node;
      this.tail = node;
      this.length++;
    }
  }

  const myList = new LinkedList(5);
  myList.prepend(2);
  myList.append(10);
  console.log(myList);
})();
