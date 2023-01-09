import * as validate from './validate.js'
import { addBaseDatos } from './date.js';

let add = document.querySelector("#agregar")
add.addEventListener("click", agregar);

function p(y) {
    return document.getElementById(y);
}

function agregar(){
    var nombre = p("inputNombre").value;
    var apellidos = p("inputApellidos").value;
    var curso = p("inputCurso").value;
    var fechaNac = p("inputNacimiento").value;
    var ciudad = p("inputCiudad").value;
    var pais = p("inputPais").value;
    var fecha=new Date(fechaNac);
    var mes = fecha.getMonth() + 1;
    var dia = fecha.getDate();
    var ano = fecha.getFullYear();
    var sign="";

    
    
    console.log(fecha);
    console.log(mes);
    console.log(dia);
    console.log(ano);

    let nacimiento = `${dia}/${mes}/${ano}`;
    console.log(nacimiento);

    if ((mes===12 && dia>21) || (mes===1 && dia<=19)){
    sign="Capricornio";
    } else if ((mes===1 && dia>19) || (mes===2 && dia<=18)){
    sign="Acuario";
    } else if ((mes===2 && dia>18) || (mes===3 && dia<=20)){
    sign="Piscis";
    } else if ((mes===3 && dia>20) || (mes===4 && dia<=19)){
    sign="Aries";
    } else if ((mes===4 && dia>19) || (mes===5 && dia<=20)){
    sign="Tauro";
    } else if ((mes===5 && dia>20) || (mes===6 && dia<=20)){
    sign="Geminis";
    } else if ((mes===6 && dia>20) || (mes===7 && dia<=22)){
    sign="Cancer";
    } else if ((mes===7 && dia>22) || (mes===8 && dia<=22)){
    sign="Leo";
    } else if ((mes===8 && dia>22) || (mes===9 && dia<=22)){
    sign="Virgo";
    } else if ((mes===9 && dia>22) || (mes===10 && dia<=22)){
    sign="Libra";
    } else if ((mes===10 && dia>22) || (mes===11 && dia<=21)){
    sign="Escorpio";
    } else if ((mes===11 && dia>21) || (mes===12 && dia<=21)){
        sign="Sagitario";
    } else {
    return alert("Debes introducir un valor válido");
    }
    console.log(sign)

    function validarAllInput(value){
        if(validate.validarInput(value)){
            return true;      
        }else{
        alert("Debes ingresar más de dos caracteres y sólo letras.");
            return false;
        };
    }
    
    if(!validarAllInput(inputNombre.value)){
        p("inputNombre").focus();
        return false;
        }else{
        nombre = p("inputNombre").value;
        };

    if(!validarAllInput(inputApellidos.value)){
        p("inputApellidos").focus();
        return false;
        }else{
        apellidos = p("inputApellidos").value;
        };
    
    if(!validarAllInput(inputCiudad.value)){
        p("inputCiudad").focus();
        return false;
        }else{
        ciudad = p("inputCiudad").value;
        };

    if(!validarAllInput(inputPais.value)){
        p("inputPais").focus();
        return false;
        }else{
        pais = p("inputPais").value;
        };
    
    function validarAllSelect(value){
        if(validate.validarSelect(value)){
            return true;
        }else{
            alert("Debes seleccionar alguna apción.");
            return false;
        };
    };

    validarAllSelect(curso);
    validarAllSelect(fechaNac);
    
    addBaseDatos();

    //creamos un objeto tr que anexamos a nuestra tabla
    let fila=document.createElement("tr");
 
    //creamos todos los elementos td en donde iran los valores y el botón para eliminar
    let celda1=document.createElement("td");
    let celda2=document.createElement("td");
    let celda3=document.createElement("td");
    let celda4= document.createElement("td");
    let celda5= document.createElement("td");
    let celda6=document.createElement("td");
    let celda7= document.createElement("td");
    let celda8= document.createElement("td");
    let deleteButton = document.createElement('button');

    //asignamos los valores a nuestros td por medio innerHTML
    celda1.innerHTML=nombre;
    celda2.innerHTML=apellidos;
    celda3.innerHTML=curso;
    celda4.innerHTML=nacimiento;
    celda5.innerHTML=sign;
    celda6.innerHTML=ciudad;
    celda7.innerHTML=pais;
    deleteButton.textContent="Eliminar"
    deleteButton.setAttribute('id','eliminar');

    fila.appendChild(celda1);
    fila.appendChild(celda2);
    fila.appendChild(celda3);
    fila.appendChild(celda4);
    fila.appendChild(celda5);
    fila.appendChild(celda6);
    fila.appendChild(celda7);
    fila.appendChild(celda8);

    celda8.appendChild(deleteButton);

    //Por último asignamos nuestro TR a la tabla con id tablaDatos
    p("tablaDatos").appendChild(fila)

    // hasta aquí la parte de añadir
    //limpiamos nuestros inputs para agregar mas datos, y ponemos el foco nuevamente en el input de codigo
    
    p("inputNombre").value=""
    p("inputApellidos").value="";
    p("inputCurso").value="";
    p("inputNacimiento").value="";
    p("inputCiudad").value="";
    p("inputPais").value="";
    // p("inputNombre").focus();

    


    deleteButton.addEventListener("click", (event) => {
        event.target.parentNode.parentNode.remove()
    }); 

};
