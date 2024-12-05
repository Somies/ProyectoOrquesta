// Definir el mes y el año inicial
let currentDate = new Date();
currentDate.setFullYear(2024); // Establece el año inicial en 2024
currentDate.setMonth(6); // Establece el mes a Julio (mes 6, porque los índices comienzan desde 0)

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

    // Verificar si el nuevo mes es válido dentro del rango de años 2022-2024
    if (newMonth > 11) {
        newMonth = 0; // Volver a enero
        if (newYear < 2025) {
            newYear++; // Avanzar el año solo si está por debajo de 2024
        }
    } else if (newMonth < 0) {
        newMonth = 11; // Volver a diciembre
        if (newYear > 2022) {
            newYear--; // Retroceder el año solo si está por encima de 2022
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

    // Verificar si el año está dentro del rango permitido (2022-2024)
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
    let row;

    // Crear filas del calendario
    for (let i = 0; i < 6; i++) { // Máximo 6 filas en un calendario
        row = document.createElement("tr");

        for (let j = 0; j < 7; j++) { // 7 columnas para los días de la semana
            const cell = document.createElement("td");

            // Solo llenar las celdas correspondientes a los días del mes
            if (i === 0 && j < adjustedFirstDay) {
                // Celdas vacías antes del primer día
                cell.textContent = "";
            } else if (currentDay > daysInMonth) {
                // Celdas vacías después del último día
                cell.textContent = "";
            } else {
                // Día del mes
                cell.textContent = currentDay;

                // Cambiar fondo de color rojo y texto blanco para el domingo 1 de septiembre de 2024
                if (currentDay === 1 && year === 2024 && month === 8 && j === 6) { // Verifica si es Domingo 1 de Septiembre
                    cell.style.backgroundColor = "red"; // Fondo rojo
                    cell.style.color = "white"; // Texto blanco
                }

                currentDay++;
            }

            row.appendChild(cell);
        }

        calendarBody.appendChild(row);

        // Salir del bucle si todos los días han sido colocados
        if (currentDay > daysInMonth) {
            break;
        }
    }
}





// Inicializar el mes, año y calendario cuando se carga la página
updateMonthYear();
