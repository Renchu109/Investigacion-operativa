//Ejercicio 5: Piedra, papel o tijera!
function piedraPapelTijera(jug1, jug2){

    if(jug1 === jug2){
        return('Empate!')
    }

    if(jug1 === ' ' || jug2 === ' '){
        return(jug1 === ' ' ? 'El jugador 1 no hizo ningún movimiento' : 'El jugador 2 no hizo ningún movimiento')
    }

    switch (jug1) {
        case 'piedra':
            return(jug2 === 'papel' ? 'Gana el jugador 2' : 'Gana el jugador 1')
        case 'papel':
            return(jug2 === 'piedra' ? 'Gana el jugador 1' : 'Gana el jugador 2')
        case 'tijera':
            return(jug2 === 'piedra' ? 'Gana el jugador 2' : 'Gana el jugador 1')
        default:
            return('Movimiento no permitido')
    }
}

//1
test('Jugador 1 hace piedra, jugador 2 hace papel', () => {
    expect(piedraPapelTijera('piedra','papel')).toBe('Gana el jugador 2')
})

//2
test('Jugador 2 hace piedra, jugador 1 hace papel', () => {
    expect(piedraPapelTijera('papel','piedra')).toBe('Gana el jugador 1')
})

//3
test('Jugador 1 hace tijera, jugador 2 hace tijera', () => {
    expect(piedraPapelTijera('tijera','tijera')).toBe('Empate!')
})

//4
test('Jugador 1 hace tijera, jugador 2 hace piedra', () => {
    expect(piedraPapelTijera('tijera','piedra')).toBe('Gana el jugador 2')
})

//5
test('Jugador 1 no muestra la mano, jugador 2 hace piedra', () => {
    expect(piedraPapelTijera(' ','piedra')).toBe('El jugador 1 no hizo ningún movimiento')
})

//6
test('Jugador 1 hace piedra, jugador 2 no muestra la mano', () => {
    expect(piedraPapelTijera('piedra',' ')).toBe('El jugador 2 no hizo ningún movimiento')
})

//7
test('Ningún jugador muestra la mano', () => {
    expect(piedraPapelTijera(' ',' ')).toBe('Empate!')
})

//8
test('Jugador 1 hace cualquier gesto, jugador 2 hace piedra', () => {
    expect(piedraPapelTijera(5,'piedra')).toBe('Movimiento no permitido')
})