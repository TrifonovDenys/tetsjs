"use strict";
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
function bestFriend(txt, a, b) {
    const arr = [];
    const index = txt.split('').reduce((acc, el, i) => {
        if (el === a) {
            acc.push(i);
        }
        return acc;
    }, []);
    const indexb = txt.split('').reduce((acc, el, i) => {
        if (el === b) {
            acc.push(i);
        }
        return acc;
    }, []);
    for (let i = 0; i < index.length; i++) {
        console.log(txt[index[i]] === a);
        console.log(txt[indexb[i]] === b);
        if ((txt[index[i]] === a) && (txt[indexb[i]] === b)) {
            arr.push(true);
        }
        else {
            arr.push(false);
        }
    }
    return arr.includes(false) ? false : true;
}
console.log(bestFriend('we found your dynamite', 'd', 'y'));
