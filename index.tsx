// function htmlspecialchars(formData: string): string {
//   const replace = formData.split('').map(char => {
//     if (char === '<') return '&lt;'
//     if (char === '>') return '&gt;'
//     if (char === '&') return '&amp;'
//     if (char === '"') return '&quot;'
//     if (char === "'") return '&#039;'
//     return char;
//   }).join()
//   return replace;
// }

// htmlspecialchars("<h2>Hello World</h2>")

// function noBoringZeros(n: number): number {
//   for (let i = String(n).length - 1; i > 0; i--)
//     if (String(n)[i] !== '0') {
//       return n
//     } else {
//       n = Number(String(n).slice(0, -1))
//     }
//   return n
// }



// console.log(noBoringZeros(12300));

// function arr2bin(arr: any[]): string {
//   const sum = arr.reduce((acc, el) => {
//     acc += el
//     return acc;
//   }, 0)
//   return sum.toString(2)
// }
// arr2bin([1, 2])

// function bestFriend(txt: string, a: string, b: string): boolean {
//   const arr = []
//   const index = txt.split('').reduce((acc: number[], el: string, i: number) => {
//     if (el === a) {
//       acc.push(i)
//     }
//     return acc
//   }, [])

//   const indexb = txt.split('').reduce((acc: number[], el: string, i: number) => {
//     if (el === b) {
//       acc.push(i);
//     }
//     return acc;
//   }, []);

//   for (let i = 0; i < index.length; i++) {
//     console.log(txt[index[i]] === a);
//     console.log(txt[indexb[i]] === b);
//     if ((txt[index[i]] === a) && (txt[index[i] + 1] === b)) {
//       arr.push(true)
//     } else {
//       arr.push(false)
//     }
//   }

//   return arr.includes(false) ? false : true;
// }


// console.log(bestFriend('we found your dynamite', 'd', 'y'));

// In a factory a printer prints labels for boxes.For one kind of boxes the printer has to use colors which, for the sake of simplicity, are named with letters from a to m.

// The colors used by the printer are recorded in a control string.For example a "good" control string would be aaabbbbhaijjjm meaning that the printer used three times color a, four times color b, one time color h then one time color a...
// Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string is produced e.g.aaaxbbbbyyhwawiwjjjwwm with letters not from a to m.

// You have to write a function printer_error which given a string will return the error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string.Don't reduce this fraction to a simpler expression.

// The string has a length greater or equal to one and contains only letters from ato z.

// Examples
// s = "aaabbbbhaijjjm"
// printer_error(s) => "0/14"

// s = "aaaxbbbbyyhwawiwjjjwwm"
// printer_error(s) => "8/22"

// export function printerError(s: string): string {
//   return `${s.split('').filter(el => el.charCodeAt(0) > 109).length}/${s.length}`
// }

// printerError("aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz")


// export function vowelIndices(word: string): number[] {
//   return word.toLowerCase().split('').reduce((acc: number[], el: string, i: number) => {
//     if (['a', 'e', 'i', 'o', 'u', 'y'].includes(el)) {
//       acc.push(i + 1)
//     }
//     return acc
//   }, [])
// }

// function unluckyDays(year: number): number {
//   const arr: number[] = []
//   for (let i = 1; i <= 12; i++) {
//     i < 10 ? arr.push(new Date(`${year}-0${i}-13`).getDay()) : arr.push(new Date(`${year}-${i}-13`).getDay())
//   }
//   return arr.filter(el => el === 5).length
// }

// unluckyDays(2015)

// export function switcheroo(x: string): string {
//   return x.split('').map(el => el === 'a' ? el = 'b' : el === 'b' ? el = 'a' : el = 'c').join('')
// }


// var addTwoNumbers = function (l1: number[], l2: number[]) {
//   // return (Number(l1.reverse().join('')) + Number(l2.reverse().join(''))).toString().split('').reverse().map(Number)
//   const lr1: number[] = []
//   const lr2: number[] = []
//   const sum: number[] = []
//   for (let i = l1.length - 1; i >= 0; i--) {
//     lr1.push(l1[i])
//   }

//   for (let i = l2.length - 1; i >= 0; i--) {
//     lr2.push(l2[i])
//   }

//   const sumReversed = (Number(lr1.join('')) + Number(lr2.join(''))).toString()

//   for (let i = sumReversed.length - 1; i >= 0; i--) {
//     sum.push(Number(sumReversed[i]))
//   }
//   return sum
// };

// addTwoNumbers([2, 4, 3], [5, 6, 4])
// addTwoNumbers([0], [0])
// addTwoNumbers([9, 9, 9, 9, 9, 9, 9], [9, 9, 9, 9])


