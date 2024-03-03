// // Задание 1
// for (let z = 0; z <= 100; z++) {
//   console.log(z);
// }

// // Задание 2
// for (let x = 0; x <= 100; x++) {
//   if (x % 2 === 0) {
//     console.log(x);
//   }
// }

// // Задание 3
// let total = 0;

// for (let c = 0; c <= 100; c++) {
//   if (c % 2 === 0) {
//     total = total + c;
//   }
// }
// console.log(total);

// // Задание 4
// const nums = [10, 20, 30, 40, 50];
// nums.push(99);
// console.log(nums);

// // Задание 5
// const getLastValue = [1, 20, 17, 6, 5, -4, 31];
// let n = getLastValue.length - 1;
// console.log(getLastValue[n]);

// // Задание 6
// for (let v = 5; v >= 0; v--) {
//   console.log(v);
// }

// // Задание 7
// let z = 0;
// while (z < 100) {
//   z++;
//   console.log(z);
// }

// // Задание 8
// let x = 0;
// while (x <= 100) {
//   x++;
//   if (x % 2 === 0) {
//     console.log(x);
//   }
// }

// // Задание 9
// const numsTwo = [1, 2, 3, 4, 5];
// for (let x = 0; x <= 4; x++) {
//   numsTwo[x] = numsTwo[x] + 1;
// }
// console.log(numsTwo);

// // Задание 10
// let addNum = (array, plus) => {
//   return array.map((number) => number + plus);
// };

// let numbers = [1, 2, 3, 4, 5];

// console.log(addNum(numbers, 5));

// // Задание 11
// let arr = ["hello", "world", "search", "good"];
// function inMassiv(l, p) {
//   for (let s = 0; s < arr.length; s++) {
//     if (arr[s] === p) {
//       console.log(`индекс ${p} ${s} по счету в массиве`);
//       return s;
//     } else if (arr.includes(p) === false) {
//       console.log(`индекс ${p} не в массиве`);
//       break;
//     }
//   }
// }
// inMassiv([ "search");

// // Задание 12
// const countPositive = [5, -8, 9, 3, -2, 15, -7, 11, 10, 18];

// const bigZero = () => {
//   let p = 0;
//   for (let l = 0; l < countPositive.length; l++) {
//     if (countPositive[l] > 0) {
//       p = p + 1;
//     }
//   }
//   console.log(p);
// };
// bigZero();

// // Задание 13
// function removeItem(arr, num) {
//   let store = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] != num) {
//       store.push(arr[i]);
//     }
//   }

//   return store;
// }

// console.log(removeItem(["egg", "egg", "apple", "egg", "ham"], "egg"));

// // Задание 14
// let numbers = ["green", "red", "blue", "red"];

// function findIndex(p) {
//   for (let s = 0; s < numbers.length; s++) {
//     if (numbers[s] === p) {
//       console.log(s);
//       return s;
//     } else if (numbers.includes(p) === false) {
//       console.log("-1");
//       break;
//     }
//   }
// }
// findIndex("red");

// // Задание 15
// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = [4, 5, 6, 5, 5];
// const arr3 = [];
// if (arr1.length >= arr2.length) {
//   var count = arr1.length;
// } else {
//   var count = arr2.length;
// }
// for (var i = 0; i < count; i++) {
//   if (arr2[i] === undefined) {
//     arr2.push(0);
//   } else {
//     if (arr1[i] === undefined) {
//       arr1.push(0);
//     }
//   }
//   arr3.push(arr1[i] + arr2[i]);
// }
// console.log(arr3);

// // Задание 16
// let minMax = [5, -8, 9, 3, -2, 15, -7, 11];

// function findMax(minMax) {
//   let max = minMax[0];
//   for (let num of minMax) {
//     if (max < num) {
//       max = num;
//     }
//   }
//   return max;
// }
// function findMin(minMax) {
//   let min = minMax[0];
//   for (let num of minMax) {
//     if (min > num) {
//       min = num;
//     }
//   }
//   return min;
// }
// console.log(`max: ${findMax(minMax)}, min: ${findMin(minMax)}.`);

// // Задание 17
// let arr1 = ["grape", "apple", "apple", "grape"];
// let controlObj = {};
// let count,
//   max = 0;
// let output = "";

// for (let i = 0; i < arr1.length; i++) {
//   if (controlObj[arr1[i]] !== true) {
//     for (let j = i; j < arr1.length; j = j + 1) {
//       if (arr1[i] === arr1[j]) {
//         count++;
//       }
//     }
//     output = arr1[i] + " повторяется " + count + " раз";
//     count = 0;
//   }

//   controlObj[arr1[i]] = true;
// }

// console.log(output);
