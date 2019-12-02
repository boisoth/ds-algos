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
    return this.items.length - 1;
  }
}
