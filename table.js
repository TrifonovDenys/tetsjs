// const table = document.createElement('inner')
// table.style.display = "flex"
// table.style.flexWrap = "wrap"
// table.style.listStyle = "none"
// // table.style.gap = "5px"
// const a= []
// for (i = 0; i < 676; i++){
//   let b = `<li class='squere'></li>`
//   a.push(b)
// }
// const c = a.join('')
// table.insertAdjacentHTML('beforeend', c)

// document.body.append(table)




// table.addEventListener('mouseover', mouseOverLi)
// table.addEventListener('mouseout', mouseOutLi)


// function mouseOverLi(e){
//   if (e.target.tagName === 'LI') {
//     const color = randomColor()
//     e.target.style.backgroundColor = color
//     e.target.style.boxShadow = `0 0 12px ${color} `
//     console.log(randomColor());
//   }
// }
// function mouseOutLi(e){
//   if (e.target.tagName === 'LI') {
//     e.target.style.backgroundColor = 'grey'
//     e.target.style.boxShadow = `0 0 4px #000 `
//   }
// }

// function randomColor() {
//   let a = (Math.round(Math.random() * (255 - 1) + 1)).toString(16)
//   let b = (Math.round(Math.random() * (255 - 1) + 1)).toString(16)
//   let c = (Math.round(Math.random() * (255 - 1) + 1)).toString(16)
//   return '#' + a + b + c
// }


const inner = document.querySelector('.inner');
const squareColors = ['#ed220d', '#b542e5', '#0d93ed', '#f2770b', '#8affbc', '#f2ff8a', '#ff38c2', '#e37f35'];
// const squareColors = ['#ff0000', '#00ff00', '#0000ff']
const BLOCKS = 672;

for (let i = 0; i < BLOCKS; i++) {
  const square = document.createElement('div');
  square.classList.add('square');
  square.addEventListener('mouseover', () => setColor(square));
  square.addEventListener('mouseout', () => removeColor(square));
  inner.appendChild(square)
}
function setColor(elem) {
  const color = getRandomColor();
  elem.style.background = color;
  elem.style.boxShadow = `0 0 12px ${color}`;
}
function removeColor(elem) {
  elem.style.background = '#2d2d2d';
  elem.style.boxShadow = '0 0 4px #000';
}

const getRandomColor = () => squareColors[Math.floor(Math.random() * squareColors.length)];