import express from 'express';
import cors from 'cors';
import { cadastrarClientes } from './servico/cadastrar_Cliente.js';
import { validaUsuario } from './validacao/valida.js';

const app = express();

app.use(cors());
app.use(express.json());



app.listen(3001, async() => {
    
    const data = new Date();
    console.log(`Servidor iniciado em ${data}`)

})
