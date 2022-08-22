const axios = require('axios');
const dataEmAlta = [];
const result = axios.get('https://62f42bd73b6467a8cb3c43c8.mockapi.io/api/emalta').then(async function (response) {
    let res = await response.data;
    res.forEach(element => {
        dataEmAlta.push(element);
    });
})

export default dataEmAlta;