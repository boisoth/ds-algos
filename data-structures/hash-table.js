/**
 * Hash Table Array Implementation
 */

class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }
  _hash(key) {
    let hash = 0;
    for (let char of key) {
      hash = (hash + key.charCodeAt(char) * char) % this.data.length;
    }
    return hash;
  }
  set(key, value) {
    let address = this._hash(key);

    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value]);
  }
  get(key) {
    let address = this._hash(key);
    return this.data[address] || false;
  }
}
