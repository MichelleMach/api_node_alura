
const atendimento = require('../models/atendimento')
const Atendimento = require('../models/atendimento')

module.exports = app => {

    app.get('/atendimentos', (req, res) => {
        Atendimento.lista(res)
    })

    app.get('/atendimentos/:id', (req, res) => {

        const id = parseInt(req.params.id)
        Atendimento.buscaCliente(id, res)
    })

    app.post('/atendimentos', (req, res) => {
        
        const atendimento = req.body
        Atendimento.adiciona(atendimento, res)
    })

    app.patch('/atendimentos/:id', (req, res) => {

        const id = parseInt(req.params.id)
        const alteracoes = req.body

        console.log(alteracoes)

        Atendimento.altera(id, alteracoes, res)
    })

    app.delete('/atendimentos/:id', (req, res) => {

        const id = parseInt(req.params.id)

        Atendimento.deleta(id, res)
    })



}
