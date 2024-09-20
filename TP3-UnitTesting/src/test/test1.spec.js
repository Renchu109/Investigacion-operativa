//Ejercicio 1: Validar código PIN 
function validPin(pin) {
    if(!Number.isInteger(pin)) return false
    if(pin < 0) return false
    if(pin.toString().length == 4) return true
    if(pin.toString().length == 6) return true
    return false   
}

//1
test('pin de 7 dígitos', () => {
    expect(validPin(1234567)).toBe(false)
})

//2
test('pin de 3 dígitos', () => {
    expect(validPin(123)).toBe(false)
})

//3
test('pin de 4 dígitos', () => {
    expect(validPin(1234)).toBe(true)
})

//4
test('pin de 6 dígitos', () => {
    expect(validPin(123456)).toBe(true)
})

//5
test('pin de letras', () => {
    expect(validPin('abcdef')).toBe(false)
})

//6
test('pin de numeros decimales', () => {
    expect(validPin(3.14)).toBe(false)
})

//7
test('pin de numeros negativos', () => {
    expect(validPin(-332)).toBe(false)
})