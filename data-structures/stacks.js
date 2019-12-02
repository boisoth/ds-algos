/**
 * Stacks
 * push
 * pop -- return and remove last element
 * peek -- return last element
 * isEmpty -- return if no length
 * printStack -- print all items in stack
 */

class Stack {
  constructor() {
    this.items = [];
  }
  push(item) {
    this.items.push(item);
  }
  pop() {
    if (!this.items.length) {
      return "No items";
    }
    return this.items.pop();
  }
  peek() {
    if (!this.items.length) {
      return "No items";
    }
    return this.items[this.items.length - 1];
  }
  isEmpty() {
    return this.items.length === 0;
  }
  printStack() {
    return this.items || "Empty";
  }
}

const myStack = new Stack();
console.log(myStack.isEmpty());
myStack.push(1);
myStack.push(5);
myStack.push(10);
console.log(myStack.peek());
