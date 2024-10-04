import { describe, expect, it, test } from 'vitest'

const multiTresCinco = (number) => {
    if (typeof number !== 'number') throw new Error('EL parametro proporcionado no es válido')
    if (Number.isNaN(number)) throw new Error('EL parametro proporcionado no es válido de ser un número y no infinito. Está recibiendo: ' + number)
    if (number % 5 === 0 && number % 3 === 0) return 'Tres y Cinco'
    if (number % 3 === 0) return 'Tres'
    if (number % 5 === 0) return 'Cinco'

    return number
}

describe('multiTresCinco', () => {
    // it('Deberia ser una funcion', () => {
    //     expect(typeof multiTresCinco).toBe('function')
    // })
    test('Deberia fallar si no proporciona un número para el parametro', () => {
        expect(() => multiTresCinco()).toThrow('EL parametro proporcionado no es válido')
    })
    test('Deberia fallar si no proporciona un número para el parametro', () => {
        expect(() => multiTresCinco(NaN)).toThrow('EL parametro proporcionado no es válido de ser un número y no infinito. Está recibiendo: ' + NaN)
    })
    test('Deberia devolver 1 si el numero proporcionado es 1', () => {
        expect(multiTresCinco(1)).toBe(1)
    })
    test('Deberia devolver 2 si el numero proporcionado es 2', () => {
        expect(multiTresCinco(2)).toBe(2)
    })
    test('Deberia devolver "Tres" si el numero proporcionado es multiplo de 3', () => {
        expect(multiTresCinco(6)).toBe('Tres')
        expect(multiTresCinco(9)).toBe('Tres')
        expect(multiTresCinco(12)).toBe('Tres')
    })
    test('Deberia devolver "Cinco" si el numero proporcionado es multiplo de 5', () => {
        expect(multiTresCinco(5)).toBe('Cinco')
        expect(multiTresCinco(10)).toBe('Cinco')
    })
    test('Deberia devolver "Tres y Cinco" si el numero proporcionado es multiplo de 5 y 3', () => {
        expect(multiTresCinco(15)).toBe('Tres y Cinco')
        expect(multiTresCinco(30)).toBe('Tres y Cinco')
    })

})