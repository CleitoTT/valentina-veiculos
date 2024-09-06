import express from 'express';
import route from './routes/index.js';
import cors from 'cors';
import conectaNoBanco from './config/dbConnect.js';
import controleDeErros from './middlewares/controleDeErros.js';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();

// Obtém o diretório onde o arquivo atual está localizado
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Atualizar o caminho para a pasta uploads
app.use('/uploads', express.static(path.join(__dirname, '../uploads')));

const conexao = await conectaNoBanco();

conexao.on('error', (erro) => {
    console.error('Ocorreu um erro de conexão', erro);
});

conexao.once('open', () => {
    console.log('Conectado ao banco de dados!!');
});

app.use(cors({ origin: "*" }));

route(app);
app.use(controleDeErros);

export default app;