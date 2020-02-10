const express = require('express');
const routes =  require('./routes/router');
const app = express();

var port = process.env.PORT || 3000;

app.use(routes);

app.get("/", (req, res, next) => {
    res.send("API do Robô John");
});


app.listen(port, () => {
    console.log('Servidor rodando em http://localhost:3000');
});