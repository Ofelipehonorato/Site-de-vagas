const express = require('express')
const router  = express.Router()
const Job     = require('../models/Job')

//rota de teste
router.get('/test', (req, res) => {
  res.send('Deu certo')
})

router.get('/add', (req, res) => {
  res.render('add')
})

//Adicionando job via post
router.post('/add', (req, res) => {

  let {title, salary, company, description, email, new_job} = req.body //Requisição solicita as informações que estão no body

  // Insert
  Job.create({
    title,
    description,
    salary,
    company,
    email,
    new_job
  })
  .then(() => res.redirect('/'))  //Encaminha o usuario a pagina home após inserção da vaga
  .catch(err => console.log(err)) //Caso ocorra, vai informar o erro ao programador
})

module.exports = router