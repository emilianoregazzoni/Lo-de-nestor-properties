import express from "express";

const router = express.Router();


router.get('/', (req,res) => {
    res.send('hola mundo en express');
});

router.post('/', (req,res) => {
    res.json({msg: 'respuesta tipo post'})
});

export default router;