const axios = require('axios');
const dataUsuarios = [];

const getUsers = axios.get('https://62f42bd73b6467a8cb3c43c8.mockapi.io/api/usuarios').then(async function (response) {
    let res = await response.data;
    res.forEach(element => {
        dataUsuarios.push(element);
        console.log(element)
        
    });
});

export async function cadastrar(nome, cpf, chavePix, senha) {
    await axios.post('https://62f42bd73b6467a8cb3c43c8.mockapi.io/api/usuarios', {
        nome: nome,
        cpf: cpf,
        chavepix: chavePix,
        senha: senha,
        saldo: 0.0,
      })
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
}

export var usuario;

function getUser(nome, saldo, chavePix, id) {
    let objetoUsuario = {nome: nome, saldo: saldo, chavepix:  chavePix, id: id};
    
    return objetoUsuario;
}

export async function logar(nome, senha) {
    let data = await axios.get('https://62f42bd73b6467a8cb3c43c8.mockapi.io/api/usuarios');
    let resultData = await data.data;
    let status = false;

    console.log("Confirmação login: ")

    resultData.forEach(element => {

        if (element.nome === nome && element.senha === senha){
            console.log(`true ${element.nome} ${nome} && ${element.senha} ${senha}`)
            usuario = getUser(element.nome, element.saldo, element.chavepix, element.id);
            status = true;
        }else{
            console.log(`false${element.nome} ${nome} && ${element.senha} ${senha}`);
        }

    });
    console.log(status);
    return status;

}