// Configurando todos los HELPERS en un directorio unico para helpers

// Cargando el modulo de hbs
const hbs = require('hbs')

hbs.registerHelper('getAnio', () => {
    return new Date().getFullYear();
});