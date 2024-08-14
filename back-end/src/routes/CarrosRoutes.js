import express from 'express';
import CarrosController from '../controller/CarrosController.js';
import upload from '../config/multer.js';

const CarrosRoutes = express.Router();

CarrosRoutes.get('/carros', CarrosController.listaCarros);
CarrosRoutes.get('/carros/:id', CarrosController.listaCarroPorId);
CarrosRoutes.post('/carros', upload.single('file') ,CarrosController.criaCarro);
CarrosRoutes.patch('/carros/:id', CarrosController.atualizarCarro);
CarrosRoutes.delete('/carros/:id', CarrosController.deletarCarro);

export default CarrosRoutes;
