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


//---------- TOTAL DE ESTUDIANTES POR SEDE---------------
  var totalStudentsAre1 = data['AQP']['2016-2'].students.length;
  console.log("Arequipa 2016-2 = " + totalStudentsAre1);
  var totalStudentsAre2 = data['AQP']['2017-1'].students.length;
  console.log("Arequipa 2017-1 = " + totalStudentsAre2);
  var totalStudentsCdmx1 = data['CDMX']['2017-1'].students.length;
  console.log("CDMX 2017-1 = " + totalStudentsCdmx1);
  var totalStudentsCdmx2 = data['CDMX']['2017-2'].students.length;
  console.log("CDMX 2017-2 = " + totalStudentsCdmx2);
  var totalStudentsLim1 = data['LIM']['2016-2'].students.length;
  console.log("LIM 2016-2 = " + totalStudentsLim1);
  var totalStudentsLim2 = data['LIM']['2017-1'].students.length;
  console.log("LIM 2017-1 = " + totalStudentsLim2);
  var totalStudentsLim3 = data['LIM']['2017-2'].students.length;
  console.log("LIM 2017-2 = " + totalStudentsLim3);
  var totalStudentsScl1 = data['SCL']['2016-2'].students.length;
  console.log("SCL 2016-2 = " + totalStudentsScl1);
  var totalStudentsScl2 = data['SCL']['2017-1'].students.length;
  console.log("SCL 2017-1 = " + totalStudentsScl2);
  var totalStudentsScl3 = data['SCL']['2017-2'].students.length;
  console.log("SCL 2017-2 = " + totalStudentsScl3);



//-------DESERTORAS-------------
// Porcentaje de desertora Arequipa 1 generación
var desertorArequipa1 = data['AQP']['2016-2'].students;
var dropout = 0;
for (var i = 0; i < desertorArequipa1.length; i++) {
  if (desertorArequipa1[i].active === false) {
    dropout++;
  }
};
var porcentDesert = ((dropout * 100) / totalStudentsAre1).toFixed(2);
console.log("Porcentaje de deserción en ARQ 2016-2 = " + porcentDesert + "%" );


// Porcentaje de desertora Arequipa 2 generación
var desertorArequipa2 = data['AQP']['2017-1'].students;
var dropout = 0;
for (var i = 0; i < desertorArequipa2.length; i++) {
  if (desertorArequipa2[i].active === false) {
    dropout++;
  }
};
var porcentDesert = ((dropout * 100) / totalStudentsAre2).toFixed(2);
console.log("Porcentaje de deserción en ARQ 2017-1 = " + porcentDesert + "%" );



// Porcentaje de desertora CDMX 1 generación
var desertorCdmx1 = data['CDMX']['2017-1'].students;
var dropout = 0;
for (var i = 0; i < desertorCdmx1.length; i++) {
  if (desertorCdmx1[i].active === false) {
    dropout++;
  }
};
var porcentDesert = ((dropout * 100) / totalStudentsCdmx1).toFixed(2);
console.log("Porcentaje de deserción en CDMX 2017-1 = " + porcentDesert + "%" );



// Porcentaje de desertora CDMX 2 generación
var desertorCdmx2 = data['CDMX']['2017-2'].students;
var dropout = 0;
for (var i = 0; i < desertorCdmx2.length; i++) {
  if (desertorCdmx2[i].active === false) {
    dropout++;
  }
};
var porcentDesert = ((dropout * 100) / totalStudentsCdmx2).toFixed(2);
console.log("Porcentaje de deserción en CDMX 2017-2 = " + porcentDesert + "%" );


// Porcentaje de desertora Lima 1 generación
var desertorLim1 = data['LIM']['2016-2'].students;
var dropout = 0;
for (var i = 0; i < desertorLim1.length; i++) {
  if (desertorLim1[i].active === false) {
    dropout++;
  }
};
var porcentDesert = ((dropout * 100) / totalStudentsLim1).toFixed(2);
console.log("Porcentaje de deserción en Lima 2016-2 = " + porcentDesert + "%" );


// Porcentaje de desertora Lima 2 generación
var desertorLim2 = data['LIM']['2017-1'].students;
var dropout = 0;
for (var i = 0; i < desertorLim2.length; i++) {
  if (desertorLim2[i].active === false) {
    dropout++;
  }
};
var porcentDesert = ((dropout * 100) / totalStudentsLim2).toFixed(2);
console.log("Porcentaje de deserción en Lima 2017-1 = " + porcentDesert + "%" );


