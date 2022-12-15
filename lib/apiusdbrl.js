const axios = require('axios')
const url = 'https://economia.awesomeapi.com.br/last/USD-BRL'

const getCotacaoAPI = () => axios.get(url);

const extractCotacao = res => res.data.USDBRL.ask;

const getCotacao = async() => {
    try{
        const res = await getCotacaoAPI();
        return extractCotacao(res);
    } catch(err) {
        return 0;
    }
}

module.exports = {
    getCotacaoAPI,
    extractCotacao,
    getCotacao
}