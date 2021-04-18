// Para cuando el documento este listo , ejecuta lo que hay dentro 
$( document ).ready(function() {

  //Sincrono
  console.log('Procedimiento sincrono:')
  console.log('paso 1')
  console.log('paso 2')
  console.log('paso 3')

  //Asincrono
  console.log(' ')
  console.log('Procedimiento asincrono:')
  console.log('Empiezo')
  $.get( "/main/getRootUser", function( data ) {
      $("#mainElements").append(data)
      console.log($("#mainElements").attr('class'))
      console.log('respuesta del servidor')
    });
  console.log('despues de la llamada')
});