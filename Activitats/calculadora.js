const pantalla = document.querySelector(".pantalla");
const botones = document.querySelectorAll("button");

let operacion = "";
let escribiendoNumero = true;

botones.forEach(boton => {
    boton.addEventListener("click", () => {
        const valor = boton.textContent;

        if (boton.id === "netejar") {
            operacion = "";
            pantalla.textContent = "0";
            escribiendoNumero = true;

        } else if (boton.id === "borrar") {
            
            if (pantalla.textContent.length > 1) {
                pantalla.textContent = pantalla.textContent.slice(0, -1);
            } else {
                pantalla.textContent = "0";
            }

            
            if (escribiendoNumero && /\d/.test(operacion.slice(-1))) {
                operacion = operacion.slice(0, -1);
            }

        } else if (boton.id === "igual") {
            try {
                const resultado = eval(operacion);
                pantalla.textContent = resultado;
                operacion = resultado.toString();
            } catch {
                pantalla.textContent = "Error";
                operacion = "";
            }

        } else {
            if (valor === ",") {
                if (!pantalla.textContent.includes(".")) {
                    pantalla.textContent += ".";
                    operacion += ".";
                }
            } else if ("+-*/".includes(valor)) {
                operacion += valor;
                pantalla.textContent = "";
                escribiendoNumero = true;
            } else {
                if (pantalla.textContent === "0" || !escribiendoNumero) {
                    pantalla.textContent = valor;
                } else {
                    pantalla.textContent += valor;
                }
                operacion += valor;
                escribiendoNumero = true;
            }
        }
    });
});