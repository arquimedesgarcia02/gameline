const axios = require('axios');
const dataAoVivo = [];

const resposta = axios.get('https://62f42bd73b6467a8cb3c43c8.mockapi.io/api/aovivo').then(async function (response){
    let res = await response.data;
    res.forEach(element => {
        dataAoVivo.push(element);
    });
})

export default dataAoVivo;