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
    sign="Cáncer";
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
}




// function eliminar(nodoBoton){
 
//     /*recibimos el botón como parámetro, obtendremos el tr que lo contiene de la siguiente manera:
//     Como nuestro botón es hijo de un td y este td de el tr debemos invocar dos veces parentNode
//     para llegar a tener el TR y eliminar la línea completa*/
//     let filaABorrar= nodoBoton.parentNode.parentNode;
 
//     //ahora que ya tenemos el padre TR, podemos eliminarlo de la siguiente manera junto a todos sus hijos
 
//     p("tablaDatos").removeChild(filaABorrar);
// 	p("inputNombre").focus();
// }


