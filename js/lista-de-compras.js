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
  }
  var indice = 0;
  var indice_maximo = shopping.length;
document.getElementById('list').innerHTML = "";
  while( indice < indice_maximo ){


  // ESCRIBIR EN LA Lista
document.getElementById('list').innerHTML =
        document.getElementById('list').innerHTML + "<li>" + shopping[ indice ]+ "</li>"


  indice++;
  }
}

document.getElementById('agregar').addEventListener('click', escribeLista);
escribeLista();
