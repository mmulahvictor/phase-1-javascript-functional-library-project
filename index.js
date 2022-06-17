const standardizeInput = (collection) => (collection instanceof Array) ? collection.slice() : Object.values(collection);
  
  const myEach = (collection, callback) => {
    const newCollection = standardizeInput(collection);
  
    for (let idx = 0; idx < newCollection.length; idx++) {
      callback(newCollection[idx]);
    }
    return collection;
  }
  
  const myMap = (collection, callback) => {
    const newCollection = standardizeInput(collection);
  
    const newArr = [];
  
    for (let idx = 0; idx < newCollection.length; idx++) {
      newArr.push(callback(newCollection[idx]));
    }
    return newArr;
  }
  
  const myReduce = (collection, callback, acc) => {
    let newCollection = standardizeInput(collection);
  
    if (!acc) {
      acc = newCollection[0];
      newCollection = newCollection.slice(1);
    }
  
    const len = newCollection.length;
  
    for (let i = 0; i < len; i++) {
      acc = callback(acc, newCollection[i], newCollection);
    }
    return acc;
  }
  
  const myFind = (collection, predicate) => {
    const newCollection = standardizeInput(collection);
  
    for (let idx = 0; idx < newCollection.length; idx++) {
      if (predicate(newCollection[idx])) return newCollection[idx];
    }
    return undefined;
  }
  
  const myFilter = (collection, predicate) => {
    const newCollection = standardizeInput(collection);
  
    const newArr = [];
  
    for (let idx = 0; idx < newCollection.length; idx++) {
      if (predicate(newCollection[idx])) newArr.push(newCollection[idx]);
    }
    return newArr;
  }
  
  const mySize = (collection) => {
    const newCollection = standardizeInput(collection);
    return newCollection.length;
  }
  
  const myFirst = (arr, stop=false) => (stop) ? arr.slice(0, stop) : arr[0];
  
  const myLast = (arr, start=false) => (start) ? arr.slice(arr.length-start, arr.length) : arr[arr.length-1];
  
  const mySortBy = (arr, callback) => {
    const newArr = [...arr];
    return newArr.sort((a, b) => {
      if (callback(a) > callback(b)) {
        return 1;
      } else if (callback(b) > callback(a)) {
        return -1;
      } else {
        return 0;
      }
    });
  }
  
  const unpack = (receiver, arr) => {
    for (let val of arr) {
      receiver.push(val);
    }
  }
  
  const myFlatten = (collection, shallow, newArr=[]) => {
    if (shallow) {
      for (let val of collection) {
        Array.isArray(val) ? unpack(newArr, val) : newArr.push(val);
      }
    } else {
      
      for (let val of collection) {
        if (Array.isArray(val)) {
          
          myFlatten(val, false, newArr);
        } else {
          newArr.push(val);
        }
      }
    }
    return newArr;
  }
  
  
  const myKeys = (obj) => {
    const keys = [];
    for (let key in obj){
      keys.push(key);
    }
    return keys;
  }
  
  const myValues = (obj) => {
    const values = [];
    for (let key in obj){
      values.push(obj[key]);
    }
    return values;
  
  }