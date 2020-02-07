const express = require('express');
const routes =  require('./routes/router');


const app = express();

app.use(routes);

app.get('/', (req, res, next) => {
    res.send("Olá");
});

app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});