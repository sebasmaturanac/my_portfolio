// Esperar cierto tiempo antes de redirigir
var tiempoEspera = 8000; // 3 segundos

// Función para redirigir a la página principal
function redirigirAPaginaPrincipal() {
  window.location.href = "./index_es.html";
}

// Esperar cierto tiempo y luego redirigir
setTimeout(redirigirAPaginaPrincipal, tiempoEspera);




// EFECTO INDEX_ES

(function($){
  // variables
  elementWidth = $('ul').width(),
  containerWidth = $('nav').width(),
  difference = elementWidth-containerWidth,
  finalWidth = difference * 1.5,
  element = $('ul');
  
  // active on click
  $('li').on('click', function(){
    $('li').removeClass('active');
    $(this).addClass('active');
  });
  
})(jQuery);