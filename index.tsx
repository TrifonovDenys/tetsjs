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

export function bump(x: string): string {
  return x.split('_').join('').length < 15 ? "Woohoo!" : "Car Dead"
}

console.log(bump("nnn_n__n_n___nnnnn___n__nnn__"));
console.log(bump("nnnnnnnnnnnnnnnnnnnnn"));

export function stringTransformer(str: string) {
  return str.split('').map(el => el === el.toLowerCase() ? el.toUpperCase() : el.toLowerCase()).join('').split(' ').reverse().join(' ')
}