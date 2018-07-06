window.




// usar este archivo para todo el código que tenga que ver con mostrar los datos en la pantalla
//let urlDirection obtiene el json de la data desde git hub
let urlDirection = "https://raw.githubusercontent.com/Laboratoria/cdmx-2018-06-bc-core-am-data-dashboard/master/data/laboratoria.json";
let fullSede = document.querySelector("#botonesSede");
let btn = document.querySelector("#lima");
let btn1 = document.querySelector("#cdmx");
let btn2 = document.querySelector("#santiago");
let estudiantes = document.querySelector("#estudiantes");
// usando el boton de las sedes llamamos a la función para que aparezca en consola data>lima>generacion>cuarta

lima.addEventListener("click", function(){
>>>>>>> upstream/master
    sede();
  })

  let sede = function(){
      fetch(urlDirection).then(function(datos){
      return datos.json();
      }).then(function(data){
      //console.log(data.lima);
      let sede1 = data.lima.generacion;
      //console.log(Object.keys(sede1));
      let generaciones = Object.keys(sede1);


      //console.log(generaciones[0]);

    for(let i = 0; i<generaciones.length; i++) {
        fullSede.innerHTML+= "<div>" + generaciones[i] + "</div>";
let est= data.lima.generacion.cuarta.estudiantes
for (let i=0; i<est.length;i++){
  //let progress= Object.value(progreso);
  fullSede.innerHTML+="<div>" +"Nombre "+ est[i].nombre + "</div>";
  fullSede.innerHTML+="<div>" + "Turno "+ est[i].turno + "</div>";
  fullSede.innerHTML+="<div>" + "Correo "+ est[i].correo+ "</div>";
  fullSede.innerHTML+="<div>" +"Porcentaje Completado "+ est[i].progreso.porcentajeCompletado+ "</div>";
  fullSede.innerHTML+="<div>" + "Duración Programa "+est[i].progreso.duracionPrograma+"</div>";
  }
      }

      })
    }

<<<<<<< HEAD
      })
    }
//Hasta aquí imprime las generaciones de lima :(
=======
//Hasta aquí imprime las generaciones de lima :(
    cdmx.addEventListener("click", function(){
        sede1();
      })
    let sede1 = function(){
          fetch(urlDirection).then(function(datos){
          return datos.json();
          }).then(function(data){
          console.log(data.mexico.generacion);
          let sede1 = data.mexico.generacion;
          console.log(Object.keys(sede1));
          let generaciones = Object.keys(sede1);

          console.log(generaciones[0]);
        for(let i = 0; i<generaciones.length; i++) {
            fullSede.innerHTML+= "<div>" + generaciones[i] + "</div>";
            let est1= data.mexico.generacion.cuarta.estudiantes
            for (let i=0; i<est1.length;i++){
              fullSede.innerHTML+="<div>" +"Nombre "+ est1[i].nombre + "</div>";
              fullSede.innerHTML+="<div>" + "Turno "+est1[i].turno + "</div>";
              fullSede.innerHTML+="<div>" + "Correo "+est1[i].correo +"</div>";
              fullSede.innerHTML+="<div>" +"Porcentaje Completado " +est1[i].progreso.porcentajeCompletado+"</div>";
              fullSede.innerHTML+="<div>" + "Duración Programa "+est1[i].progreso.duracionPrograma+"</div>";
              //fullSede.innerHTML+="<div>" + est1[i].progreso.duracionTema+"</div>";
              }

        }
    })
}






santiago.addEventListener("click", function(){
    sede2();
  })
let sede2 = function(){
      fetch(urlDirection).then(function(datos){
      return datos.json();
      }).then(function(data){
      console.log(data.santiago.generacion);
      let sede2 = data.santiago.generacion;
      console.log(Object.keys(sede2));
      let generaciones = Object.keys(sede2);

      for(let i = 0; i<generaciones.length; i++) {
        fullSede.innerHTML+= "<div>" + generaciones[i] + "</div>";
        let est2= data.santiago.generacion.cuarta.estudiantes
        for (let i=0; i<est2.length;i++){
          fullSede.innerHTML+="<div>" +"Nombre " +est2[i].nombre + "</div>";
          fullSede.innerHTML+="<div>" +"Turno " +est2[i].turno + "</div>";
          fullSede.innerHTML+="<div>" +"Correo " +est2[i].correo +"</div>";
          fullSede.innerHTML+="<div>" +"Porcentaje Progreso "+ est2[i].progreso.porcentajeCompletado +"</div>";
          fullSede.innerHTML+="<div>" +"Duracion Programa"+ est2[i].progreso.duracionPrograma +"</div>";


          }

    }

})
}
>>>>>>> upstream/master
