import express from 'express'
import usuarioRoutes from './routes/usuarioRoutes.js'

const app = express()



app.set('view engine', 'pug')
app.set('views', './views')


app.use( express.static('public'))

//Routing
app.use('/auth', usuarioRoutes);


const port  = 3000;


app.listen(port, ()=>{
    console.log(`el server esta corriendo en el puerto ${port}`);
});