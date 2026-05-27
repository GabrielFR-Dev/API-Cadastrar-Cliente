function validaNome(Nome){
    
    const regexNome = /^[A-Za-zÀ-ÿ\s']{3,}$/;
    return regexNome.test(Nome);
}

function validaDataNascimento(dataNascimento){
    
    const regexDataNascimento = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/;
    return regexDataNascimento.test(dataNascimento);
}

function validaTelefone(Telefone){
    
    const regexTelefone = /^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/;
    return regexTelefone.test(Telefone)
}

function validaSexo(Sexo){
    const regexSexo = /^(masculino|feminino|outro)$/i;
    return regexSexo.test(Sexo)
}

export function validaUsuario(Nome, dataNascimento, Telefone, Sexo){
    
    const nome = validaNome(Nome);
    const nascimento = validaDataNascimento(dataNascimento);
    const telefone = validaTelefone(Telefone);
    const sexo = validaSexo(Sexo);

    if(!nome){
        return {
            status: false,
            mensagem: 'Nome Inválido'
        };
    }

    if(!nascimento){
        return {
            status: false,
            mensagem: 'Data de nascimento inválida -- Formato(0000-00-00)'
        };
    }
    if(!telefone){
        return {
            status: false,
            mensagem: 'Telefone Inválido'
        };
    }
    if(!sexo){
        return {
            status: false,
            mensagem: 'Sexo Inválido'
        };
    }


    return {
        status: true,
        mensagem: ''
    };
}