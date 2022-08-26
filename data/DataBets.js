const axios = require('axios');
const apostas = [];

let horario = new Date;
let dia = (horario.getFullYear()+horario.getMonth()+horario.getDay()).toString();
let hora = (horario.getHours()+horario.getMinutes()+horario.getSeconds()).toString();

let horarioString = dia + hora;

export async function apostar(placar1, placar2, status, resultado) {
    let apostasPost = await axios.post('https://62f42bd73b6467a8cb3c43c8.mockapi.io/api/apostas', 
        {
            horarioAposta: horarioString,
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