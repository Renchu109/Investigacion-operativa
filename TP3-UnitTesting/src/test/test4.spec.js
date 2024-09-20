//Ejercicio 4: Calcular el siglo
function calculateCentury(year){ 
    if(year < 0){
        return null
    }

    const century = Math.floor(year / 100) +1
    return century
}

//1
test('2024', () => {
    expect(calculateCentury(2024)).toBe(21)
})

//2
test('1972', () => {
    expect(calculateCentury(1972)).toBe(20)
})

//3
test('967', () => {
    expect(calculateCentury(967)).toBe(10)
})

//4
test('54', () => {
    expect(calculateCentury(54)).toBe(1)
})

//5
test('-123', () => {
    expect(calculateCentury(-123)).toBe(null)
})

//6
test('546.7', () => {
    expect(calculateCentury(546.7)).toBe(6)
})