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
<<<<<<< HEAD
        } else {
            if (valor === ',') {
                // Solo permitir un punto por número
                const partes = operacion.split(/[\+\-\*\/]/);
                if (partes[partes.length - 1].includes('.')) return;
                operacion += '.';
            } else {
                // Evitar operadores dobles
                if (['+', '-', '*', '/'].includes(valor) && ['+', '-', '*', '/'].includes(operacion.slice(-1))) {
                    operacion = operacion.slice(0, -1);
                }
                operacion += valor;
            }

            pantalla.textContent = operacion;
        }
    });
});
=======
            return;
        }

        if ( pantalla .textContent === "0" || pantalla.textContent === "Error!") {
            pantalla.textContent = botonApretado;
        } else{
            pantalla.textContent += botonApretado;
        }
        
    })
})
>>>>>>> 1fb7a495a4cb37d3b120ac6b0a81af2e210fa156
