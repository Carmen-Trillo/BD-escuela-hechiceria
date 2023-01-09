import * as validate from "../src/js/validate.js";


test("test validarSelect function", () => {
    let testSelectList = [
        "Primero",
        "Segundo",
        "21/12/1980",
        "05/09/1956",
        "",
    ];
    
    expect(validate.validarSelect(testSelectList[0])).toBe(true);
    expect(validate.validarSelect(testSelectList[1])).toBe(true);
    expect(validate.validarSelect(testSelectList[2])).toBe(true);
    expect(validate.validarSelect(testSelectList[3])).toBe(true);
    expect(validate.validarSelect(testSelectList[4])).toBe(false);

});