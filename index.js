const customExpress = require('./config/constomExpress')
const conexao = require('./infra/conexao')
const Tabelas = require('./infra/tabelas')

conexao.connect(erro => {
    if (erro) {
        console.log(erro)
    } else {
        console.log("conectado com sucesso")

        Tabelas.init(conexao)

        const app = customExpress()

        app.listen(3000, () => console.log('servidor rodando na porta 3000'))
    }
})


