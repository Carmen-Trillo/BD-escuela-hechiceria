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
    // var horoscopo = p("inputHoroscopo").value;
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
    console.log(nacimiento)

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


    // validación de los datos introducidos en el formulario
   
    const pattern = new RegExp('^[a-zA-ZáÁéÉíÍóÓúÚñÑ\\s]*$', 'i');

    if(nombre.length < 3  || !pattern.test(nombre)){
        alert("Debes introducir un nombre con más de dos caracteres y sólo letras");
    }

    if(apellidos.length < 3  || !pattern.test(apellidos)){
        alert("Debes introducir apellidos con más de dos caracteres y sólo letras");

    }

    // indice = p("inputCurso").selectedIndex;
    if( curso == "") {
        p("inputCurso").focus();
        alert("Debes introducir un curso");
    }

    if (nacimiento==""){
		p("inputNacimiento").focus();
        alert("Debes introducir una fecha de nacimiento");
	}

    // indice2 = p("inputHoroscopo").selectedIndex;
    // if( indice2 == null || indice2 == 0 ) {
    //     alert("Debes introducir el horoscopo");
    //     return;// no devuelve nada si el horoscopo no se ha seleccionado
    // }

    if(ciudad.length < 3  || !pattern.test(ciudad)){
        alert("Debes introducir la ciudad de origen con más de dos caracteres y sólo letras");
    }

    if(pais.length < 3  || !pattern.test(pais)){
        alert("Debes introducir país de origen con más de dos caracteres y sólo letras");
    }

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
    let celda9= document.createElement("td")
    let editButton = document.createElement('button');
    //asignamos los valores a nuestros td por medio del atributo innerHTML
    celda1.innerHTML=nombre;
    celda2.innerHTML=apellidos;
    celda3.innerHTML=curso;
    celda4.innerHTML=nacimiento;
    celda5.innerHTML=sign;
    celda6.innerHTML=ciudad;
    celda7.innerHTML=pais;
    deleteButton.textContent="Eliminar"
    deleteButton.setAttribute('id','eliminar');

    // celda8.innerHTML="<input type='button' id='eliminar' value='Eliminar'>";

// onclick='eliminar()
    //Ahora añadimos los hijos TD al Padre TR
    //Esta es otra manera de crear elementos HTML: usando el método appendChild
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
    // p("inputHoroscopo").value="";
    p("inputCiudad").value="";
    p("inputPais").value="";
    p("inputNombre").focus();

    // let borrar = document.querySelector("#eliminar");
    // borrar.addEventListener("click", eliminar);

    deleteButton.addEventListener("click", (event) => {
        event.target.parentNode.parentNode.remove()
    });

    // function eliminar(nodoBoton){
    //     let filaABorrar= target.parentNode.parentNode.remove()
    //     p("tablaDatos").removeChild(filaABorrar);
    // }
    // let add = document.querySelector("#agregar")
    

};

// let edit = document.querySelector("#editar")
// edit.addEventListener("click", editar);

// function editar() {
//         let fila=parseInt(prompt("Indique la fila que desea modificar"));
//         let columna=parseInt(prompt("Indique la columna que desea modificar"));
//         console.log(fila);
//         console.log(columna);

//         let celdas = document.getElementById("tablaDatos").rows[fila].cells[columna-1];
//         celdas.innerHTML=prompt("Introduzca un nuevo valor. Si modifica la fecha, el formato debe ser AAAA/M/DD");


//         var nuevaFecha = document.getElementById("tablaDatos").rows[fila].cells[3];
//         console.log(nuevaFecha);

//         var fechaEdit= new Date(nuevaFecha);
        
//         // var mesEdit = fechaEdit.getMonth() + 1;
//         // var diaEdit = fechaEdit.getDate();
//         // console.log(mesEdit);
//         // console.log(diaEdit);
//         console.log(fechaEdit);

//         // if ((mesEdit===12 && diaEdit>21) || (mesEdit===1 && diaEdit<=19)){
//         //     sign="Capricornio";
//         //     } else if ((mesEdit===1 && diaEdit>19) || (mesEdit===2 && diaEdit<=18)){
//         //     sign="Acuario";
//         //     } else if ((mesEdit===2 && diaEdit>18) || (mesEdit===3 && diaEdit<=20)){
//         //     sign="Piscis";
//         //     } else if ((mesEdit===3 && diaEdit>20) || (mesEdit===4 && diaEdit<=19)){
//         //     sign="Aries";
//         //     } else if ((mesEdit===4 && diaEdit>19) || (mesEdit===5 && diaEdit<=20)){
//         //     sign="Tauro";
//         //     } else if ((mesEdit===5 && diaEdit>20) || (mesEdit===6 && diaEdit<=20)){
//         //     sign="Geminis";
//         //     } else if ((mesEdit===6 && diaEdit>20) || (mesEdit===7 && diaEdit<=22)){
//         //     sign="Cáncer";
//         //     } else if ((mesEdit===7 && diaEdit>22) || (mesEdit===8 && diaEdit<=22)){
//         //     sign="Leo";
//         //     } else if ((mesEdit===8 && diaEdit>22) || (mesEdit===9 && diaEdit<=22)){
//         //     sign="Virgo";
//         //     } else if ((mesEdit===9 && diaEdit>22) || (mesEdit===10 && diaEdit<=22)){
//         //     sign="Libra";
//         //     } else if ((mesEdit===10 && dia>22) || (mesEdit===11 && diaEdit<=21)){
//         //     sign="Escorpio";
//         //     } else if ((mesEdit===11 && dia>21) || (mesEdit===12 && diaEdit<=21)){
//         //         sign="Sagitario";
//         //     } else {
//         //     return alert("Debes introducir un valor válido");
//         //     }
//         //     console.log(sign)

//         // var nuevoSign = document.getElementById("tablaDatos").rows[fila].cells[4];
//         // nuevoSign.innerHTML=sign;
//         // console.log(nuevoSign);
    
//         // let celda=getElementById('tablaDatos').rows[fila-1].cells;
//         // celda[columna-1].innerHTML=prompt("Introduzca un nuevo valor");
//         // tabla.rows[4].cells[1].innerHTML
//     };


// function eliminar(nodoBoton){
 
//     /*recibimos el botón como parámetro, obtendremos el tr que lo contiene de la siguiente manera:
//     Como nuestro botón es hijo de un td y este td de el tr debemos invocar dos veces parentNode
//     para llegar a tener el TR y eliminar la línea completa*/
//     let filaABorrar= nodoBoton.parentNode.parentNode;
 
//     //ahora que ya tenemos el padre TR, podemos eliminarlo de la siguiente manera junto a todos sus hijos
 
//     p("tablaDatos").removeChild(filaABorrar);
// 	p("inputNombre").focus();
// }


