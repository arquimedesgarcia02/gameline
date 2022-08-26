const axios = require('axios');
export const CATEGORIAS = [];

const resultado = axios.get('https://6305525fdde73c0f844517c5.mockapi.io/api/categorias').then(async function(response){
    let res = await response.data;
    res.forEach(element => {
        CATEGORIAS.push(element);
    });
})
