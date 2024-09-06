import mongoose from "mongoose";

function controleDeErros (erro, req, res, next){
    if(erro instanceof mongoose.Error.CastError){
        res.status(400).send({ message: "Um ou mais dados fornecidos estão incorretos" })
    }else{
        res.status(500).send({ message: `Erro interno do servidor ${erro.message}` })
    }
}

export default controleDeErros