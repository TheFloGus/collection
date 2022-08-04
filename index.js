class IndexedMap {
  set(key, value) {
    this[key] = {
      value,
      index: Object.keys(this).length,
    };
  }

  has(key) {
    return Object.keys(this).includes(key);
  }

  hasIndex(index) {
    return Object.values(this).find((el) => {
      return el.index === index;
    })
      ? true
      : false;
  }

  get(key){
    return this[key] ? this[key] : null;
  }
}

let collection = new IndexedMap();
collection.set("name", "Eugene");
collection.set("name1", "Vika");
collection.set("name2", "Masha");
collection.set("name3", "Dima");
console.log(collection.get('name0'));
