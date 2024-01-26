function htmlspecialchars(formData: string): string {
  const replace = formData.split('').map(char => {
    if (char === '<') return '&lt;'
    if (char === '>') return '&gt;'
    if (char === '&') return '&amp;'
    if (char === '"') return '&quot;'
    if (char === "'") return '&#039;'
    return char;
  }).join()
  return replace;
}

htmlspecialchars("<h2>Hello World</h2>")

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