// export function adjacentElementsProduct(arr: number[]): number {
//   return arr.reduce((acc: number[], el: number, i: number) => {
//     if (arr[i + 1]) {
//       acc.push(el * arr[i + 1])
//     }
//     return [Math.max(...acc)]
//   }, [])[0]
// }

// console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));


// export function productArray(nums: number[]): number[] {
//   return nums.map(el => nums.reduce((acc: number, num: number) => acc * num) / el)
// }


// console.log(productArray([3, 27, 4, 2]));


// export function incrementer(nums: number[]) {
//   return nums.map((el, i) => (el + i + 1) % 10)
// }

// console.log(incrementer([4, 6, 7, 1, 3]));

// export function sumCubes(n: number): number {
//   let result = 0
//   for (let i = 1; i <= n; i++) {
//     result += i ** 3
//   }
//   return result
// }

// export function encode(str: String, n: number) {
//   const leters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
//   const sometrash = n.toString().repeat(100)
//   const strTynums = str.split('').map(el => leters.indexOf(el) + 1)
//   const a = sometrash.slice(0, strTynums.length).split('').map(Number)
//   return a.map((el, i) => el + strTynums[i])
// }
// console.log(encode("scout", 1939));
// =======
// export function sumCubes(n: number): number {
//   let result = 0
//   for (let i = 1; i <= n; i++) {
//     result += i ** 3
//   }
//   return result
// }


// export function maxTriSum(nums: number[]) {
//   const maxArr = nums.filter((el, i) => (nums.indexOf(el) === i)).sort((a: number, b: number) => a - b)
//   return maxArr.length > 3 ? maxArr.splice(-3).reduce((acc: number, el: number) => acc + el, 0) : maxArr.reduce((acc: number, el: number) => acc + el, 0)
// }

// console.log(maxTriSum([-13, -50, 57, 13, 67, -13, 57, 108, 67]))

// String.prototype.toJadenCase = function () {
//   return this.split(' ').map(el => el[0].toUpperCase() + el.slice(1)).join(' ')
// }

// interface String {      // Declaration needed, don't remove it
//   toJadenCase(): string;
// }

// console.log('asdfaksodjmasoidnasoid oaismdfoias mdoiamdiomas imadoiamdoimadosima'.toJadenCase());
// export function sumTriangularNumbers(n: number): number {
//   let sum: number = 0
//   for (let i = 0; i <= n; i++) {
//     sum += (i * (i + 1)) / 2
//   }
//   return sum;
// }

// console.log(sumTriangularNumbers(943));


// function potatoes(p0: number, w0: number, p1: number): number {
//   return Math.trunc(w0 * (100 - p0) / (100 - p1))
// }

// console.log(potatoes(93, 129, 91));


// export const head = (arr: number[]) => {
//   console.log("head")
//   return arr[0]
// }
// export const tail = (arr: number[]) => {
//   console.log("tail")
//   return arr.splice(1, arr.length)
// }
// export const init = (arr: number[]) => {
//   console.log("init")
//   return arr.splice(0, arr.length - 1)
// }
// export const last = (arr: number[]) => {
//   console.log("last")
//   return arr[arr.length - 1]
// }
// export const head = (a: number[]) => a[0];
// export const tail = (a: number[]) => a.slice(1);
// export const init = (a: number[]) => a.slice(0, a.length - 1);
// export const last = (a: number[]) => a[a.length - 1];

// console.log(head([5, 1]))
// console.log(tail([1])); (tail([1]))
// console.log(init([1, 5, 7, 9]))
// console.log(last([7, 2]))
// console.log(1);

// export function evaporator(content: number, evapPerDay: number, threshold: number): number {
//   let day = 0
//   for (let i = content; i >= (content * (threshold / 100)); i -= (i * (evapPerDay / 100))) {
//     day++
//   }
//   return day
// }
// //22 29
// evaporator(10, 10, 10)
// console.log(evaporator(10, 10, 5))

// This program tests the life of an evaporator containing a gas.

// We know the content of the evaporator(content in ml), the percentage of foam or gas lost every day(evap_per_day) and the threshold(threshold) in percentage beyond which the evaporator is no longer useful.All numbers are strictly positive.

// The program reports the nth day(as an integer) on which the evaporator will be out of use.

// export function toTime(seconds: number): string {

//   const h = Math.floor(seconds / 3600)
//   const m = Math.floor(((seconds / 3600) - h) * 60)
//   return `${h} hour(s) and ${m} minute(s)`
// }
// console.log(toTime(323500));


