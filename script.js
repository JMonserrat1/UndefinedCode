//Cambia el menu por la x
function menuX(){
    var imagen = document.getElementById("imagen");
    if(imagen.src.match("assets/x.png")){
      imagen.src = "assets/desplegable.png"; // Cambia a la imagen desplegable
    } else {
      imagen.src = "assets/x.png"; // Cambia a la imagen de la X
    }
  }