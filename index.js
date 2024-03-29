const express = require('express');
const app = express();
const path = require('path');

const convert = require('./lib/convert');
const apiBCB = require('./lib/apiusdbrl');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', async (req, res) => {
    const cotacao = await apiBCB.getCotacao();
    res.render('home', { cotacao: parseFloat(cotacao) });
})

app.get('/cotacao', (req, res) => {
    const { cotacao, quantidade } = req.query;
    if (cotacao && quantidade) {
        const conversao = convert.convert(cotacao, quantidade);
        res.render('cotacao', {
            error: false,
            cotacao: convert.toMoney(cotacao),
            quantidade: convert.toMoney(quantidade),
            conversao: convert.toMoney(conversao)
        })
    } else {
        res.render('cotacao', {
            error: 'Valores invalidos'
        })
    }
})


app.listen(3000, (err) => console.log(err))
