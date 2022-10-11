const express = require('express')
const app = express()
const db = require('./db/connections')

const PORT = 3000

app.listen(PORT, function(){
  console.log(`O Expresse está rodando na porta ${PORT}`)
})

// db connection
db
  .authenticate()
  .then(()=>{
    console.log("Conectou ao banco com sucesso!")
  })
  .catch(err => {
    console.log("Ocorreu u erro ao conectar", err)
  })

// routes
app.get('/', (req, res) => {
  res.send("Está funcionando")
})
