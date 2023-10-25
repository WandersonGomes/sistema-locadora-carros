const express = require('express');
const { engine } = require('express-handlebars');
const path = require('path');
const bodyParser = require('body-parser');
const exphbs = require("express-handlebars")

const hbs = exphbs.create({
    partialsDir: ["views/partials"]
}
)  

//const autenticacaoJWT = require('./middlewares/autenticacaoJWT');
const app = express();
const port = process.env.PORT || 3000;

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());

//login
app.get('/', (req, res) => {
    res.render('login');
});

//post do login -> vai para home
app.post('/', (req, res) =>{
    res.render('home')
})

//home
app.get('/home', (req, res) => {
    res.render('home');
});

//aluguel
app.get('/aluguel', (req, res) => {
    res.render('aluguel');
});

//clientes
app.get('/clientes', (req, res) => {
    res.render('clientes');
});

//sobre
app.get('/sobre', (req, res) => {
    res.render('sobre');
});

//veiculos
app.get('/veiculos', (req, res) => {
    res.render('veiculos');
});

app.listen(port, () => {
    console.log(`Servidor funcionando em https://localhost:${port}.`);
});