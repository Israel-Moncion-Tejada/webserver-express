// Cargando el modulo de express
const express = require('express');

// Creando la aplicacion 
const app = express();

// Cargando el modulo de hbs
const hbs = require('hbs');

// Cargando el archivo helpers ubicando en la carpeta hbs
// require('.\\hbs\\helpers')
require('hbs/helpers')

const port = process.env.PORT || 3000;


// Un middleware es un callback que se va a ejecutar siempre
// sin importar que url es el que la persona pida.
// __dirname nos permite posicionarnos sobre la ruta absoluta donde esta nuestra pagina web.
app.use(express.static(__dirname + '/public')); /* Todo lo que caiga dentro de public en de dominio publico */


// Configuracion de la renderizacion
// express hbs engine "trabaja en combinacion con express"
// En este directorio se encuentran los parciales o modulos de la aplicacion.
hbs.registerPartials(__dirname + '/views/parciales');
// Mas conocido como template engine
app.set('view engine', 'hbs');

app.get('/', (req, res) => {

    // renderizando el archivo home.hbs
    res.render('home', {
        nombre: 'Israel'
    });

});

app.get('/about', (req, res) => {

    res.render('about', {
        anio: new Date().getFullYear()
    });

});

// La funcion listen tambien puede recibir un callback
app.listen(port, () => {
    console.log(`Escuchando paticiones en el puerto ${ port }`);
});