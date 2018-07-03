let urlDirection = "https://raw.githubusercontent.com/Laboratoria/cdmx-2018-06-bc-core-am-data-dashboard/master/data/laboratoria.json";
let fullSede = document.querySelector("#botonesSede");
let btn = document.querySelector("#lima");
let btn1 = document.querySelector("#cdmx");
let btn2 = document.querySelector("#santiago");
let estudiantes = document.querySelector("#estudiantes");
// usando el boton de las sedes llamamos a la función para que aparezca en consola data>lima>generacion>cuarta
lima.addEventListener("click", function(){
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
        fullSede.innerHTML+= "<div>" + generaciones[i] + "</div>";}
        
      })
    }  
    
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
        
    }
})
}
