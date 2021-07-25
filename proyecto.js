let empleados = [];
class empleado {
    nombre;
    apellido;
    edad;
    
    constructor (nombre, apellido, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }
}

empleados.push(new empleado("Juan", "Pedro", 40));
empleados.push(new empleado("Ana", "Garcia", 25));
empleados.push(new empleado("María", "Zarate", 34));

function autorizarIngreso () {
    let autorizadosUno = "admin";
    let autorizadosDos = "recursos";
    let contraseña = 1234;

    rol = prompt("Cuál es su rol?");
    clave = prompt ("Cuál es la clave?");
    
    if ((rol == autorizadosUno || rol == autorizadosDos) && clave == contraseña) {
        
        let userName = prompt("Cuál es su nombre de usuario","usuario");
        
        $('#saludo').html(`Bienvenido ${userName} a nuestra aplicación`);
        
        mostrarEmpleados();
        ingresarEmpleados();
        vaciarEmpleados();
        eliminar();
    }
    else $('#saludo').html(`Error de usuario y/o contraseña. Comuníquese con un administrador`);
    }

function mostrarEmpleados() {
    $("#formulario").css("display","");
    $("#tabla").css("display","");
    $("tbody").html("")
        
    for (let i = 0; i < empleados.length; i++){
        let nombre= empleados[i].nombre;
        let apellido = empleados[i].apellido;
        let edad = empleados[i].edad;
        $("tbody").append(`<tr> <td>${i+1}</td> <td>${nombre}</td> <td>${apellido}</td> <td>${edad}</td> <td><button class="btn btn-danger eliminar ${i}">X</button></td></tr>`);
    }
    eliminar()
}

function ingresarEmpleados() {
    nombre = $("#nombre");
    apellido = $("#apellido");
    edad = $("#edad");

    document.getElementById("agregar").onclick = agregar;

    function agregar () {
        let validar=confirm(`¿Desea agregar a  ${nombre[0].value} ${apellido[0].value} de ${edad[0].value} años como empleado?`);
        if (validar) {
            empleados.push(new empleado(nombre[0].value, apellido[0].value, +edad[0].value));
            mostrarEmpleados();
        }
    }
}

function vaciarEmpleados() {

    $("#vaciar").click(vaciar);

    function vaciar () {
        let validar=confirm(`CIUDADO, ESTA ACCIÓN NO SE PUEDE DESHACER: ¿Desea eliminar todos los empleados?`);
        if (validar) {
            empleados = []
            mostrarEmpleados();
        }
    }
}

function eliminar() {
    let boton = document.getElementsByClassName("eliminar");
    
    for (let i=0; i<boton.length; i++) {
        boton[i].onclick = alertaEliminar
    };
    
    function alertaEliminar() {
        claseStr = $(this).attr("class");
        posicion = claseStr.charAt(claseStr.length-1);
        validar = confirm(`¿Desea eliminar al empleado #${+posicion + 1}`);
        if (validar) {
            empleados.splice(posicion,1)
            mostrarEmpleados();
        }
    }
}

autorizarIngreso()

/*----------------- Inicio del programa -------------------*/




