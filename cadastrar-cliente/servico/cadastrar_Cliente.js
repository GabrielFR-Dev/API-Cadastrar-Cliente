import pool from './servico/conexao.js';


export async function cadastrarClientes(Nome, DataNascimento, Telefone, Sexo){
    const conexao = await pool.getConnection();

    const query = conexao.query("INSERT INTO listaclientes (Nome, DataNascimento, Telefone, Sexo) VALUES (?, ?, ?, ?)", [Nome, DataNascimento, Telefone, Sexo]);

    console.log(query);
    conexao.Release();
}