// export class Kata {
//   static findLongest(array: number[]): number {
//     const arrL = array.map((el) => Number(el.toString().length))
//     return array[arrL.findIndex((_, i) => +array[i].toString().length === Math.max(...arrL))]
//   }
// }

// console.log(Kata.findLongest([1, 10, 100]));


// export function maxGap(nums: number[]): number {
//   console.log(nums.sort((a, b) => a - b));
//   return Math.max(...nums.sort((a, b) => a - b).reduce((acc: number[], el: number, i: number) => {
//     let gap = 0
//     if ((el < 0) && (nums[i + 1] < 0)) {
//       gap = (el < nums[i + 1]) ? Math.abs(el) + nums[i + 1] : Math.abs(el) + nums[i + 1]
//       console.log('1', gap);
//     } else if ((el > 0) && (nums[i + 1] > 0)) {
//       gap = (el > nums[i + 1]) ? el - nums[i + 1] : nums[i + 1] - el
//     }
//     else if ((el > 0) && (nums[i + 1] < 0)) {
//       gap = el + nums[i + 1]
//       console.log('3', gap);
//     } else if ((el < 0) && (nums[i + 1] >= 0)) {
//       gap = Math.abs(el) + nums[i + 1]
//       console.log('4', gap);
//     }
//     console.log(gap);
//     acc.push(gap)
//     console.log(acc);
//     return acc
//   }, []))
// }
// console.log(maxGap([-498, 0]));


// export function overTheRoad(address: number, n: number): number {
//   const l: number[] = []
//   const r: number[] = []
//   for (let i = 1; i <= n * 2; i += 1) {
//     i % 2 !== 0 ? l.push(i) : r.push(i)
//   }
//   const rI = l.findIndex(el => el === address)
//   console.log(rI);
//   // return r.reverse()[rI]
//   return r[r.length - rI - 1]
// }

// console.log(overTheRoad(1, 3));

// export function lastSurvivor(letters: string, coords: number[]): string {
//   return coords.reduce((acc: string[], el: number) => {
//     acc.splice(el, 1)
//     return acc
//   }, letters.split(''))[0]
// }

// console.log(lastSurvivor('foiflxtpicahhkqjswjuyhmypkrdbwnmwbrrvdycqespfvdviucjoyvskltqaqirtjqulprjjoaiagobpftywabqjdmiofpsr', [8, 59, 52, 93, 21, 40, 88, 85, 59, 10, 82, 18, 74, 59, 51, 47, 75, 49, 23, 56, 1, 33, 39, 33, 34, 44, 25, 0, 51, 25, 36, 32, 57, 10, 57, 12, 51, 55, 24, 55, 31, 49, 6, 15, 10, 48, 27, 29, 38, 30, 35, 42, 23, 32, 9, 39, 39, 36, 8, 29, 2, 33, 14, 3, 13, 25, 9, 25, 18, 10, 1, 2, 20, 8, 2, 11, 5, 7, 0, 10, 10, 8, 12, 3, 5, 1, 7, 7, 5, 1, 4, 0, 4, 0, 0, 1])); //z

// export function bump(x: string): string {
//   return x.split('_').join('').length < 15 ? "Woohoo!" : "Car Dead"
// }

// console.log(bump("nnn_n__n_n___nnnnn___n__nnn__"));
// console.log(bump("nnnnnnnnnnnnnnnnnnnnn"));

// export function stringTransformer(str: string) {
//   return str.split('').map(el => el === el.toLowerCase() ? el.toUpperCase() : el.toLowerCase()).join('').split(' ').reverse().join(' ')
// }

// export function meeting(s: string): string {
//   return s.toUpperCase().split(";").map(el => `(${el.split(":").reverse().join(', ')})`).sort().join('')
// }
// export function minimumSteps(nums: number[], value: number) {
//   const a = nums.sort((a: number, b: number) => a - b)
//   let sum = 0
//   for (let i = 0; i < a.length; i++) {
//     sum += a[i]
//     if (sum >= value) {
//       return i
//     }
//   }
// }

// console.log(minimumSteps([10, 9, 9, 8], 17));

// export const mxdiflg = (a1: string[], a2: string[]): number => {
//   return a1.length === 0 || a2.length === 0 ? -1 : Math.abs(a1.sort((a, b) => a.length - b.length)[0].length - a2.sort((a, b) => b.length - a.length)[0].length) > Math.abs(a2.sort((a, b) => a.length - b.length)[0].length - a1.sort((a, b) => b.length - a.length)[0].length) ? Math.abs(a1.sort((a, b) => a.length - b.length)[0].length - a2.sort((a, b) => b.length - a.length)[0].length) : Math.abs(a2.sort((a, b) => a.length - b.length)[0].length - a1.sort((a, b) => b.length - a.length)[0].length)
// }
// let s1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"];
// let s2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"];

