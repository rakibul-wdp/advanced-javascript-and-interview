/**
 * 1. how can we swap values?
 * [1, 2, 3, 4, 5] -> [5, 2, 3, 4, 1]
 */
// let array = [1, 2, 3, 4, 5];

// temp variable
// let temp = array[0];
// array[0] = array[4];
// array[4] = temp;

// console.log(array);

// array destructuring
// [array[0], array[4]] = [array[4], array[0]];
// console.log(array);

// let a = 1;
// let b = 2;
// [a, b] = [b, a];
// console.log(a, b);

// math
// b = a + (a = b) - b;
// console.log(a, b);

// 2. how to copy things from clipboard

/**
 * 3. destructuring aliases
 * const language ={name: "JavaScript", founded: "1995", founder: "Brendan Eich"}
 */

// const language = {
//   name: "JavaScript",
//   founded: 1995,
//   founder: "Brendan Eich",
// };

// const { name: languageName, founder: creatorName } = language;

// console.log(languageName, creatorName);

/**
 * 4. Get value as data type
 * <input id="number" value="123" type="number" />
 */

/**
 * 5. Remove duplicate from array
 * [1, 2, 3, 5, 5] -> [1, 2, 5]
 */

// const array =[1, 2, 2, 2, 3, 5, 6, 5];

// console.log([...new Set(array)]);

/**
 * 6. Compare two arrays by value
 * compare([1, 3], [1, 5]) -> false
 */

// const hasSameElements = (a, b) => {
//   return a.length === b.length && a.every((v, i) => v === b[i]);
// };

// console.log(hasSameElements([1, 3], [1, 3]));

/**
 * 7. Shuffling an array
 * [1, 2, 3, 4, 5] -> [2, 1, 4, 3, 5]
 */

// const numbers = [1, 2, 3, 4, 5, 6];

// console.log(numbers.sort(() => Math.random() - 0.5));

/**
 * 8. using comma operator
 * x = (2, 3) -> what is the output of x here?
 */

let x = 1;
x = (x++, x);

console.log(x);

let y = (2, 3);
console.log(y);

let a = [[1, 2, 3, 4], [3, 4, 5], [5, 6], [7]];

for (let i = 0, j = 3; i <= 3; i++, j--) {
  console.log("a[" + i + "][" + j + "] = " + a[i][j]);
}
