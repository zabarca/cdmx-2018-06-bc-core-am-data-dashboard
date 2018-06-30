// usar este archivo para todo el código que tenga que ver con mostrar los datos en la pantalla
//let urlDirection obtiene el json de la data desde git hub 
let urlDirection = "https://raw.githubusercontent.com/Laboratoria/cdmx-2018-06-bc-core-am-data-dashboard/master/data/laboratoria.json";
let fullSede = document.querySelector("#botonesSede");
let btn = document.querySelector("#cdmx");
// usando el boton de las sedes llamamos a la función para que aparezca en consola data>lima>generacion>cuarta
cdmx.addEventListener("click", function(){
    sede(); 
  })

  let sede = function(){
      fetch(urlDirection).then(function(datos){
      return datos.json();
      }).then(function(data){
      console.log(data.lima);
      let sede1 = data.lima.generacion;
      console.log(Object.keys(sede1));
      let generaciones = Object.keys(sede1);
      console.log(generaciones[0]); 
    for(let i = 0; i<generaciones.length; i++) {
        fullSede.innerHTML+= "<div>" + generaciones[i] + "</div>";
    }
      
      })
    }  
//Hasta aquí imprime las generaciones de lima :(  