// console.log(mxdiflg(s1, s2));

// export const gps = (s:number, xs:number[]):number => {
//   const delta_distance = Math.floor(xs
//     .reduce((acc: number[], el: number, i: number, arr: number[]) => {
//     acc.push((arr[i + 1] - el))
//     return acc
//   }, [])
//     .map(el => (3600 * el) / s)
//     .reduce((acc: number, el: number, i: number, arr: number[]) => {
//   if (!el) {
//     return acc / (arr.length - 1)
//   }
//   acc += el
//   return acc
//    }, 0))
//    console.log(delta_distance);
//   return delta_distance
// }
// gps(20, [0.0, 0.23, 0.46, 0.69, 0.92, 1.15, 1.38, 1.61])
// gps(12, [0.0, 0.11, 0.22, 0.33, 0.44, 0.65, 1.08, 1.26, 1.68, 1.89, 2.1, 2.31, 2.52, 3.25])
// gps(20, [0.0, 0.18, 0.36, 0.54, 0.72, 1.05, 1.26, 1.47, 1.92, 2.16, 2.4, 2.64, 2.88, 3.12, 3.36, 3.6, 3.84])

// export function factorial(n: number) {
//   const arr: number[] = []
// for(let i = 1; i <= n; i++){
//    arr.push(i)
// }
//  return arr.reduce((acc: number, el: number)=>{
//   acc*=el
//    return acc
//  })
// }

// var SequenceSum = (function () {
//   function SequenceSum() { }

//   SequenceSum.showSequence = function (count: number) {
//     // for
//     let sum: number[] = []
//     let start = 0
//     while (start <= count) {
//       sum.push(start)
//       start++
//     }
//     if (count === 0) return '0=0'
//     if (count < 0) {
//       return count + '<' + 0
//     }
//     return sum.join('+') + ' = ' + sum.reduce((acc: number, el: number) => { acc += el; return acc }, 0)

//   };

//   return SequenceSum;

// })();

// function sumMul(n: number, m: number) {
//   let sum = 0
//   for (let i = n; i < m; i += n){
//     sum += i
//   }
//   return sum
// }


// export function tidyNumber(num: number): boolean {
//   // your code here
//   return Number(`${num}`.split('').map(el => +el).sort((a, b) => a - b).join('')) === num
// }


// export const towerBuilder = (nFloors: number): string[] => {
//   const arr: string[] = []
//   for (let i = 1; i <= nFloors; i++) {
//     arr.push(' '.repeat(nFloors - i) + '*'.repeat(i * 2 - 1) + ' '.repeat(nFloors - i))
//   }
//   return arr
// }

// towerBuilder(1)
// towerBuilder(2)
// towerBuilder(3)

// export function dashatize(num: number): string {
//   const res = num
//     .toString()
//     .split('')
//     .map(el => {
//       if (+el % 2 !== 0) {
//         return `-${el}-`
//       }
//       return el
//     })
//     .join('')
//     .split('')
//     .reduce((acc: string, el: string) => {
//       if (acc === '-') return el
//       if (el === '-' && acc[acc.length - 1] === '-') {
//         return acc
//       }
//       return acc + el
//     })
//   if (res[res.length - 1] === '-') return res.slice(0, res.length - 1)
//   return res
// };

// console.log(dashatize(97431));

// interface Student {
//   name: string;
//   age: number;
//   city: string;
// }

// const students: Student[] = [
//   {
//     name: 'asdasdas',
//     age: 22,
//     city: 'kmfksdf'
//   },
//   {
//     name: 'asdasdas',
//     age: 24,
//     city: 'kmfksdf'
//   },
//   {
//     name: 'asdasdas',
//     age: 23,
//     city: 'kmfksdf'
//   }
// ]

// const studentsSort = (students: Student[]): Student[] => {
//   return students.reduce((acc: Student[], el: Student) => {
//     return acc
//   })
// }

