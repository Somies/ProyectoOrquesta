// Inicializar la fecha en diciembre del año actual
let currentDate = new Date();
currentDate.setFullYear(new Date().getFullYear()); // Año actual
currentDate.setMonth(11); // Mes de diciembre (índice 11)

// Array de nombres de los meses
let months = [
    "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
];

// Función para actualizar el mes y año
function updateMonthYear() {
    const monthName = months[currentDate.getMonth()];
    const year = currentDate.getFullYear();
    document.getElementById('month-year-span').textContent = `${monthName} - ${year}`;
    generateCalendar(); // Generar el calendario para el mes y año actual
}

// Función para cambiar el mes con límites
function changeMonth(change) {
    let newMonth = currentDate.getMonth() + change;
    let newYear = currentDate.getFullYear();

    // Si el mes excede diciembre (11), avanzamos al siguiente año
    if (newMonth > 11) {
        newMonth = 0; // Enero
        // Asegurarnos de que no avancemos el año más allá de 2025
        if (newYear < 2025) {
            newYear++; // Incrementar el año solo si está por debajo de 2025
        }
    } 
    // Si el mes es menor a enero (0), retrocedemos al año anterior
    else if (newMonth < 0) {
        newMonth = 11; // Diciembre
        // Asegurarnos de que no retrocedamos más allá de 2022
        if (newYear > 2022) {
            newYear--; // Decrementar el año solo si está por encima de 2022
        }
    }

    // Establecer el nuevo mes y año
    currentDate.setMonth(newMonth);
    currentDate.setFullYear(newYear);

    updateMonthYear();
}


// Función para cambiar el año con límites
function changeYear(change) {
    let newYear = currentDate.getFullYear() + change;

    // Verificar si el año está dentro del rango permitido
    if (newYear >= 2022 && newYear <= 2025) {
        currentDate.setFullYear(newYear);
    }

    updateMonthYear();
}

// Función para generar el calendario dinámicamente
function generateCalendar() {
    const calendarBody = document.querySelector(".calendar-table tbody");

    // Limpiar el calendario existente
    calendarBody.innerHTML = "";

    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    // Obtener el primer día del mes y la cantidad de días en el mes
    const firstDay = new Date(year, month, 1).getDay(); // Día de la semana (0 = Domingo, 6 = Sábado)
    const daysInMonth = new Date(year, month + 1, 0).getDate(); // Último día del mes

    // Ajustar el índice del primer día (para que inicie en Lunes = 0)
    const adjustedFirstDay = (firstDay === 0 ? 6 : firstDay - 1);

    let currentDay = 1;

    // Crear filas del calendario
    for (let i = 0; i < 6; i++) {
        const row = document.createElement("tr");

        for (let j = 0; j < 7; j++) {
            const cell = document.createElement("td");

            if (i === 0 && j < adjustedFirstDay) {
                cell.textContent = ""; // Celdas vacías antes del primer día
            } else if (currentDay > daysInMonth) {
                cell.textContent = ""; // Celdas vacías después del último día
            } else {
                cell.textContent = currentDay;

                // Cambiar fondo de color rojo y texto blanco para el domingo 1 de septiembre de 2024
                if (currentDay === 1 && year === 2024 && month === 8 && j === 6) {
                    cell.style.backgroundColor = "red";
                    cell.style.color = "white";
                }

                currentDay++;
            }

            row.appendChild(cell);
        }

        calendarBody.appendChild(row);

        if (currentDay > daysInMonth) break; // Salir del bucle si se llenaron los días
    }
}

// Inicializar el calendario y encabezado al cargar la página
updateMonthYear();
