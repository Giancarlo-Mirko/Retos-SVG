// const red = document.getElementById('red');
// const yellow = document.getElementById('yellow');
// const green = document.getElementById('green');
// const orange = document.getElementById('orange');
// let centroX = 300;
// let centroY = 300;

// document.addEventListener('DOMContentLoaded', (event) => {
//   red.setAttribute('cx', centroX - 60);
//   red.setAttribute('cy', centroY - 60);

//   yellow.setAttribute('cx', centroX - 60);
//   yellow.setAttribute('cy', centroY + 60);

//   green.setAttribute('cx', centroX + 60);
//   green.setAttribute('cy', centroY - 60);

//   orange.setAttribute('cx', centroX + 60);
//   orange.setAttribute('cy', centroY + 60);
// });

// function degreesToRadians(degrees) {
//   return degrees * (Math.PI / 180);
// }

// // Obtener el elemento SVG
// const svg = document.querySelector('svg');

// // Radio para los puntos finales (usaremos 50 que es el radio del círculo)
// const radius = 50;

// // Punto central (origen de las líneas)
// const centerX = 50;
// const centerY = 50;

// // Crear líneas desde 6° hasta 84° con incrementos de 6°
// for (let angle = 6; angle <= 84; angle += 6) {
//   // Convertir el ángulo a radianes
//   const angleRad = degreesToRadians(angle);

//   // Calcular el punto final usando funciones trigonométricas
//   // x = centro + radio * cos(ángulo)
//   // y = centro - radio * sin(ángulo)  (restamos porque en SVG el eje Y va hacia abajo)
//   const endX = centerX + radius * Math.cos(angleRad);
//   const endY = centerY - radius * Math.sin(angleRad);

//   // Crear el elemento línea
//   const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');

//   // Establecer los atributos de la línea
//   line.setAttribute('x1', centerX.toString());
//   line.setAttribute('y1', centerY.toString());
//   line.setAttribute('x2', endX.toString());
//   line.setAttribute('y2', endY.toString());
//   line.setAttribute('stroke', 'black');
//   line.setAttribute('stroke-width', '1');

//   // Agregar la línea al SVG
//   svg.appendChild(line);
// }
//! dibuja todas las lineas del reloj de 6 en 6 grados
// Función para convertir grados a radianes
function degreesToRadians(degrees) {
  return degrees * (Math.PI / 180);
}

// Obtener el elemento SVG
const svg = document.querySelector('svg');

// Radio para los puntos finales
const radius = 50;

// Punto central (origen de las líneas)
const centerX = 50;
const centerY = 50;

// Crear líneas para todo el círculo
for (let angle = 6; angle <= 354; angle += 6) {
  // Convertir el ángulo a radianes
  const angleRad = degreesToRadians(angle);

  // Calcular el punto final usando funciones trigonométricas
  const endX = centerX + radius * Math.cos(angleRad);
  const endY = centerY - radius * Math.sin(angleRad);

  // Crear el elemento línea
  const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');

  // Establecer los atributos de la línea
  line.setAttribute('x1', centerX.toString());
  line.setAttribute('y1', centerY.toString());
  line.setAttribute('x2', endX.toString());
  line.setAttribute('y2', endY.toString());
  line.setAttribute('stroke', 'black');
  line.setAttribute('stroke-width', '1');

  // Agregar la línea al SVG
  svg.appendChild(line);
}

// Crear el círculo azul
const blueCircle = document.createElementNS(
  'http://www.w3.org/2000/svg',
  'circle'
);
blueCircle.setAttribute('cx', '50');
blueCircle.setAttribute('cy', '50');
blueCircle.setAttribute('r', '45');
// blueCircle.setAttribute('stroke', 'black');
blueCircle.setAttribute('fill', 'blue');
blueCircle.setAttribute('id', 'blue');

// Agregar el círculo al SVG
svg.appendChild(blueCircle);