// interface Student {
//   name: string,
//   age: number,
//   city: string
// }
// const students = [
//   {
//     name: 'asdasdas',
//     age: 22,
//     city: 'kmfksdf'
//   },
//   {
//     name: 'asdasdas',
//     age: 24,
//     city: 'kmfksdf'
//   },
//   {
//     name: 'asdasdas',
//     age: 23,
//     city: 'kmfksdf'
//   },
//   {
//     name: 'asdasdas',
//     age: 2,
//     city: 'kmfksdf'
//   },
//   {
//     name: 'asdasdas',
//     age: 4,
//     city: 'kmfksdf'
//   },
//   {
//     name: 'asdasdas',
//     age: 3,
//     city: 'kmfksdf'
//   },
//   {
//     name: 'asdasdas',
//     age: 221,
//     city: 'kmfksdf'
//   },
//   {
//     name: 'asdasdas',
//     age: 241,
//     city: 'kmfksdf'
//   },
//   {
//     name: 'asdasdas',
//     age: 231,
//     city: 'kmfksdf'
//   },
//   {
//     name: 'asdasdas',
//     age: 222,
//     city: 'kmfksdf'
//   },
//   {
//     name: 'asdasdas',
//     age: 242,
//     city: 'kmfksdf'
//   },
//   {
//     name: 'asdasdas',
//     age: 232,
//     city: 'kmfksdf'
//   },
//   {
//     name: 'asdasdas',
//     age: 223,
//     city: 'kmfksdf'
//   },
//   {
//     name: 'asdasdas',
//     age: 243,
//     city: 'kmfksdf'
//   },
//   {
//     name: 'asdasdas',
//     age: 233,
//     city: 'kmfksdf'
//   },
//   {
//     name: 'asdasdas',
//     age: 224,
//     city: 'kmfksdf'
//   },
//   {
//     name: 'asdasdas',
//     age: 244,
//     city: 'kmfksdf'
//   },
//   {
//     name: 'asdasdas',
//     age: 234,
//     city: 'kmfksdf'
//   },
//   {
//     name: 'asdasdas',
//     age: 225,
//     city: 'kmfksdf'
//   },
//   {
//     name: 'asdasdas',
//     age: 245,
//     city: 'kmfksdf'
//   },
//   {
//     name: 'asdasdas',
//     age: 235,
//     city: 'kmfksdf'
//   },

// ];

// const students = [22, 443, 543, 3452, 234, 6, 43, 324, 235, 2]

// // const studentsSort = (students) => {
// //     const start = new Date();
// //     let isSorted = false
// //     let temp
// //     while (!isSorted) {
// //         isSorted = true
// //         for (let i = 0; i < students.length - 1; i++) {
// //             if (students[i] > students[i + 1]) {
// //                 temp = students[i]
// //                 students[i] = students[i + 1]
// //                 students[i + 1] = temp
// //                 isSorted = false
// //             }
// //         }
// //     }
// //     const end = new Date();
// //     console.log('Время выполнения:', end - start, 'мс');
// //     return students
// // }




// const fs = require('fs').promises
// const { v4: uuidv4 } = require('uuid');
// const path = require('path')


// const logfile = path.join(__dirname, 'MYLOGS.json')
// const sortedJson = path.join(__dirname, "sorted.json")
// // const createID = async () => {
// //     const arr = []
// //     for (let i = 0; i < 1000000; i++) {
// //         arr.push({ id: uuidv4(), age: Math.floor(Math.random() * 100) })
// //     }
// //     await fs.appendFile(logfile, JSON.stringify(arr, null, 2))
// // }
// // createID()

// const getArr = async () => {
//   try {
//     const file = await fs.readFile(logfile)
//     return JSON.parse(file)
//   } catch (err) {
//     console.log(err);
//   }
// }

// const studentsSort = async (stud) => {
//   let isSorted = false
//   let temp
//   while (!isSorted) {
//     isSorted = true
//     for (let i = 0; i < stud.length - 1; i++) {
//       if (stud[i].age > stud[i + 1].age) {
//         temp = stud[i]
//         stud[i] = stud[i + 1]
//         stud[i + 1] = temp
//         isSorted = false
//       }
//     }
//   }
//   try {
//     await fs.appendFile(sortedJson, JSON.stringify(stud)); // Записываем отсортированный JSON в файл
//     console.log('Отсортированный JSON записан в файл:', sortedJson);
//     return stud; // Возвращаем отсортированный массив студентов
//   } catch (err) {
//     console.error('Ошибка при записи в файл:', err);
//     throw err; // Пробрасываем ошибку выше для обработки в вызывающем коде
//   }
// }

// getArr() // Получаем массив студентов из файла
//   .then(students => {
//     console.log('Исходный массив студентов:', students);
//     return studentsSort(students); // Сортируем массив студентов и записываем в файл
//   })
//   .then(sortedStudents => {
//     console.log('Отсортированный массив студентов:', sortedStudents);
//   })
//   .catch(error => {
//     console.error('Произошла ошибка:', error);
//   });

