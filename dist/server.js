"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const index_1 = __importDefault(require("./routes/index"));
const server = (0, express_1.default)();
server.use(express_1.default.static(path_1.default.join(__dirname, '../public')));
server.use(index_1.default);
server.use((req, res) => {
    res.status(404).send('Página não encontrada!');
});
server.listen(3000, () => {
    try {
        console.log('Server is running on port 3000');
    }
    catch (error) {
        console.log(error);
    }
});
