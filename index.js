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

  get(key) {
    return this[key] ? this[key] : null;
  }

  remove(key) {
    Object.keys(this).forEach((el) => {
      if (this[el].index > this[key].index) this[el].index -= 1;
    });
    delete this[key];
    return this;
  }

  size() {
    return Object.keys(this).length;
  }

  uniq() {
    let values = Object.values(this).map((el) => el.value);
    let uniqueValues = [...new Set(values)];
    return uniqueValues;
  }

  removeAt(index, count = 1){
    for (let i = 0; i < count; i++){
      let key = Object.keys(this).find(el => this[el].index === index)
      delete this[key]
      index++
    }
   
    Object.keys(this).forEach((el, index) => {
      this[el].index = index
    })
    return this;
  }
}

let collection = new IndexedMap();
collection.set("name0", "Eugene");
collection.set("name1", "Vika");
collection.set("name2", "Masha");
collection.set("name3", "Dima");
collection.set("name4", "Nate");
collection.set("name5", "John");
collection.set("name6", "Eugene");
collection.set("name7", "Jeane");
