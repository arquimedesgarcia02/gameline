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

async function saque(saldo, valor, idUsuario) {
    let s = await saldo;
    
    if (s > 0) {
        const getSaldo = await axios.post(`https://62f42bd73b6467a8cb3c43c8.mockapi.io/api/usuarios/${idUsuario}`, 
        {
            saldo: saldo-valor,
        }
        ).then(function (response) {
            console.log(response.data);
        })
        .catch(function (error) {
            console.error(error);
        });

    } else {
        alert('Saldo insuficiente para sacar')
    }
}
