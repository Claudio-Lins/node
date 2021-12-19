"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const server = (0, express_1.default)();
server.get('/', (req, res) => {
    res.send('Hello World!');
});
server.get('/noticias/:slug', (req, res) => {
    let slug = req.params.slug;
    res.send(`Notícia: ${slug}`);
});
server.get('/voo/:origem-:destino', (req, res) => {
    let origem = req.params.origem;
    let destino = req.params.destino;
    // let {origem, destino} = req.params
    res.send(`Procurando voos de: ${origem.toUpperCase()} até ${destino.toUpperCase()}`);
});
server.listen(3000, () => {
    try {
        console.log('Server is running on port 3000');
    }
    catch (error) {
        console.log(error);
    }
});
