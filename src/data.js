window.data = {

  cargandoDatos: () => {
    let laboratoria = fetch('https://raw.githubusercontent.com/zabarca/cdmx-2018-06-bc-core-am-data-dashboard/master/data/laboratoria.json');
    // check box
    if (formulario.terceralim.checked === true) {
      data.computeStudentsStats(laboratoria);
    }

    if (formulario.cuartalim.checked === true) {
      data.computeStudentsStats1(laboratoria);
    }

    if (formulario.quintalim.checked === true) {
      data.computeStudentsStats2(laboratoria);
    }

    if (formulario.terceracdmx.checked === true) {
      data.computeStudentsStats3(laboratoria);
    }

    if (formulario.cuartacdmx.checked === true) {
      data.computeStudentsStats4(laboratoria);
    }

    if (formulario.quintacdmx.checked === true) {
      data.computeStudentsStats5(laboratoria);
    }

    if (formulario.tercerasan.checked === true) {
      data.computeStudentsStats6(laboratoria);
    }

    if (formulario.cuartasan.checked === true) {
      data.computeStudentsStats7(laboratoria);
    }

    if (formulario.quintasan.checked === true) {
      data.computeStudentsStats8(laboratoria);
    }
  },

  // Función de las tarjetas 
  computeStudentsStats: (laboratoria) => {
    laboratoria.then(function(res) {
      return res.json();
    })
      .then(function(data) {
        let obtenidos = data.lima.generacion.tercera.estudiantes;
        let contenedor = ''; // el contenedor se llena con los datos de abajo
        obtenidos.forEach(element => {
          contenedor += `<div class="card">
                  <p>Nombre: ${element.nombre}</p>
                  <p>Correo: ${element.correo}</p>
                  <p>Turno: ${element.turno} </p>
                  <p>Duración Programa (hrs): ${element.progreso.duracionPrograma} </p>
                  <p>Porcentaje Completado %: ${element.progreso.porcentajeCompletado} </p>
                  </div>`;
        });

        let retornados = JSON.stringify(contenedor); // reemplaza o convierte un valor dado a una cadena 
        // insertAdjacentHTML analiza la cadena de texto introducida como cadena html e inserta al DOM la posicion especificada "beforeEnd"
        let result = document.getElementById('resultado');
        result.insertAdjacentHTML('beforeEnd', contenedor); 
      });
  },
  
  computeStudentsStats1: (laboratoria) => {
    laboratoria.then(function(res) {
      return res.json();
    })
      .then(function(data) {
        let obtenidos = data.lima.generacion.cuarta.estudiantes;
        let contenedor = '';
        obtenidos.forEach(element => {
          contenedor += `<div class="card">
                  <p>Nombre: ${element.nombre}</p>
                  <p>Correo: ${element.correo}</p>
                  <p>Turno: ${element.turno} </p>
                  <p>Duración Programa (hrs): ${element.progreso.duracionPrograma} </p>
                  <p>Porcentaje Completado %: ${element.progreso.porcentajeCompletado} </p>
                  </div>`;
        });
        let retornados = JSON.stringify(contenedor);
        let result = document.getElementById('resultado');
        result.insertAdjacentHTML('beforeEnd', contenedor);
      });
  },

  computeStudentsStats2: (laboratoria) => {
    laboratoria.then(function(res) {
      return res.json();
    })
      .then(function(data) {
        let obtenidos = data.lima.generacion.quinta.estudiantes;
        let contenedor = '';
        obtenidos.forEach(element => {
          contenedor += `<div class="card">
                  <p>Nombre: ${element.nombre}</p>
                  <p>Correo: ${element.correo}</p>
                  <p>Turno: ${element.turno} </p>
                  <p>Duración Programa (hrs): ${element.progreso.duracionPrograma} </p>
                  <p>Porcentaje Completado %: ${element.progreso.porcentajeCompletado} </p>
                  </div>`;
        });
        let retornados = JSON.stringify(contenedor);
        let result = document.getElementById('resultado');
        result.insertAdjacentHTML('beforeEnd', contenedor);
      });
  },
  computeStudentsStats3: (laboratoria) => {
    laboratoria.then(function(res) {
      return res.json();
    })
      .then(function(data) {
        let obtenidos = data.mexico.generacion.tercera.estudiantes;
        let contenedor = '';
        obtenidos.forEach(element => {
          contenedor += `<div class="card">
                  <p>Nombre: ${element.nombre}</p>
                  <p>Correo: ${element.correo}</p>
                  <p>Turno: ${element.turno} </p>
                  <p>Duración Programa (hrs): ${element.progreso.duracionPrograma} </p>
                  <p>Porcentaje Completado %: ${element.progreso.porcentajeCompletado} </p>
                  </div>`;
        });
        let retornados = JSON.stringify(contenedor);
        let result = document.getElementById('resultado');
        result.insertAdjacentHTML('beforeEnd', contenedor);
      });
  },


  computeStudentsStats4: (laboratoria) => {
    laboratoria.then(function(res) {
      return res.json();
    })
      .then(function(data) {
        let obtenidos = data.mexico.generacion.cuarta.estudiantes;
        let contenedor = '';
        obtenidos.forEach(element => {
          contenedor += `<div class="card">
                  <p>Nombre: ${element.nombre}</p>
                  <p>Correo: ${element.correo}</p>
                  <p>Turno: ${element.turno} </p>
                  <p>Duración Programa (hrs): ${element.progreso.duracionPrograma} </p>
                  <p>Porcentaje Completado %: ${element.progreso.porcentajeCompletado} </p>
                  </div>`;
        });
        let retornados = JSON.stringify(contenedor);
        let result = document.getElementById('resultado');
        result.insertAdjacentHTML('beforeEnd', contenedor);
      });
  },
  computeStudentsStats5: (laboratoria) => {
    laboratoria.then(function(res) {
      return res.json();
    })
      .then(function(data) {
        let obtenidos = data.mexico.generacion.quinta.estudiantes;
        let contenedor = '';
        obtenidos.forEach(element => {
          contenedor += `<div class="card">
                <p>Nombre: ${element.nombre}</p>
                <p>Correo: ${element.correo}</p>
                <p>Turno: ${element.turno} </p>
                <p>Duración Programa (hrs): ${element.progreso.duracionPrograma} </p>
                <p>Porcentaje Completado %: ${element.progreso.porcentajeCompletado} </p>
                </div>`;
        });
        let retornados = JSON.stringify(contenedor);
        let result = document.getElementById('resultado');
        result.insertAdjacentHTML('beforeEnd', contenedor);
      });
  },
  computeStudentsStats6: (laboratoria) => {
    laboratoria.then(function(res) {
      return res.json();
    })
      .then(function(data) {
        let obtenidos = data.santiago.generacion.tercera.estudiantes;
        let contenedor = '';
        obtenidos.forEach(element => {
          contenedor += `<div class="card">
                  <p>Nombre: ${element.nombre}</p>
                  <p>Correo: ${element.correo}</p>
                  <p>Turno: ${element.turno} </p>
                  <p>Duración Programa (hrs): ${element.progreso.duracionPrograma} </p>
                  <p>Porcentaje Completado %: ${element.progreso.porcentajeCompletado} </p>
                  </div>`;
        });
        let retornados = JSON.stringify(contenedor);
        let result = document.getElementById('resultado');
        result.insertAdjacentHTML('beforeEnd', contenedor);
      });
  },

  computeStudentsStats7: (laboratoria) => {
    laboratoria.then(function(res) {
      return res.json();
    })
      .then(function(data) {
        let obtenidos = data.santiago.generacion.cuarta.estudiantes;
        let contenedor = '';
        obtenidos.forEach(element => {
          contenedor += `<div class="card">
                  <p>Nombre: ${element.nombre}</p>
                  <p>Correo: ${element.correo}</p>
                  <p>Turno: ${element.turno} </p>
                  <p>Duración Programa (hrs): ${element.progreso.duracionPrograma} </p>
                  <p>Porcentaje Completado %: ${element.progreso.porcentajeCompletado} </p>
                  </div>`;
        });
        let retornados = JSON.stringify(contenedor);
        let result = document.getElementById('resultado');
        result.insertAdjacentHTML('beforeEnd', contenedor);
      });
  },
  computeStudentsStats8: (laboratoria) => {
    laboratoria.then(function(res) {
      return res.json();
    })
      .then(function(data) {
        let obtenidos = data.santiago.generacion.quinta.estudiantes;
        let contenedor = '';
        obtenidos.forEach(element => {
          contenedor += `<div class="card">
                  <p>Nombre: ${element.nombre}</p>
                  <p>Correo: ${element.correo}</p>
                  <p>Turno: ${element.turno} </p>
                  <p>Duración Programa (hrs): ${element.progreso.duracionPrograma} </p>
                  <p>Porcentaje Completado %: ${element.progreso.porcentajeCompletado} </p>
                  </div>`;
        });
        let retornados = JSON.stringify(contenedor);
        let result = document.getElementById('resultado');
        result.insertAdjacentHTML('beforeEnd', contenedor);
      });
  },

  computeGenerationsStats: () => {
  },
  sortStudents: () => {
  },
  filterStudents: () => {
  }
};

