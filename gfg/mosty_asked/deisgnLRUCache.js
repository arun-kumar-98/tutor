class LRUCache {
  //Constructor for initializing the cache capacity with the given value.
  constructor(cap) {
    //define doubly linked list
    this.dll = []; //doubly list (Array)
    //define cache
    this.cache = new Map();
    this.capacity = cap;
  }

  /**
   * @param {number} key
   * @returns {number}
   */

  //Function to return value corresponding to the key.
  get(key) {
    if (!this.cache.has(key)) {
      return -1;
    }
    //update the recent use

    this.recenctlyUsedElements(key);
    return this.cache.get(key)[1];
  }

  /**
   * @param {number} key
   * @param {number} value
   */

  //Function for storing key-value pair.
  set(key, value) {
    if (this.cache.has(key)) {
      this.cache.set(key, [0, value]);
      //mark at recent used
      this.recenctlyUsedElements(key);
    } else {
      this.dll.unshift(key); //add to the front
      this.cache.set(key, [0, value]);
      this.capacity--;

      //check if capacity

      if (this.capacity < 0) {
        const key_tobe_remove = this.dll.pop();
        console.log("keys ", key_tobe_remove);

        this.cache.delete(key_tobe_remove);
        this.capacity++;
      }
    }
  }

  recenctlyUsedElements(key) {
    let index = this.dll.indexOf(key);
    if (index !== -1) {
      //remove from  current position
      this.dll.splice(index, 1);
      //add the key to front of the array
      this.dll.unshift(key);
      //update key in dll
      this.cache.set(key, [0, this.cache.get(key)[1]]);
    }
  }
}

//SET 1 2 SET 2 3 SET 1 5 GET 2 SET 3 4 SET 2 4 SET 4 5 GET 2

const lru = new LRUCache(2);
lru.set(1, 2);
lru.set(2, 3);
lru.set(1, 5);

lru.set(3, 4);
lru.set(2, 4);
lru.set(4, 5);

console.log(" GET 2: ", lru.get(2));

console.log(lru);
