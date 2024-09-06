import mongoose from "mongoose";

const carroSchema = new mongoose.Schema({
    id: {type: mongoose.Schema.Types.ObjectId},
    nome: { type: String, required: true},
    ano: { type: Number },
    valor: { type: Number },
    km: { type: Number },
    imagem: { type: String },
    marca: { type: String }
})

const carro = mongoose.model('carros', carroSchema)

export default carro
