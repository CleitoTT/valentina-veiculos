import express from 'express'
import CarrosRoutes from './CarrosRoutes.js'

const route = (app)=>{
    app.get('/', (req, res)=> res.status(200).send(`
        <h1>API Valentina veículos</h1>      
        `))
    app.use(express.json(), CarrosRoutes)
}

export default route