/*

let boton = document.getElementsByTagName("button");

for(var i=0; i<boton.length; i++){
    boton[i].onclick = alerta
};

function alerta() {
    alert("El color es " + this.innerHTML)
    document.querySelector('h1').innerHTML = ("El color es " + this.innerHTML)
    document.querySelector('h1').style.backgroundColor=this.innerHTML
};

let datos = [
    { id: "1", pais: "Saint Barthelemy", pbi: "110.59" },
    { id: "2", pais: "Nicaragua", pbi: "825.55" },
    { id: "3", pais: "Isle of Man", pbi: "461.42" },
    { id: "4", pais: "Moldova", pbi: "462.37" },
    { id: "5", pais: "Seychelles", pbi: "119.12" },
    { id: "6", pais: "French Southern Territories", pbi: "625.72" },
    { id: "7", pais: "Norfolk Island", pbi: "95.84" },
    { id: "8", pais: "Pitcairn Islands", pbi: "772.10" },
    { id: "9", pais: "Costa Rica", pbi: "104.12" },
    { id: "10", pais: "Sudan", pbi: "142.25" },
    { id: "11", pais: "Denmark", pbi: "860.02" },
    { id: "12", pais: "Brunei Darussalam", pbi: "411.99" },
    {
        id: "13",
        pais: "Holy See (Vatican City State)",
        pbi: "169.66",
    },
    { id: "14", pais: "Faroe Islands", pbi: "917.45" },
    { id: "15", pais: "Guinea-Bissau", pbi: "220.63" },
    { id: "16", pais: "Bangladesh", pbi: "257.47" },
    { id: "17", pais: "Burkina Faso", pbi: "787.78" },
    { id: "18", pais: "San Marino", pbi: "80.47" },
    { id: "19", pais: "Brunei Darussalam", pbi: "37.05" },
    {
        id: "20",
        pais: "British Indian Ocean Territory (Chagos Archipelago)",
        pbi: "863.19",
    },
    { id: "21", pais: "Egypt", pbi: "309.19" },
    {
        id: "22",
        pais: "Lao People's Democratic Republic",
        pbi: "997.11",
    },
    { id: "23", pais: "Vietnam", pbi: "453.43" },
    { id: "24", pais: "Somalia", pbi: "69.92" },
    { id: "25", pais: "Jordan", pbi: "667.74" },
    { id: "26", pais: "Puerto Rico", pbi: "2.96" },
    { id: "27", pais: "Reunion", pbi: "430.68" },
    { id: "28", pais: "Switzerland", pbi: "82.22" },
    { id: "29", pais: "Canada", pbi: "267.53" },
    { id: "30", pais: "Mali", pbi: "146.46" },
    { id: "31", pais: "Afghanistan", pbi: "919.90" },
    { id: "32", pais: "Honduras", pbi: "458.81" },
    { id: "33", pais: "Guernsey", pbi: "805.04" },
    { id: "34", pais: "Iraq", pbi: "851.75" },
    { id: "35", pais: "Luxembourg", pbi: "107.58" },
    { id: "36", pais: "Bulgaria", pbi: "196.31" },
    { id: "37", pais: "French Polynesia", pbi: "230.19" },
    { id: "38", pais: "Colombia", pbi: "534.19" },
    { id: "39", pais: "Saint Helena", pbi: "602.95" },
    {
        id: "40",
        pais: "Holy See (Vatican City State)",
        pbi: "212.85",
    },
    { id: "41", pais: "Indonesia", pbi: "268.99" },
    { id: "42", pais: "Macedonia", pbi: "597.48" },
    { id: "43", pais: "Guinea-Bissau", pbi: "128.46" },
    { id: "44", pais: "Tanzania", pbi: "80.50" },
    { id: "45", pais: "Gabon", pbi: "410.52" },
    { id: "46", pais: "Nauru", pbi: "678.17" },
    { id: "47", pais: "Djibouti", pbi: "756.24" },
    { id: "48", pais: "Colombia", pbi: "30.08" },
    { id: "49", pais: "Uzbekistan", pbi: "899.00" },
    { id: "50", pais: "Botswana", pbi: "639.15" },
    { id: "51", pais: "Oman", pbi: "903.09" },
    { id: "52", pais: "Anguilla", pbi: "482.61" },
    { id: "53", pais: "Seychelles", pbi: "916.33" },
    { id: "54", pais: "Greenland", pbi: "723.98" },
    { id: "55", pais: "Northern Mariana Islands", pbi: "760.62" },
    { id: "56", pais: "New Zealand", pbi: "814.90" },
    { id: "57", pais: "Russian Federation", pbi: "587.43" },
    { id: "58", pais: "Algeria", pbi: "719.69" },
    { id: "59", pais: "Vietnam", pbi: "822.38" },
    { id: "60", pais: "Saint Pierre and Miquelon", pbi: "808.34" },
    { id: "61", pais: "Bhutan", pbi: "201.12" },
    { id: "62", pais: "Nepal", pbi: "642.86" },
    { id: "63", pais: "Senegal", pbi: "789.02" },
    { id: "64", pais: "Cote d'Ivoire", pbi: "492.88" },
    { id: "65", pais: "Rwanda", pbi: "613.79" },
    { id: "66", pais: "Ethiopia", pbi: "250.16" },
    { id: "67", pais: "Pakistan", pbi: "38.88" },
    { id: "68", pais: "Samoa", pbi: "79.18" },
    { id: "69", pais: "Dominican Republic", pbi: "352.29" },
    { id: "70", pais: "Lithuania", pbi: "195.90" },
    { id: "71", pais: "Guernsey", pbi: "713.65" },
    { id: "72", pais: "Aruba", pbi: "455.22" },
    { id: "73", pais: "Latvia", pbi: "472.68" },
    { id: "74", pais: "Zambia", pbi: "941.00" },
    { id: "75", pais: "French Guiana", pbi: "103.73" },
    { id: "76", pais: "Bulgaria", pbi: "753.70" },
    { id: "77", pais: "Virgin Islands, British", pbi: "94.99" },
    { id: "78", pais: "Morocco", pbi: "889.25" },
    { id: "79", pais: "Iceland", pbi: "429.27" },
    { id: "80", pais: "Guadeloupe", pbi: "380.89" },
    { id: "81", pais: "Ethiopia", pbi: "160.99" },
    { id: "82", pais: "Dominican Republic", pbi: "229.12" },
    { id: "83", pais: "Christmas Island", pbi: "663.08" },
    { id: "84", pais: "Tanzania", pbi: "705.94" },
    { id: "85", pais: "Saudi Arabia", pbi: "985.38" },
    { id: "86", pais: "Serbia", pbi: "106.64" },
    { id: "87", pais: "Benin", pbi: "257.08" },
    { id: "88", pais: "Seychelles", pbi: "575.85" },
    {
        id: "89",
        pais: "Svalbard & Jan Mayen Islands",
        pbi: "746.35",
    },
    { id: "90", pais: "Bolivia", pbi: "440.14" },
    {
        id: "91",
        pais: "South Georgia and the South Sandwich Islands",
        pbi: "864.19",
    },
    { id: "92", pais: "Romania", pbi: "167.17" },
    {
        id: "93",
        pais: "Lao People's Democratic Republic",
        pbi: "390.03",
    },
    { id: "94", pais: "Colombia", pbi: "221.29" },
    { id: "95", pais: "Sweden", pbi: "178.37" },
    { id: "96", pais: "Antigua and Barbuda", pbi: "618.19" },
    { id: "97", pais: "Monaco", pbi: "517.34" },
    { id: "98", pais: "Indonesia", pbi: "90.46" },
    { id: "99", pais: "Andorra", pbi: "1.10" },
    { id: "100", pais: "Sao Tome and Principe", pbi: "306.68" },
];

let nombrePais = prompt("Ingrese el pais:")

let paisesFiltrados = datos.filter(aux => aux.pais == nombrePais);


let divPaisesFiltrados = document.getElementById('resultado');
for(let pais of paisesFiltrados) {
    divPaisesFiltrados.innerHTML += `id: ${pais.id}, pais: ${pais.pais},
    pbi: ${pais.pbi} <br>`;
}

*/




