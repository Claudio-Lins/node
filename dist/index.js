"use strict";
// Importa o módulo Matematica padrão do node
// const Matematica = require('./Matematica');
Object.defineProperty(exports, "__esModule", { value: true });
// Importa o módulo Matematica padrão moderno es6
const Exportar_1 = require("./Exportar");
let n1 = 50;
let n2 = 2;
console.log(`SOMA: ${(0, Exportar_1.somar)(n1, n2)}`);
console.log(`SUBTRACAO: ${(0, Exportar_1.subtrair)(n1, n2)}`);
console.log(`MULTIPLICACAO: ${(0, Exportar_1.multiplicar)(n1, n2)}`);
console.log(`VERSÃO: ${Exportar_1.versao}`);
