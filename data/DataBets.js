import { usuario } from './DataUsuarios';

const axios = require('axios');
export const apostas = [];

var today = new Date();

var date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();

var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

var dateTime = date+' '+time;

const getApostas = axios.get('https://62f42bd73b6467a8cb3c43c8.mockapi.io/api/apostas')
.then(async function (response) {

    let res = await response.data;
    res.forEach(element => {
        apostas.push(element);
        console.log(element)

    });
})
.catch(function (error) {
    console.error(error);
});

export async function apostar(placar1, placar2, status, resultado) {
    let apostasPost = await axios.post('https://62f42bd73b6467a8cb3c43c8.mockapi.io/api/apostas', 
        {
            horarioAposta: dateTime,
            placar1: placar1,
            placar2: placar2,
            status: status,
            resultado: resultado,
        }
    ).then(function (response) {
        console.log(response.data);
    })
    .catch(function (error) {
        console.error(error);
    });
}

export async function saque(saldo, valor, idUsuario) {
    let v = parseFloat(valor);

    console.log(saldo, v, idUsuario);
    if (saldo > 0 && saldo > v) {
        console.log(saldo, v, idUsuario);
        
        const getSaldo = await axios.put(`https://62f42bd73b6467a8cb3c43c8.mockapi.io/api/usuarios/${idUsuario}`, 
        {
            saldo: (saldo-v),
        }
        ).then(function (response) {
            alert('O saque foi realizado com sucesso!')
        })
        .catch(function (error) {
            console.error(error);
        });

    } else {
        alert('Saldo insuficiente para sacar');
    }
}

export async function deposito(saldo, valor, idUsuario) {
    let v = parseFloat(valor);

    console.log(saldo, v, idUsuario);
    if (v > 0) {
        console.log(saldo, v, idUsuario);
        
        const getSaldo = await axios.put(`https://62f42bd73b6467a8cb3c43c8.mockapi.io/api/usuarios/${idUsuario}`, 
        {
            saldo: (saldo+v),
        }
        ).then(function (response) {
            alert('O deposito foi realizado com sucesso!')
        })
        .catch(function (error) {
            console.error(error);
        });

    } else {
        alert('Erro ao depositar');
    }
}

export async function getSelected(placar1, placar2, status, id) {
    if (status) {
        if (placar1 > placar2) {
        
            const vitoria = await axios.put(`https://62f42bd73b6467a8cb3c43c8.mockapi.io/api/apostas/${id}`, {resultado: true})
            .then(async function (response) {
                await deposito(usuario.saldo, 10, usuario.id)                
            })
            .catch(function (error) {
                console.error(error);
            });

        }else{
            const derrota = await axios.put(`https://62f42bd73b6467a8cb3c43c8.mockapi.io/api/apostas/${id}`, {resultado: true})
            .then(async function (response) {
                await saque(usuario.saldo, 10, usuario.id)       
            })
            .catch(function (error) {
                console.error(error);
            });
        }
    }
    
}