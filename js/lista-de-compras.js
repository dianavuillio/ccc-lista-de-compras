var shopping = [];



shopping[0] = "leche";
shopping[1] = "pan";
shopping[2] = "huevo";
shopping[3] = "jamón";
shopping[4] = "queso";
shopping[5] = "calabaza";
shopping[6] = "zanahoria";
shopping[7] = "papa";
shopping[8] = "frijol";
shopping[9] = "jugo";
shopping[10] = "jabón";
shopping[11] = "yogurt";
shopping[12] = "mostaza";
shopping[13] = "serviletas";
shopping[14] = "shampu";


// $('#agregar').on('click', function(){})

function escribeLista(){
  var elemento = prompt("ingresa el nuevo ingrediente");
  if( elemento ){
    shopping.push( elemento );
    renderizaLista();
  }
}
function renderizaLista(){

  var indice = 0;
  var indice_maximo = shopping.length;
document.getElementById('list').innerHTML = "";
  while( indice < indice_maximo ){


  // ESCRIBIR EN LA Lista
//document.getElementById('list').innerHTML =
        //document.getElementById('list').innerHTML + "<li>" + shopping[ indice ]+ "</li>";

$('#list').append( "<li class='list-group-item'>" + shopping[ indice ]+
"<button class='btn btn-danger float-right eliminar btn-sm'><i class='fas fa-times-circle'></i></button>" +
"</li>");
//var li = document.createElement('li');
//var text = document.createTextNode(shopping[indice]);
//li.appendChild(text);
//document.getElementById('list').appendChilid( li );
  indice++;
  }
}

$(document).ready(function(){
$('#list').delegate('button.eliminar','mouseenter',function( event ){
  event.preventDefault();
  var indice = $(this).parent().index();
  $(this).parent().addClass('resaltado');
  //alert( indice );
})
$('#list').delegate('button.eliminar','mouseleave',function( event ){
  event.preventDefault();
  var indice = $(this).parent().index();
  $(this).parent().removeClass('resaltado');
  //alert( indice );
})
})

document.getElementById('agregar').addEventListener('click', escribeLista);
renderizaLista();
