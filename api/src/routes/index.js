const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const videogamesRoute = require("./videogames.js")
const genresRoute = require('./genres.js')
const videogameRoute = require('./videogame.js')
//const filtradosByRoute = require('./filtrados.js')


const router = Router();

//podemos decir que el router(enrutador) tiene la responsabilidad de definir las rutas

router.use('/videogames', videogamesRoute);// enrutador(express), cuando la request llegue va a un enrutador y este se encarga de mandar a cada request a su endpoint correspondiente
router.use('/genres', genresRoute)
router.use('/videogame', videogameRoute)// ante cualquier peticion a /videogame ira a "videogameRoute"

module.exports = router;
