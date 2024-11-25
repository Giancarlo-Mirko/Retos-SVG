const red = document.getElementById('red');
const yellow = document.getElementById('yellow');
const green = document.getElementById('green');
const orange = document.getElementById('orange');
let centroX = 300;
let centroY = 300;

document.addEventListener('DOMContentLoaded', (event) => {
  red.setAttribute('cx', centroX - 60);
  red.setAttribute('cy', centroY - 60);

  yellow.setAttribute('cx', centroX - 60);
  yellow.setAttribute('cy', centroY + 60);

  green.setAttribute('cx', centroX + 60);
  green.setAttribute('cy', centroY - 60);

  orange.setAttribute('cx', centroX + 60);
  orange.setAttribute('cy', centroY + 60);
});
