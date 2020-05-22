const axios = require("axios").default;

const config = {
    baseURL: 'http://viacep.com.br/ws/',
    timeout: 4000
}

const api = axios.create(config);

module.exports = {
    get: (cep) => {
        return api.get(`${cep}/json`);
    }
}
