/**
 * Data Structure - Linked List
 * prepend() -- Adds node to head
 * append() -- Adds node to tail
 * printList() -- Prints all node data in an array
 * traverseToIndex() -- Returns node at index
 * insert() -- Inserts at index
 * remove() -- Removes at index
 * reverse() -- Reverses order of linked list
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
    printList() {
      const dataArr = [];
      let currendNode = this.head;
      while (currendNode !== null) {
        dataArr.push(currendNode.data);
        currendNode = currendNode.next;
      }
      return dataArr;
    }
    traverseToIndex(index) {
      let counter = 0;
      let currendNode = this.head;
      while (counter !== index) {
        currendNode = currendNode.next;
        counter++;
      }
      return currendNode;
    }
  }

  const myList = new LinkedList(5);
  myList.prepend(2);
  myList.append(10);
  console.log(myList.printList());
})();
