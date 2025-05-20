const pantalla = document.querySelector('.pantalla');
const botones = document.querySelectorAll('button');

let operacion = '';

botones.forEach(boton => {
    boton.addEventListener('click', () => {
        const valor = boton.textContent;
         

        if (boton.id === 'netejar') {
            operacion = '';
            pantalla.textContent = '0';

        } else if (boton.id === 'borrar') {
            operacion = operacion.slice(0, -1);
            pantalla.textContent = operacion || '0';

        } else if (boton.id === 'igual') {
            try {
                const resultado = eval(operacion);
                pantalla.textContent = resultado;
                operacion = resultado.toString();

            } catch {
                pantalla.textContent = 'Error';
                operacion = '';
            }

        } else {
            if (valor === ',') {
                
                const partes = operacion.split(/[\+\-\*\/]/);
                if (partes[partes.length - 1].includes('.')) return;
                operacion += '.';

            } else {
                
                if (['+', '-', '*', '/'].includes(valor) && ['+', '-', '*', '/'].includes(operacion.slice(-1))) 
                    { 
                        operacion = operacion.slice(0, -1);
                }
                operacion += valor;
            }

            pantalla.textContent = operacion;
        }
    });
});