// const lightSort = (students: Student[]) => {
//   const arr: Student[] = []
//   while (students.length > 0) {
//     let index = students.reduce((acc: number, el: Student, index: number, arr: Student[]) => {
//       return el.age > arr[acc].age ? acc : index
//     }, 0)
//     arr.push(students[index])
//     students.splice(index, 1)
//   }
//   return arr
// }


// console.log(lightSort(students));
// console.log(lightSort(students));

// const students = [
//   { name: 'Alice', age: 21, courses: ['Math', 'Physics'] },
//   { name: 'Bob', age: 19, courses: ['Computer Science'] },
//   { name: 'Charlie', age: 20, courses: ['History', 'Art'] },
// ];

// // Заборонено використовувати метод .sort(), рекурсії, цикл у циклі, більше одного явного виклику циклу (for, .foreach(), .map(), .reduce(), .filter(), etc).

// function sortStudentsByAge(students) {
//     let isSorted = false;
//     let temp;
//     while (!isSorted) {
//         isSorted = true;
//         for (let i = 0; i < students.length - 1; i += 1) {
//             if (students[i].age < students[i + 1].age) {
//                 temp = students[i];
//                 students[i] = students[i + 1];
//                 students[i + 1] = temp;
//                 isSorted = false;
//             }
//         }
//     }
//     return students.map((student) => student.name);
// }

// function sortStudentsByAge(students) {
//     const arr = [];
//     console.log(arr);
//     while (students.length > 0) {
//         const indexOfMinAge = students.reduce((minIndex, student, currentIndex, array) => {
//             return student.age < array[minIndex].age ? currentIndex : minIndex;
//         }, 0);
//         arr.push(students[indexOfMinAge]);
//         students.splice(indexOfMinAge, 1);
//     }
//     return arr;
// }

// function sortStudentsByAge(arr) {
//     const sortedArr = [];
//     const newArr = [...arr];
//     const arrAges = arr.map((student) => student.age);

//     while (newArr.length > 0) {
//         let index = arrAges.indexOf(Math.max(...arrAges));
//         sortedArr.push(newArr[index].name);
//         newArr.splice(index, 1);
//         arrAges.splice(index, 1);
//     }
//     return sortedArr;
// }

// console.log(sortStudentsByAge(students));

// Очікуваний результат

// [ 'Alice', 'Charlie', 'Bob' ]
// const csv = require('csv-parser');
// const createCsvWriter = require('csv-writer').createObjectCsvWriter;
// const fs = require('fs').promises;
// const path = require('path');
// const { email, paidP } = require('./const');

// const baseOld = path.join(__dirname, 'baseOld.json');
// const baseGeg = path.join(__dirname, 'baseGeg.json');
// const baseNew = path.join(__dirname, 'baseNew.json');
// // const paidPeople = path.join(__dirname, 'peoplePaid.xls');

// const csvWriter = createCsvWriter({
//     path: 'peoplePaid.csv',
//     header: [
//         { id: 'Имя', title: 'Имя' },
//         { id: 'Фамилия', title: 'Фамилия' },
//         { id: 'Отчество', title: 'Отчество' },
//         { id: 'email', title: 'email' },
//     ],
//     encoding: 'utf-8',
// });

// // FUNCTION GET A STRING AND FORM AN ARRAY WITH OBJECTS
// const creatJson = async (email, paidP) => {
//     const separator = ';';
//     const obj = email
//         .split('\n')
//         .map((el) => el.split('\t'))
//         .map((el) => ({
//             Имя: el[0].trim(),
//             Фамилия: el[1].trim(),
//             Отчество: el[2].trim(),
//             email: el[3].trim(),
//         }));

//     const arrPaidP = paidP.split('\n');

//     const objPaid = obj.filter((el) => arrPaidP.includes(el.email));
//     // .map((el) => `${el.Имя}${separator}${el.Фамилия}${separator}${el.Отчество}${separator}${el.email}`);

//     console.log(objPaid);

//     csvWriter.writeRecords(objPaid).then(() => console.log('The CSV file was written successfully'));
//     // return await fs.writeFile(paidPeople, objPaid, 'utf-8');
// };

// creatJson(email, paidP);

// (async () => {
//     const old = JSON.parse(await fs.readFile(baseOld, 'utf-8'));
//     const reg = JSON.parse(await fs.readFile(baseGeg, 'utf-8'));
//     const newEmails = reg.filter((email) => !old.includes(email));
//     await await fs.writeFile(baseNew, JSON.stringify(newEmails, null, 2));
// })();

