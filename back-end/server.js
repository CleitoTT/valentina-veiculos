import 'dotenv/config'
import app from "./src/app.js"

const PORT = 8000

app.listen(PORT, ()=>{
    console.log(`Servidor ouvindo na porta ${PORT}`)
})