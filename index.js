import express from 'express'
import usuarioRoutes from './routes/usuarioRoutes.js'

const app = express();


//Routing
app.use('/', usuarioRoutes);


const port  = 3000;


app.listen(port, ()=>{
    console.log(`el server esta corriendo en el puerto ${port}`);
});