// FUNCTION GET A STRING AND FORM AN ARRAY WITH OBJECTS
// const creatJson = async (email, paidP) => {
//     const obj = email
//         .split('\n')
//         .map((el) => el.split('\t'))
//         .map((el) => ({
//             Имя: el[2],
//             Фамилия: el[1],
//             Побатькові: el[3],
//             email: el[0],
//             телефон: el[7],
//             Спеціальність: el[6],
//             Стать: el[4],
//             робота: el[9],
//             Регіон: el[5],
//             народження: el[8],
//         }));

//     const arrPaidP = paidP.split('\n');

//     const objPaid = obj.filter((el) => arrPaidP.includes(el.email)).map((el) => el);
//     console.log(obj);

//     return await fs.writeFile(paidPeople, JSON.stringify(objPaid, null, 2));
// };

// creatJson(email, paidP);

// export const encryptThis = (str: string): string => {

//   return str.split(' ').map(word => {
//     if (word.length > 3) {
//       return `${word.charCodeAt(0)}${word[word.length - 1]}${word.slice(2, word.length - 1)}${word[1]}`
//     }
//     if (word.length == 2) {
//       return `${word.charCodeAt(0)}${word[1]}`
//     }
//     if (word.length > 1) {
//       return `${word.charCodeAt(0)}${word[word.length - 1]}${word[1]}`
//     }

//     if (word.length == 1) {
//       return word[0].charCodeAt(0)
//     }
//     return word
//   }).join(' ')
// }
// console.log(encryptThis("A"));
// console.log(encryptThis("A wise old owl lived in an oak"));


// export function saleHotdogs(n: number): number {
//   return n < 5 ? n * 100 : n >= 5 && n < 10 ? n * 95 : n * 90
// }


// let age: number = 50;
// let namen: string = 'Max';
// let toggle: Boolean = true;
// let empty: null = null;
// let notInitialize: unknown;
// let callback = (a: number) => { return 100 + a };

// let anything: any = -20;
// anything = 'Text';
// anything = {};

// let some: unknown;
// some = 'Text';
// let str: string;
// str = some as string

// type Person = [string, number]
// let person: = ['Max', 21];


// export const flyBy = (lamps: string, drone: string): string => lamps.length < drone.length ? "o".repeat(lamps.length) : 'o'.repeat(drone.length) + lamps.slice(drone.length) 
// export function sumArray(array: number[]): number {
//   if (!array || array.length <= 1) return 0;
//   return array.sort((a, b) => a - b).slice(1, -1).reduce((p, n) => p + n, 0);
// }

// export function usdcny(usd: number): string {

//   return (usd * 6.75).toFixed(2)
// }

// console.log(usdcny(9758));


export function circleArea(radius: number): number {
  if (radius <= 0) throw new Error
  return Math.PI * (radius ** 2)
}

// export function rank(st: string, we: number[], n: number): string {
//   const arrParticipants = st.split(',')
//   if (!st) return "No participants"
//   if (n > arrParticipants.length) return "Not enough participants"
//   const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
//   const aaa = arrParticipants
//     .map((el) => {
//       return el.split('').reduce((acc: number, leter: string) => {
//         const weigth = (alphabet.indexOf(leter.toLowerCase()) + 1)
//         return acc + weigth
//       }, 0)
//     })
//     .map(el => el + n)
//     .map((el, i) => el * we[i])
//   const newArr = [...aaa]
//   return arrParticipants[aaa.indexOf(newArr.sort((a, b) => b - a)[0])]
// }



// export function rank(st: string, we: number[], n: number): string {
//   if (st === '') {
//     return "No participants";
//   }

//   const names = st.split(",");
//   if (n > names.length) {
//     return "Not enough participants";
//   }

//   const alphabet = "abcdefghijklmnopqrstuvwxyz";
//   const getRank = (letter: string) => alphabet.indexOf(letter.toLowerCase()) + 1;

//   const scores = names.map((name, index) => {
//     const sumOfRanks = name.split("").reduce((sum, letter) => sum + getRank(letter), 0);
//     const weightedScore = (sumOfRanks + name.length) * we[index];
//     return { name, score: weightedScore };
//   });

//   scores.sort((a, b) => {
//     if (a.score !== b.score) {
//       return b.score - a.score;
//     } else {
//       return a.name.localeCompare(b.name);
//     }
//   });

//   return scores[n - 1].name;
// }

// console.log(rank("COLIN,AMANDBA,AMANDAB,CAROL,PauL,JOSEPH", [1, 4, 4, 5, 2, 1], 4));