// Porcentaje de desertora Lima 3 generación
var desertorLim3 = data['LIM']['2017-2'].students;
var dropout = 0;
for (var i = 0; i < desertorLim3.length; i++) {
  if (desertorLim3[i].active === false) {
    dropout++;
  }
};
var porcentDesert = ((dropout * 100) / totalStudentsLim3).toFixed(2);
console.log("Porcentaje de deserción en Lima 2017-2 = " + porcentDesert + "%" );


// Porcentaje de desertora SLC 1 generación
var desertorScl1 = data['SCL']['2016-2'].students;
var dropout = 0;
for (var i = 0; i < desertorScl1.length; i++) {
  if (desertorScl1[i].active === false) {
    dropout++;
  }
};
var porcentDesert = ((dropout * 100) / totalStudentsScl1).toFixed(2);
console.log("Porcentaje de deserción en Scl 2016-2 = " + porcentDesert + "%" );


// Porcentaje de desertora SLC 2 generación
var desertorScl2 = data['SCL']['2017-1'].students;
var dropout = 0;
for (var i = 0; i < desertorScl2.length; i++) {
  if (desertorScl2[i].active === false) {
    dropout++;
  }
};
var porcentDesert = ((dropout * 100) / totalStudentsScl2).toFixed(2);
console.log("Porcentaje de deserción en Scl 2017-1 = " + porcentDesert + "%" );


// Porcentaje de desertora SLC 3 generación
var desertorScl3 = data['SCL']['2017-2'].students;
var dropout = 0;
for (var i = 0; i < desertorScl3.length; i++) {
  if (desertorScl3[i].active === false) {
    dropout++;
  }
};
var porcentDesert = ((dropout * 100) / totalStudentsScl3).toFixed(2);
console.log("Porcentaje de deserción en Scl 2017-2 = " + porcentDesert + "%" );

//--------- TEACHERS-------
// Teachers Arequipa gen 1
var sumTeachersArq1 = 0;
var dataRatingArq1 = data['AQP']['2016-2']["ratings"];

for(var i = 0; i < dataRatingArq1.length; i++){
  sumTeachersArq1 += dataRatingArq1[i]["teacher"];
}

 var porcentRatingTeachersArq1 = (sumTeachersArq1 / dataRatingArq1.length).toFixed(2);
 console.log("Porcentaje total de teachers en ARQ 2016-2 = " + porcentRatingTeachersArq1 + "%");

//----SATISFACCION-----
// Satisfaccion Arequipa gen 1
var cumpleArq1 = 0;
var superaArq1 = 0;

for(var i = 0; i < dataRatingArq1.length; i++){
  cumpleArq1 += (dataRatingArq1[i]['student']['cumple']) / dataRatingArq1.length;
  superaArq1 += (dataRatingArq1[i]['student']['supera']) / dataRatingArq1.length;

}
console.log( "Porcentaje total de teachers en ARQ 2016-2 = " + (cumpleArq1 + superaArq1) + "%");


//----JEDI MASTER-----
// Jedi Masters Arequipa gen 1
var jediMasterArq1 = 0;
for(var i = 0; i < dataRatingArq1.length; i++){
  jediMasterArq1 += dataRatingArq1[i]['jedi'];
}
var jediMasterPorcentArq1 = (jediMasterArq1 / dataRatingArq1.length).toFixed(2)
console.log("Porcentaje total de Jedi Master en ARQ 2016-2 = " + jediMasterPorcentArq1 + "%");



/*//funcion para seleccionar de generacion
var select = document.getElementById("el-select").addEventListener("change", changeGen);

function changeGen(){
  //var selectedIndex =
  //var selectYear = [selectedIndex].dataset.year;

    var city = event.target.selectedIndex;
    var prom = event.target[city].dataset.year;
    var totalStudents = data[city][prom]['students'].length;
    var dataRatings = data[city][prom]['ratings'];
    var arrayStudents = data[city][prom]['students'];

    console.log(dataRatings);

    var dropout = 0;
    for (var i = 0; i < arrayStudents.length; i++) {
      if (arrayStudents[i].active === false) {
        dropout++;
        }
      }
      var dropoutPercent = ((dropout / totalStudents) * 100).toFixed(1) + '%';

      var enrollmentStudents = document.getElementsByClassName('miniDivs');
      enrollmentStudents.textContent = totalStudents;
}
console.log(changeGen);

/*function  prueba(data){
  var genUnoArequipa = data['AQP']['2016-2'];
  return genUnoArequipa;
}


console.log(data['AQP']);
console.log(data['AQP']['2016-2'])
console.log(data['AQP']['2016-2'].students);
console.log(data['AQP']['2016-2'].students[0]);
console.log(data['AQP']['2016-2'].ratings);
console.log(data['AQP']['2016-2'].ratings[0]);
*/
