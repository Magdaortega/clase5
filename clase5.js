var n1 = parseFloat(prompt("Calificacion 1"));
var n2 = parseFloat(prompt("Calificacion 2"));
var n3 = parseFloat(prompt("calificacion 3"));
var n4 = parseFloat(prompt("Calificacion 4"));
var n5 = parseFloat(prompt("Calificacion 5"));

var promedio = (n1 + n2 + n3 + n4 + n5)/5

    if(promedio >= 70){
        alert ("aprobado" + promedio)
    }else{
        alert("NO APROBADO" + promedio);
    }