// export function splitTheBill(x: { [k: string]: number }): { [k: string]: number } {
//   const newArr: number[] = []
//   const keys: string[] = []
//   for (let key in x) {
//     keys.push(key)
//     newArr.push(x[key]);
//   }
//   return keys.reduce((acc: Record<string, number>, el: string, i: number) => {
//     if (i === 0) {
//       acc[el] = newArr[0] - newArr[1]
//     }
//     if (i === 1) {
//       acc[el] = 0
//     }
//     if (i === 2) {
//       acc[el] = newArr[2] - newArr[1]
//     }
//     return acc
//   }, {})
// }

// console.log(splitTheBill({ A: 20, B: 15, C: 10 }));

// export function rps(p1: string, p2: string): string {
//   return (p1 === "scissors" && p2 === "paper") || (p1 === "paper" && p2 === "rock") || (p1 === "rock" && p2 === "scissors")
//     ? "Player 1 won!" : (p1 === "paper" && p2 === "scissors") || (p1 === "scissors" && p2 === "rock") || (p1 === "rock" && p2 === "paper")
//       ? "Player 2 won!" : "Draw!"
// }


// export function countLettersAndDigits(input: string): number {
//   let temp: number = 0;
//   input.split('').forEach(i => i.match(/^[a-z0-9]+$/i) ? temp++ : temp)
//   return temp;
// }

// export function nbMonths(p0: number, p1: number, s: number, r: number, m: number = 0, t: number = 0): number[] {
//   if (p1 <= p0 + t) return [m, Math.round(p0 - p1 + t)];
//   p0 -= p0 * .01 * r;
//   p1 -= p1 * .01 * r;
//   if (++m % 2) r += .5;
//   return nbMonths(p0, p1, s, r, m, t + s);
// }

// export function getMiddle(s: string) {
//   const middle = Math.ceil(s.length / 2) - 1
//   return s.slice(middle, s.length - middle)
// }

// const f = (n: number) => {
//   if (n === 0) return 1
//   return f(n + f(n - 1))
// }

// export function change(string: string): string {
//   const alphabet = "abcdefghijklmnopqrstuvwxyz";
//   let result = '';

//   for (let i = 0; i < alphabet.length; i++) {
//     const char = alphabet[i];
//     if (string.toLowerCase().includes(char)) {
//       result += '1';
//     } else {
//       result += '0';
//     }
//   }

//   return result;
// }

// export function nthSmallest(arr: number[], pos: number) {
//   if (arr.length < 3) {
//     throw new Error(`Array must contain at least 3 elements!`);
//   }

//   const arrCopy = arr.slice();
//   const arrSortedAscending = arrCopy.sort((a, b) => a - b);

//   return arrSortedAscending[pos - 1];
// }

// export function findNb(m: number): number {
//   var n = 0;
//   while (m > 0) m -= Math.pow(++n, 3);
//   return m ? -1 : n
// }

// export function average(scores: number[]): number {

//   return Math.round(scores.reduce((acc: number, el: number) => acc += el) / scores.length)
// }

// export function wallpaper(l: number, w: number, h: number): string {
//   const roomArea = 2 * (l + w) * h
//   const rollArea = 0.52 * 10
//   const rollsNeed = Math.ceil(roomArea / rollArea * 1.15)
//   const numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty"]
//   return l && w && h ? numbers[rollsNeed] : "zero"
// }

// export function wallpaper(l: number, w: number, h: number): string {
//   const numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty"]
//   const rollWidth = 0.52;
//   const rollLongth = 10;
//   if ([w, l, h].includes(0)) return numbers[0]
//   const minimum = (2 * (w + l) * h) / (rollWidth * rollLongth)
//   const result = Math.ceil(minimum + 0.15 * minimum)
//   return numbers[result]
// }


// const f = (n: number): number => {
//   if (n <= 1) return 1
//   return n * f(n - 1)
// }
const factorial = (n: number): number => {
  let res = 1
  for (let i = 1; i <= n; res *= i, i++) { }
  return res
}

export const strongNumber = (num: number): string => {
  const arrNumber = num.toString().split('').map(el => +el)
  return arrNumber.reduce((acc: number, n: number) => {
    acc += factorial(n)
    return acc
  }, 0) === num ? "STRONG!!!!" : "Not Strong !!"
};


console.log(strongNumber(1));

export function abbreviate(str: string): string {
  return str.replace(/[a-z]{4,}/gi, (match) => {
    const firstLetter = match[0];
    const lastLetter = match[match.length - 1];
    const abbreviation = `${firstLetter}${match.length - 2}${lastLetter}`;
    return abbreviation;
  })
}