//! dibuja todas las lineas del reloj para la horade 30 en 30 grados
for (let angle = 0; angle <= 354; angle += 30) {
  // Convertir el ángulo a radianes
  const angleRad = degreesToRadians(angle);

  // Calcular el punto final usando funciones trigonométricas
  const endX = centerX + radius * Math.cos(angleRad);
  const endY = centerY - radius * Math.sin(angleRad);

  // Crear el elemento línea
  const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');

  // Establecer los atributos de la línea
  line.setAttribute('x1', centerX.toString());
  line.setAttribute('y1', centerY.toString());
  line.setAttribute('x2', endX.toString());
  line.setAttribute('y2', endY.toString());
  line.setAttribute('stroke', 'black');
  line.setAttribute('stroke-width', '1');

  // Agregar la línea al SVG
  svg.appendChild(line);
}

// Crear el círculo azul
const blueCircle2 = document.createElementNS(
  'http://www.w3.org/2000/svg',
  'circle'
);
blueCircle2.setAttribute('cx', '50');
blueCircle2.setAttribute('cy', '50');
blueCircle2.setAttribute('r', '40');
// blueCircle2.setAttribute('stroke', 'black');
blueCircle2.setAttribute('fill', 'blue');
blueCircle2.setAttribute('id', 'blue');

// Agregar el círculo al SVG
svg.appendChild(blueCircle2);

// Crear las manecillas del reloj
const hourHand = document.createElementNS('http://www.w3.org/2000/svg', 'line');
const minuteHand = document.createElementNS(
  'http://www.w3.org/2000/svg',
  'line'
);
const secondHand = document.createElementNS(
  'http://www.w3.org/2000/svg',
  'line'
);

// Establecer atributos base de las manecillas
hourHand.setAttribute('x1', centerX.toString());
hourHand.setAttribute('y1', centerY.toString());
hourHand.setAttribute('stroke', 'white');
hourHand.setAttribute('stroke-width', '3');

minuteHand.setAttribute('x1', centerX.toString());
minuteHand.setAttribute('y1', centerY.toString());
minuteHand.setAttribute('stroke', 'white');
minuteHand.setAttribute('stroke-width', '2');

secondHand.setAttribute('x1', centerX.toString());
secondHand.setAttribute('y1', centerY.toString());
secondHand.setAttribute('stroke', 'red');
secondHand.setAttribute('stroke-width', '1');

//! dibuja las lineas de las manecillas del reloj
// Agregar las manecillas al SVG
svg.appendChild(hourHand);
svg.appendChild(minuteHand);
svg.appendChild(secondHand);

// Función para actualizar las manecillas
function updateClock() {
  const now = new Date();
  const hours = now.getHours() % 12; // Convertir a formato 12 horas
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  // Calcular ángulos
  // La rotación comienza desde las 12 en punto (-90 grados)
  const hourAngle = -90 + hours * 30 + minutes / 2; // 30 grados por hora + ajuste por minutos
  const minuteAngle = -90 + minutes * 6; // 6 grados por minuto
  const secondAngle = -90 + seconds * 6; // 6 grados por segundo

  // Calcular puntos finales
  // Diferentes longitudes para cada manecilla
  const hourX = centerX + 25 * Math.cos(degreesToRadians(hourAngle));
  const hourY = centerY + 25 * Math.sin(degreesToRadians(hourAngle));

  const minuteX = centerX + 35 * Math.cos(degreesToRadians(minuteAngle));
  const minuteY = centerY + 35 * Math.sin(degreesToRadians(minuteAngle));

  const secondX = centerX + 38 * Math.cos(degreesToRadians(secondAngle));
  const secondY = centerY + 38 * Math.sin(degreesToRadians(secondAngle));

  // Actualizar posiciones
  hourHand.setAttribute('x2', hourX.toString());
  hourHand.setAttribute('y2', hourY.toString());

  minuteHand.setAttribute('x2', minuteX.toString());
  minuteHand.setAttribute('y2', minuteY.toString());

  secondHand.setAttribute('x2', secondX.toString());
  secondHand.setAttribute('y2', secondY.toString());
}

// Actualizar el reloj cada segundo
updateClock(); // Actualización inicial
setInterval(updateClock, 1000); // Actualizaciones posteriores cada segundo
