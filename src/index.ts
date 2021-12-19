// Importa o módulo Matematica padrão do node
// const Matematica = require('./Matematica');

// Importa o módulo Matematica padrão moderno es6
import  { somar, subtrair, multiplicar, versao } from './Exportar';

let n1: number = 50
let n2: number = 2

console.log(`SOMA: ${somar(n1, n2)}`)
console.log(`SUBTRACAO: ${subtrair(n1, n2)}`)
console.log(`MULTIPLICACAO: ${multiplicar(n1, n2)}`)
console.log(`VERSÃO: ${versao}`)