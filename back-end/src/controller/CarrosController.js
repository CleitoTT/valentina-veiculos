import carro from "../models/CarroModel.js";
import path from 'path';
import fs from 'fs';
import Busboy from 'busboy';

class CarrosController {

    static async listaCarros(req, res, next) {
        try {
            const lista = await carro.find();
            res.status(200).json(lista);
        } catch (error) {
            next(error);
        }
    }

    static async listaCarroPorId(req, res, next) {
        try {
            const id = req.params.id;
            const carroEncontrado = await carro.findById(id);

            if (carroEncontrado !== null) {
                res.status(200).json({ carroEncontrado });
            } else {
                res.status(404).json({ message: 'Id do carro não foi localizado' });
            }
        } catch (error) {
            next(error);
        }
    }

    static async criaCarro(req, res, next) {
        try {
            const { nome, marca, ano, km, valor } = req.body;
            const file = req.file ? req.file.filename : null; // Use req.file.filename para o nome do arquivo
            const carroNovo = await carro.create({ nome, marca, ano, km, valor, imagem: file });
            res.status(201).json({ message: "Carro criado com sucesso", carroNovo });
        } catch (error) {
            next(error);
        }
    }
    

    static async atualizarCarro(req, res, next) {
        const { id } = req.params;
        const updateFields = req.body;

        try {
            const updatedCarro = await carro.findByIdAndUpdate(id, updateFields, { new: true });
            if (!updatedCarro) return res.status(404).send('Carro não encontrado');
            res.send(updatedCarro);

        } catch (error) {
            next(error);
        }
    }

    static async deletarCarro(req, res, next) {
        const { id } = req.params;
        try {
            const deletedCarro = await carro.findByIdAndDelete(id);
            if (!deletedCarro) return res.status(404).send('Carro não encontrado');
            res.send({ message: 'Carro excluído com sucesso' });

        } catch (error) {
            next(error);
        }
    }
}

export default CarrosController;
