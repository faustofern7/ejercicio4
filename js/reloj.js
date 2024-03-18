function obtenerFecha(){
    const fechaActual = new Date();

const diasDeLaSemana = [
  "Domingo",
  "Lunes",
  "Martes",
  "Miércoles",
  "Jueves",
  "Viernes",
  "Sábado",
];

const mesesDelAnio = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

const fecha = document.querySelector('#fecha');
const horaActual = document.querySelector("#hora");

fecha.innerHTML = `${diasDeLaSemana[fechaActual.getDay()]} ${fechaActual.getDate()} de ${mesesDelAnio[fechaActual.getMonth()]} del ${fechaActual.getFullYear()}`


  let horasActuales = fechaActual.getHours();
  const ampm = horasActuales >= 12 ? 'PM' : 'AM';

  if (horasActuales > 12) {
    horasActuales -= 12;
  } else if (horasActuales === 0) {
    horasActuales = 12;
  }

  const segundosActuales = fechaActual.getSeconds().toString().padStart(2, '0');
  const minutosActuales = fechaActual.getMinutes().toString().padStart(2, '0');
  const horasActualesFormato12 = horasActuales.toString().padStart(2, '0');

  horaActual.innerHTML = `${horasActualesFormato12}:${minutosActuales}:${segundosActuales} ${ampm}`;

}

setInterval(obtenerFecha, 1000)


