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

//principal
app.get('/', (req, res) => {
    res.render('login');
});

//login
app.get('/home', (req, res) => {
    res.render('home');
});

app.listen(port, () => {
    console.log(`Servidor funcionando em https://localhost:${port}.`);
});