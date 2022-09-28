function agregarElementos(){
var lista=document.getElementById('mylista');
array.forEach(function(data,index){
var linew= document.createElement('li');
var contenido = document.createTextNode(data.marca+' '+data.modelo+" "+data.sistema_operativo+" "+data.pantalla_pulgadas+" "+data.pantalla_resolucion+" "+data.camara_resolucion);
lista.appendChild(linew);
linew.appendChild(contenido);
})
}

function calculoImc(){
  var p = document.getElementById('peso').value;
  var e = document.getElementById('altura').value;
  var res = p/(e*e);
  if((p != '' || p != 0) && e != '' || e != 0 ){
  var imc = document.getElementById('res').value = res.toFixed(2);
}
else{
    alert('Datos Obligatorios')
  }

}

function validar(){
var p = document.getElementById('peso').value;
var a = document.getElementById('altura').value;
var v = document.getElementById('v1');
var x = document.getElementById('v2');
if(p == ''){
 v.innerHTML = 'Obligatorio';
 v.style.color = 'red';
}
else{
  v.innerHTML = '';
}
if(a == ''){
x.innerHTML = 'Obligatorio';
x.style.color = 'red';
}
else{
x.innerHTML = '';
}
}
//Limpiar
function limpiar(){
  document.getElementById('peso').value = '';
  document.getElementById('altura').value  = '';
  document.getElementById('res').value = '';
  document.getElementById('name').value = '';
}
//listado
array= [
    {
        "marca": "Moitorola",
        "modelo": "G 84 PLAY",
        "sistema_operativo": "Android",
        "pantalla_pulgadas": 5,
        "pantalla_resolucion": "1280x720",
        "camara_resolucion": "8 Mpx",
        "camara_frontal": true,
        "camara_frontal_res": "5 Mpx",
        "memoria_interna": "16 GB"
    },
    {
        "marca": "Motorola",
        "modelo": "G 4 PLAY",
        "sistema_operativo": "Android",
        "pantalla_pulgadas": 5,
        "pantalla_resolucion": "1280x720",
        "camara_resolucion": "8 Mpx",
        "camara_frontal": true,
        "camara_frontal_res": "5 Mpx",
        "memoria_interna": "16 GB"
    },
    {
        "marca": "Samnsung",
        "modelo": "G 4 PLAY",
        "sistema_operativo": "Android",
        "pantalla_pulgadas": 5,
        "pantalla_resolucion": "1280x720",
        "camara_resolucion": "8 Mpx",
        "camara_frontal": true,
        "camara_frontal_res": "5 Mpx",
        "memoria_interna": "16 GB"
    },
  ]
  function crearTabla(datosTabla) {
    var tabla = document.createElement('table');
    var tabla = document.createElement('th');
    var cuerpoTabla = document.createElement('tbody');

    datosTabla.forEach(function(datosFilas) {
      var fila = document.createElement('tr');

      datosFilas.forEach(function(datosCeldas) {
        var celda = document.createElement('td');
        celda.appendChild(document.createTextNode(datosCeldas));
        fila.appendChild(celda);
      });

      cuerpoTabla.appendChild(fila);
    });

    tabla.appendChild(cuerpoTabla);
    document.body.appendChild(tabla);
  }
