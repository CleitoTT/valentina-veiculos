import Carro from '../models/CarroModel.js';

class CarrosController {
    static async listaCarros(req, res, next) {
        try {
            const carros = await Carro.find();
            res.json(carros);
        } catch (error) {
            next(error);
        }
    }

    static async listaCarroPorId(req, res, next) {
        try {
            const carro = await Carro.findById(req.params.id);
            if (!carro) return res.status(404).send('Carro não encontrado');
            res.json(carro);
        } catch (error) {
            next(error);
        }
    }

    static async criaCarro(req, res, next) {
        try {
            const novoCarro = new Carro(req.body);
            if (req.file) {
                novoCarro.imagem = req.file.filename;
            }
            await novoCarro.save();
            res.status(201).json(novoCarro);
        } catch (error) {
            next(error);
        }
    }    

    static async atualizarCarro(req, res, next) {
        const { id } = req.params;
        const updateFields = req.body;

        if (req.file) {
            updateFields.imagem = req.file.filename;
        }

        try {
            const updatedCarro = await Carro.findByIdAndUpdate(id, updateFields, { new: true });
            if (!updatedCarro) return res.status(404).send('Carro não encontrado');
            res.send(updatedCarro);
        } catch (error) {
            next(error);
        }
    }

    static async deletarCarro(req, res, next) {
        try {
            const carroDeletado = await Carro.findByIdAndDelete(req.params.id);
            if (!carroDeletado) return res.status(404).send('Carro não encontrado');
            res.send(carroDeletado);
        } catch (error) {
            next(error);
        }
    }
}

export default CarrosController;
