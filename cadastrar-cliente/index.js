import express from 'express';
import cors from 'cors';
import { cadastrarClientes } from './servico/cadastrar_Cliente.js';
import { validaUsuario } from './validacao/valida.js';

const app = express();

app.use(cors());
app.use(express.json());

app.post('/cadastrar', async(req, res) => {
    const Nome = req.body.nome;
    const DataNascimento = req.body.dataNascimento;
    const Telefone = req.body.telefone;
    const Sexo = req.body.sexo;

    const clienteValido = validaUsuario(Nome, DataNascimento, Telefone, Sexo);

    if(clienteValido.status) {
        await cadastrarClientes(Nome, DataNascimento, Telefone, Sexo);
        res.status(201).send({mensagem: 'Cliente Cadastrado com sucesso'});
    }
    else 
    {
        res.status(400).send({mensagem: clienteValido.mensagem})

    }

})

app.listen(3001, async() => {
    
    const data = new Date();
    console.log(`Servidor iniciado em ${data}`)

})
