let john = { name: "John" };

// the object can be accessed, john is the reference to it

// overwrite the reference
john = null;

// the object will be removed from memory

let array = [john];

john = null; // overwrite the reference

// the object previously referenced by john is stored inside the array
// therefore it won't be garbage-collected
// we can get it as array[0]

let Sal = { name: "John" };
let num = 21;

let map = new Map();
map.set(Sal, "...");
map.set(num, [1, 2, 3, 4, 5]);

john = null; // overwrite the reference

// john is stored inside the map,
// we can get it by using map.keys()

console.log(map.entries());

// with weakmap when John is removed from memory John will be removed from the weakmap which is the contrary with the map
let weakMap = new WeakMap();

let obj = {};

weakMap.set(obj, "ok"); // works fine (object key)

// can't use a string as the key
// weakMap.set("test", "Whoops"); // Error, because "test" is not an object

// WeekMap methods
// weakMap.get(key)
// weakMap.set(key, value)
// weakMap.delete(key)
// weakMap.has(key)

// 📁 visitsCount.js
let visitsCountMap = new Map(); // map: user => visits count
/**
 * CountUser is a function to keep track of the user that visite the website and delete with click
 *
 * @param {*} user
 */
// increase the visits count
function countUser(user) {
  let count = visitsCountMap.get(user) || 0;
  visitsCountMap.set(user, count + 1);
}

john = { name: "John" };
countUser(john); // count his visits
// later john leaves us
john = null;
console.log(visitsCountMap);

/**
 * Weak set behave like weakmap
 * It is analogous to Set, but we may only add objects to WeakSet (not primitives).
 * An object exists in the set while it is reachable from somewhere else.
 * Like Set, it supports add, has and delete, but not size, keys() and no iterations.
 */
let visitedSet = new WeakSet();

let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

visitedSet.add(john); // John visited us
visitedSet.add(pete); // Then Pete
visitedSet.add(john); // John again

// visitedSet has 2 users now

// check if John visited?
alert(visitedSet.has(john)); // true

// check if Mary visited?
alert(visitedSet.has(mary)); // false

john = null;

// visitedSet will be cleaned automatically
