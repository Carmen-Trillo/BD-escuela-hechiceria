import * as validate from "../src/js/validate.js";

test("test validarInput function", () => {
    let testValueList = [
        "carmen",
        "mario",
        "ana",
        "María",
        546548,
        12,
        "sa",
        "p",
        "",
    ];
    
    expect(validate.validarInput(testValueList[0])).toBe(true);
    expect(validate.validarInput(testValueList[1])).toBe(true);
    expect(validate.validarInput(testValueList[2])).toBe(true);
    expect(validate.validarInput(testValueList[3])).toBe(true);
    expect(validate.validarInput(testValueList[4])).toBe(false);
    expect(validate.validarInput(testValueList[5])).toBe(false);
    expect(validate.validarInput(testValueList[6])).toBe(false);
    expect(validate.validarInput(testValueList[7])).toBe(false);
    expect(validate.validarInput(testValueList[8])).toBe(false);
});

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