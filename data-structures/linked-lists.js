/**
 * Data Structure - Linked List
 * prepend() -- Adds node to head √
 * append() -- Adds node to tail √
 * printList() -- Prints all node data in an array √
 * traverseToIndex() -- Returns node at index √
 * insert() -- Inserts at index √
 * remove() -- Removes at index √
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
      return this.printList();
    }
    append(data) {
      const node = new Node(data);
      this.tail.next = node;
      this.tail = node;
      this.length++;
      return this.printList();
    }
    printList() {
      const dataArr = [];
      let currendNode = this.head;
      while (currendNode !== null) {
        dataArr.push(currendNode.data);
        currendNode = currendNode.next;
      }
      return console.log(dataArr);
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
    insert(data, index) {
      const holdingPointer = this.traverseToIndex(index - 1);
      const newNode = new Node(data);
      newNode.next = holdingPointer.next;
      holdingPointer.next = newNode;
      this.length++;
      return this.printList();
    }
    remove(index) {
      const holdingPointer = this.traverseToIndex(index - 1);
      const unwanted = holdingPointer.next;
      holdingPointer.next = unwanted.next;
      unwanted.next = null;
      this.length--;
      return this.printList();
    }
    reverse() {
      let previous = null;
      let current = this.head;
      let following = this.head;
      this.tail = this.head;

      while (current) {
        let following = current.next;
        current.next = previous;
      }
    }
  }

  const myList = new LinkedList(5);
  myList.append(6);
  myList.append(7); // [5, 6, 7]
  myList.reverse();

  // For inserting nodes and removing etc.
  // myList.prepend(2);
  // myList.append(10);
  // myList.append(15);
  // myList.append(20);
  // myList.insert(107, 3); // 10
  // myList.remove(3); // [ 5, 2, 10, 15, 20]
})();