prueba = (event)=>{
  console.log(event.target.value);
};


const url = 'https://raw.githubusercontent.com/zabarca/cdmx-2018-06-bc-core-am-data-dashboard/master/data/laboratoria.json';
window.getData = ()=>{
  fetch(url)
    .then(result => result.json())
    .then(result=>{
      const students = computeStudentStas(result);
      printInf(students);
      printSerch(students);
      // aqui le estoy diciendo a computeStudentStas que es mi funcion global que me la traiga asi que la renombro en vez de resul la pongo como laboratoria
    });
};
window.addstats = progress =>{
  // console.log(progress);
  let stats = {}; 
  let temasArrays = progress.temas;

  // asi dejmos la escructura del archivo  ya que teniamos todos los subtemas  asi lo los renombramos
  stats.topics = temasArrays;
  // para acceder a porcentaje completado
  stats.completedPerentage = progress.porcentajeCompletado;

  // console.log(stats);
  if (progress.porcentajeCompletado < 60) {
    stats.status = 'Bajo';
  }
  // console.log(stats);
  if (progress.porcentajeCompletado > 60 && progress.porcentajeCompletado < 90) {
    stats.status = 'Medio';
  } else {
    stats.status = 'Alto';
    // console.log(stats);
  }
  // console.log(stats);
  let properties = Object.values(progress.temas);
  // console.log(properties);
  properties.forEach(content =>{
    // console.log(content.porcentajeCompletado);
    content.completedPerentage = content.porcentajeCompletado;
    // crear una nueva pro k se llame presentash duration y asignarle el porcentaje de tiempo invertido segun la duracion ind de cada tema
    content.percentageDuration = Math.round((content.duracionTemaCompletado * 100) / content.duracionTema); // math.round hace que sean numeros redondeados 
    let subTopicArrays = content.subtemas;
    let subProperties = Object.values(subTopicArrays);
    subProperties.forEach(subCont =>{
      subCont.type = subCont.tipo;
      subCont.duration = subCont.duracionSubtema;
      if (subCont.completado === 1) {
        subCont.completedPerentage = 100;
      } else {
        subCont.completedPerentage = 0;
      }
    });
  });
  return stats;
  console.log(stats);
};
window.computeStudentStas = (laboratoria) =>{
  let campus = '';
  let generationArray = '';
  let studentArray = [];
  let i = 0;
  let j = 0;

  campus = Object.keys(laboratoria);

  generationArray = Object.values(laboratoria);
  // aqui element es la palabra que esta fediniendo el nivel al que estoy entrando
  // element va a ir vicitando cada uno de los deptos
  generationArray.forEach(element =>{
    let allGenerations = '';
    // aqui le estoy diciendo que quiero ver el nombre de las gen en este caso tercera cuarta quinta
    allGenerations = Object.keys(element.generacion);
    allGenerationsContent = Object.values(element.generacion);
    // console.log(allGenerationsContent);
    j = 0;
    allGenerationsContent.forEach(student => {
      //  console.log(student.estudiantes); ahora la hago variable
      let students = student.estudiantes;
      students.forEach(infoEstudent => {
        //  console.log(infoEstudent.nombre); aki ya entramos podemos ver su nombre o correo ec.
        // add estas va a ser aggregando estatutos Y LA PONGO AKI pork al llegar aki se regresa arriba a buscar
        let stats = addstats(infoEstudent.progreso);
        studentArray.push({
          'campus': campus[i],
          'generacion': allGenerations[j],
          'name': infoEstudent.nombre,
          'email': infoEstudent.correo,
          'turn': infoEstudent.turno,
          'stats': stats

        });
        i++;
      });
      j++;
    });
  });

  // console.log(studentArray);
  return studentArray;
};
window.filtrerStudet = (student, search) =>{
  let searchResult = [];
  student.forEach(element =>{
    if (element.name.indexOf(search) !== -1) {
      searchResult.push(element);
    }
    // console.log(element);
  });
  return searchResult;
};
