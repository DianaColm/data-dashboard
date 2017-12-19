/*
 * Funcionalidad de tu producto
 */

// Puedes hacer uso de la base de datos a través de la variable `data`
//console.log(data);



//console.log(data['AQP']['2016-2'].students.length);
//# de estudiantes por generación
//console.log(data['AQP']['2016-2'].students[0].name);
//Para obtener nombre





  //traer a los elementos de html
  var select = document.getElementById("el-select").addEventListener("change",changeGen);
  var overviewsGeneral = document.getElementById('overview');

  // Crear elementos
  //Inscritas
  var divNumStudents = document.createElement('div');
  var divTextUno = document.createElement('h3');
  //Desertoras
  var divNumDes= document.createElement('div');
  // # + de 70%
  var divNumMasSiete = document.createElement('div');
  // % + de 70%
  var divPorcMasSiete = document.createElement('div');
  // nps
  var divNps = document.createElement('div');
  // % tech
  var divTech = document.createElement('div');
  // % hse
  var divHse = document.createElement('div');
  // satisfaccion
  var divSatisf = document.createElement('div');
  // teachers
  var divTeachers = document.createElement('div');
  // jedi
  var divJedi = document.createElement('div');



  //Crear atributos
  overviewsGeneral.classList.add('containers');
  //Inscritas
  divNumStudents.classList.add('miniDivs');
  //divTextUno.innerText = (data['AQP']['2016-2'].students.length);
  divNumStudents.innerText = '#Estudiantes';
  //Desertoras
  divNumDes.classList.add('miniDivs');
  divNumDes.innerText = '% Desert';
  // # + de 70%
  divNumMasSiete.classList.add('miniDivs');
  divNumMasSiete.innerText = '# + de 70%';
  // % + de 70%
  divPorcMasSiete.classList.add('miniDivs');
  divPorcMasSiete.innerText = '% + de 70%';
  // nps
  divNps.classList.add('miniDivs');
  divNps.innerText = 'NPS';
  // % tech
  divTech.classList.add('miniDivs');
  divTech.innerText = '% + 70% Tech';
  // % hse
  divHse.classList.add('miniDivs');
  divHse.innerText = '% + 70% HSE';
  // % satisfaccion
  divSatisf.classList.add('miniDivs');
  divSatisf.innerText = '% Satisfaction';
  // % teachers
  divTeachers.classList.add('miniDivs');
  divTeachers.innerText = '% Teachers';
  // % jedi
  divJedi.classList.add('miniDivs');
  divJedi.innerText = '% Jedi Masters';


  //Agregar a html
  divNumStudents.appendChild(divTextUno);
  overview.appendChild(divNumStudents);
  overview.appendChild(divNumDes);
  overview.appendChild(divNumMasSiete);
  overview.appendChild(divPorcMasSiete);
  overview.appendChild(divNps);
  overview.appendChild(divTech);
  overview.appendChild(divHse);
  overview.appendChild(divSatisf);
  overview.appendChild(divTeachers);
  overview.appendChild(divJedi);

//funcion para seleccionar de generacion
function changeGen(event){
    var city = select.value;
    var prom = select.options[select.selectedIndex].dataset.year;
    var totalStudents = data[city][prom]['students'].length;
    var dataRatings = data[city][prom]['ratings'];
    var arrayStudents = data[city][prom]['students'];

    var dropout = 0;
    for (var i = 0; i < arrayStudents.length; i++) {
      if (arrayStudents[i].active === false) {
        dropout++;

    var enrollmentStudents = document.getElementById('miniDivs');
    enrollmentStudents.textContent = totalStudents;
        }

      }

}
//var selectedIndex = event.target.selectedIndex;
//var selectYear = event.target[selectedIndex].dataset.year;
var enrollmentStudents = document.getElementById('miniDivs');
    enrollmentStudents.textContent = totalStudents;
//console.log(changeGen);

function  prueba(data){
  var genUnoArequipa = data['AQP']['2016-2'];
  return genUnoArequipa;
}


console.log(data['AQP']);
console.log(data['AQP']['2016-2'])
console.log(data['AQP']['2016-2'].students);
console.log(data['AQP']['2016-2'].students[0]);
console.log(data['AQP']['2016-2'].ratings);
console.log(data['AQP']['2016-2'].ratings[0]);
