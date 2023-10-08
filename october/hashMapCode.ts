class MyHashMap {
  map: Record<string, number>;
  constructor() {
    this.map = {};
  }

  put(key: number, value: number): void {
    this.map[key.toString()] = value;
  }

  get(key: number): number {
    return this.map.hasOwnProperty(key.toString())
      ? this.map[key.toString()]
      : -1;
  }

  remove(key: number): void {
    if (this.map.hasOwnProperty(key.toString())) {
      delete this.map[key.toString()];
    }
  }
}

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */
