// Configuracion inicial de botones de Cargar generaciones los desabilita al entrar a la pantalla
// Inician Fuunciones de la tabla del buscador 
const printInf = students =>{
  // console.log(students);
};
const printSerch = student =>{
  document.getElementById('search').addEventListener('click', (event) =>{
    event.preventDefault();
    const name = document.getElementById('name-to-search').value;
    const searchResult = filtrerStudet(student, name);
    // para imprimir en el dom
    console.log(searchResult);
    let result = '';
    // imprime resultado de la busqueda en la tabla 
    searchResult.forEach((element, i) => {
      result += `<tr>
        <th>${i + 1}</th>
        <td>${element.name}</td>
        <td>${element.generacion}</td>
        <td>${element.email}</td>
        <td>${element.stats.completedPerentage}</td>
        <td>${element.stats.status}</td>
        <td>${element.turn}</td>
      </tr>`;
    });
    document.getElementById('result').innerHTML = '';
    document.getElementById('table-body').innerHTML = result;
  });
};


// Empiezan las funciones de las tarjetas por alumna 

document.getElementById('Slima').addEventListener('click', vertarjetas);
document.getElementById('Scdmx').addEventListener('click', vertarjetas);
document.getElementById('Ssan').addEventListener('click', vertarjetas);


function descdmxysan() {
  document.getElementById('lima').disabled = 'true'; // disabled es para que este desabilitado
  document.getElementById('Scdmx').disabled = 'true';
  document.getElementById('Ssan').disabled = 'true';
}

function deslimaysan() {
  document.getElementById('mexico').disabled = 'true';
  document.getElementById('Slima').disabled = 'true';
  document.getElementById('Ssan').disabled = 'true';
}

function deslimaycdmx() {
  document.getElementById('santiago').disabled = 'true';
  document.getElementById('Scdmx').disabled = 'true';
  document.getElementById('Slima').disabled = 'true';
}

function vertarjetas() {
  data.cargandoDatos();
}

