let estado = 1;
console.log('estado inicial',estado);
        const boca = document.getElementById('boca');
        const ojos = document.querySelectorAll('.ojo');
        
        document.querySelector('svg').addEventListener('click', () => {
            if (estado == 1) {
                boca.setAttribute('d', 'M 70 120 Q 100 100 130 120');
                // ojo.setAttribute('fill', 'blue');
                ojos.forEach(ojo => ojo.setAttribute('fill', 'blue'));
                
            } else if (estado == 2) {
                boca.setAttribute('d', 'M 100 140 A 10 15 0 1 1 100.1 140');
                ojos.forEach(ojo => ojo.setAttribute('fill', 'orange'));
            }
            else {
                boca.setAttribute('d', 'M 70 120 Q 100 140 130 120');
                ojos.forEach(ojo => ojo.setAttribute('fill', 'yellow'));
            }
            console.log('estado antes de sumar',estado);
            estado++;
            if (estado > 3) {
                estado = 1;
            }
        });