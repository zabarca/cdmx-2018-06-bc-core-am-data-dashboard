
// Configuracion inicial de botones de Cargar generaciones los desabilita al entrar ala pantalla

document.getElementById('Slima').addEventListener('click', cargartabla);
document.getElementById('Scdmx').addEventListener('click', cargartabla);
document.getElementById('Ssan').addEventListener('click', cargartabla);


function descdmxysan() {
  document.getElementById('lima').disabled = false;
  document.getElementById('Scdmx').disabled = 'true';
  document.getElementById('Ssan').disabled = 'true';
}

function deslimaysan() {
  document.getElementById('mexico').disabled = false;
  document.getElementById('Slima').disabled = 'true';
  document.getElementById('Ssan').disabled = 'true';
}

function deslimaycdmx() {
  document.getElementById('santiago').disabled = false;
  document.getElementById('Scdmx').disabled = 'true';
  document.getElementById('Slima').disabled = 'true';
}

function cargartabla() {
  data.cargandoDatos();
}
