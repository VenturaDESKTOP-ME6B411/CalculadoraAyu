// Selecciona el elemento con la clase "pantalla"
const pantalla = document.querySelector(".pantalla");

// Selecciona todos los elementos con la clase "btn"
const botones = document.querySelectorAll(".btn");

// Itera sobre cada botón y agrega un evento de clic
botones.forEach(boton => {
    boton.addEventListener("click", () => {
        // Obtiene el contenido del botón clickeado
        const botonApretado = boton.textContent;

        // Maneja el caso del botón "C" (limpiar)
        if (boton.id === "c") {
            pantalla.textContent = "0";
            return;
        }

        // Maneja el caso del botón "borrar" (eliminar último carácter)
        if (boton.id === "borrar") {
            // Si la pantalla tiene un solo carácter o muestra "Error!", establece "0"
            if (pantalla.textContent.length === 1 || pantalla.textContent === "Error!") {
                pantalla.textContent = "0";
            } else {
                pantalla.textContent = pantalla.textContent.slice(0, -1);
            }
            return;
        }

        // Maneja el caso del botón "igual" (realizar la operación)
        if (boton.id === "igual") {
            try {
                // Evalúa la expresión matemática en la pantalla y muestra el resultado
                pantalla.textContent = eval(pantalla.textContent);
            } catch {
                // Si hay un error al evaluar la expresión, muestra "Error!"
                pantalla.textContent = "Error!";
            }
            return;
        }

        // Maneja el caso cuando la pantalla muestra "0" o "Error!"
        if (pantalla.textContent === "0" || pantalla.textContent === "Error!") {
            pantalla.textContent = botonApretado;
        } else {
            // Agrega el contenido del botón clickeado a la pantalla
            pantalla.textContent += botonApretado;
        }
    })
});
