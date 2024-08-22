/* eslint-disable no-unused-vars */

export default function Ejercicios() {
    const numeros = [ 1, 2, 5, 7, 9, 32, 22, 45, 11, 34]

    let multiplicados = numeros.map((n) => n * n)
    let numAlCuadrado = numeros.map((n) => n ** 2)
    let numPares = numeros.filter((n) => n % 2 === 0)
    let numImpares = numeros.filter((n) => n % 2 !== 0)
  return (
    <div>
        {console.log(numImpares)}
    </div>
  )
}
