// Esperar cierto tiempo antes de redirigir
var tiempoEspera = 8000; // 3 segundos

// Función para redirigir a la página principal
function redirigirAPaginaPrincipal() {
  window.location.href = "./index_es.html";
}

// Esperar cierto tiempo y luego redirigir
setTimeout(redirigirAPaginaPrincipal, tiempoEspera);