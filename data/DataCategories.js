const axios = require('axios');
export const CATEGORIAS = [];

const resultado = axios.get('https://62f42bd73b6467a8cb3c43c8.mockapi.io/api/categorias').then(async function(response){
    let res = await response.data;
    res.forEach(element => {
        CATEGORIAS.push(element);
    });
})

