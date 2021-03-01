// This is a way to understand how the for of works under the wood

let range = {
  from: 1,
  to: 20,
};

// 1. call to for of  initially calls this
range[Symbol.iterator] = function () {
  // ..it returns the iterator object:
  // 2. Onward, for ... of works only with this iterator, asking it for next values
  return {
    current: this.from,
    last: this.to,

    // 3. next() is called on each iteration by the for ...of loop
    next() {
      // 4. it should returnthe value as an object {done:..., value:...}
      if (this.current <= this.last) {
        return {
          done: false,
          value: this.current++,
        };
      } else {
        return {
          done: true,
        };
      }
    },
  };
};

for (let num of range) {
  console.log(num);
}

// OR===========================================================================================================================
let range = {
  from: 1,
  to: 5,

  [Symbol.iterator]() {
    this.current = this.from;
    return this;
  },

  next() {
    if (this.current <= this.to) {
      return { done: false, value: this.current++ };
    } else {
      return { done: true };
    }
  },
};

for (let num of range) {
  alert(num); // 1, then 2, 3, 4, 5
}

/**
 * Both iterables and array-likes are usually not arrays, they don’t have push, pop etc.
 * That’s rather inconvenient if we have such an object and want to work with it as with an array.
 * E.g. we would like to work with range using array methods. How to achieve that?
 *
 * There’s a universal method Array.from that takes an iterable or array-like value and makes a “real” Array from it.
 * Then we can call array methods on it.
 */

let arrayLike = {
  0: "Hello",
  1: "World",
  length: 2,
};

let arr = Array.from(arrayLike); // convert this array like into an array
// square each number
// let arr = Array.from(range, num => num * num);

// alert(arr); // 1,4,9,16,25
