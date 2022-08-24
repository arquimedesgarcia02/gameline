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
      })
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
}

export async function logar(nome, senha) {
    let data = await dataUsuarios;
    data.forEach(element => {
        let elemento = element;
        console.log("Elemento = "+elemento)
        
        if(elemento.nome == nome && elemento.senha == senha) {
            alert("Credenciais corretas, login realizado com sucesso!")
            return true           
        }else{
            alert("Credenciais corretas!")
            return false
        }
    });

}