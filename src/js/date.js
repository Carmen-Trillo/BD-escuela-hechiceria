function p(y) {
    return document.getElementById(y);
}

let baseDatos=[];
let student={
    "name": "",
    "lastName": "",
    "curse": "",
    "date": "",
    "age":"",
    "city": "",
    "nation": "",
}

function addBaseDatos(){
    let nameAdd = p("inputNombre").value;
    let lastNameAdd = p("inputApellidos").value;
    let curseAdd = p("inputCurso").value;
    let dateAdd = p("inputNacimiento").value;
    let cityAdd = p("inputCiudad").value;
    let nationAdd = p("inputPais").value;

    console.log(nameAdd);
    console.log(lastNameAdd);
    console.log(curseAdd);
    console.log(dateAdd);
    console.log(cityAdd);
    console.log(nationAdd);

    let hoy = new Date()
    let fechaNacimiento = new Date(dateAdd)
    let edad = hoy.getFullYear() - fechaNacimiento.getFullYear()
    let diferenciaMeses = hoy.getMonth() - fechaNacimiento.getMonth()
    
    if (
    diferenciaMeses < 0 ||
    (diferenciaMeses === 0 && hoy.getDate() < fechaNacimiento.getDate())
    ) {
    edad--
    }else{
    return edad;
    }

    console.log(edad);

    student.name = nameAdd;
    student.lastName = lastNameAdd;
    student.curse = curseAdd;
    student.date = dateAdd;
    student.age = edad;
    student.city = cityAdd;
    student.nation = nationAdd;
    
    baseDatos.push(student);
    console.log(baseDatos);
}



export { addBaseDatos }