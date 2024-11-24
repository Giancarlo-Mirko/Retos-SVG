const red = document.getElementById('red');
const yellow = document.getElementById('yellow');
const green = document.getElementById('green');

// Corregido: usar getElementById o querySelector con '#'
red.addEventListener('click', () => {
    red.setAttribute('fill', 'red');
    yellow.setAttribute('fill', 'black');
    green.setAttribute('fill', 'black');
});  

yellow.addEventListener('click', () => {
    red.setAttribute('fill', 'black');
    yellow.setAttribute('fill', 'yellow');
    green.setAttribute('fill', 'black');
}); 

green.addEventListener('click', () => {
    red.setAttribute('fill', 'black');
    yellow.setAttribute('fill', 'black');
    green.setAttribute('fill', 'green');
});