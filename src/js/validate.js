function validarInput(value){
    const pattern = new RegExp('^[a-zA-ZáÁéÉíÍóÓúÚñÑ\\s]*$', 'i');
    if(value.length < 3  || !pattern.test(value) || value =="" ){
        return false
    } else {
        return true
    }
}

function validarSelect (value){
    if( value == "") {
    return false
    } else {
        return true
    }
}

export { validarInput, validarSelect};