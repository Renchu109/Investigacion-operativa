//Ejercicio 1: Volúmen de un Tanque de Agua
function calculateVolume(diam, height){

    //Si el valor del diámetro es menor o igual a 50, se asume que está expresado en metros y se pasa a centímetros
    if(diam <= 50){
        diam = diam*100
    }

    //Si el valor de la altura es menor o igual a 5, se asume que está expresado en metros y se pasa a centímetros
    if(height <= 5){
        height = height*100
    }

    const radio = diam/2
    result = Math.PI * (radio*radio) * height

    //Expresar volumen en litro
    result = result/1000

    return result
}

//1
test('Diámetro de 60 centimetros y altura de 90 centimetros', () => {
    expect(calculateVolume(60,90)).toBeCloseTo(254.5,1)
})

//2 
test('Diámetro de 6 metros y altura de 4 metros', () => {
    expect(calculateVolume(6,4)).toBeCloseTo(113097.34,1)
})

//3
test('Diámetro de 6 metros y altura de 90 centimetros', () => {
    expect(calculateVolume(6,90)).toBeCloseTo(25446.9)
})

//4
test('Diámetro de 60 centimetros y altura de 4 metros', () => {
    expect(calculateVolume(60,4)).toBeCloseTo(1130.98,1)
})

//5
test('Diámetro de π metros y altura de π metros', () => {
    expect(calculateVolume(Math.PI,Math.PI)).toBeCloseTo(24352.3,1)
})