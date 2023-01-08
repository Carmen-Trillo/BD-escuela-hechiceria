let edit = document.querySelector("#editar")
edit.addEventListener("click", editar);

function editar() {
    let fila=parseInt(prompt("Indique la fila que desea modificar"));
    let columna=parseInt(prompt("Indique la columna que desea modificar"));
    let celdas="";
    console.log(fila);
    console.log(columna);

    if (columna===4){
        var nuevaFecha = prompt("Introduzca fecha con formato AAAA/M/DD");
        console.log(nuevaFecha);
            
        var editFecha=new Date(nuevaFecha);
        console.log(editFecha);
        var mesEdit = editFecha.getMonth() + 1;
        var diaEdit = editFecha.getDate();
        var newSign="";

        console.log(mesEdit);
        console.log(diaEdit);
            
        if ((mesEdit===12 && diaEdit>21) || (mesEdit===1 && diaEdit<=19)){
        newSign="Capricornio";
        } else if ((mesEdit===1 && diaEdit>19) || (mesEdit===2 && diaEdit<=18)){
        newSign="Acuario";
        } else if ((mesEdit===2 && diaEdit>18) || (mesEdit===3 && diaEdit<=20)){
        newSign="Piscis";
        } else if ((mesEdit===3 && diaEdit>20) || (mesEdit===4 && diaEdit<=19)){
        newSign="Aries";
        } else if ((mesEdit===4 && diaEdit>19) || (mesEdit===5 && diaEdit<=20)){
        newSign="Tauro";
        } else if ((mesEdit===5 && diaEdit>20) || (mesEdit===6 && diaEdit<=20)){
        newSign="Geminis";
        } else if ((mesEdit===6 && diaEdit>20) || (mesEdit===7 && diaEdit<=22)){
        newSign="Cancer";
        } else if ((mesEdit===7 && diaEdit>22) || (mesEdit===8 && diaEdit<=22)){
        newSign="Leo";
        } else if ((mesEdit===8 && diaEdit>22) || (mesEdit===9 && diaEdit<=22)){
        newSign="Virgo";
        } else if ((mesEdit===9 && diaEdit>22) || (mesEdit===10 && diaEdit<=22)){
        newSign="Libra";
        } else if ((mesEdit===10 && dia>22) || (mesEdit===11 && diaEdit<=21)){
        newSign="Escorpio";
        } else if ((mesEdit===11 && dia>21) || (mesEdit===12 && diaEdit<=21)){
        newSign="Sagitario";
        } else {
        return alert("Debes introducir un valor válido");
        }
        console.log(newSign);
        celdas = document.getElementById("tablaDatos").rows[fila].cells[4];
        celdas.innerHTML=newSign;

        } else {
            celdas = document.getElementById("tablaDatos").rows[fila].cells[columna-1];
            celdas.innerHTML=prompt("Introduzca un nuevo valor");
        }    
}