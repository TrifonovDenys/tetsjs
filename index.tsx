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