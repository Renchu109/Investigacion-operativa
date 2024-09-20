//Ejercicio 3: Paseo en bicicleta
function calculateLiters(time){
    let waterLiters = 0

    if(time < 0){
        return false
    }

    for(let i = Math.floor(time); i > 1; i--){
        waterLiters += 0.5
    }

    if(Math.floor(time) < time){
        waterLiters += 0.5
    }
    
    return waterLiters
}

//1
test('Franco Pedalea 2 horas', () => {
    expect(calculateLiters(2)).toBe(0.5)
})


//2
test('Franco Pedalea 3 horas', () => {
    expect(calculateLiters(3)).toBe(1)
})

//3
test('Franco Pedalea 3.2 horas', () => {
    expect(calculateLiters(3.2)).toBe(1.5)
})

//4
test('Franco Pedalea 3.999999999 horas', () => {
    expect(calculateLiters(3.999999999)).toBe(1.5)
})

//5
test('Franco Pedalea 4 horas', () => {
    expect(calculateLiters(4)).toBe(1.5)
})

//6
test('Franco Pedalea horas negativas', () => {
    expect(calculateLiters(-4)).toBe(false)
})

//7
test('Franco Pedalea 0 horas', () => {
    expect(calculateLiters(0)).toBe(0)
})

//7
test('Franco Pedalea 1 horas', () => {
    expect(calculateLiters(1)).toBe(0)
})