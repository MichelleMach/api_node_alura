/* 
Model Atendimento

Models fazem parte do modelo MVC na programação. Esses arquivos estão separados para fazerem comandos 
com sql, alguns tipos de cálculos, fazerem funções que podem servir para todo o sistema, regras de
negócios entre outros. 
Esse arquivo cuidará exclusivamente dos dados agendamento ao salvar no banco de dados.
*/

const moment = require('moment') //biblioteca para formatar e fazer calculo com datas
const conexao = require('../infra/conexao') //arquivo onde se faz conexão com o mysql

class Atendimento {
    adiciona(atendimento, res) {
        const dataCriacao = moment().format('YYYY-MM-DD HH:MM:SS');
        const data = moment(atendimento.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS')
        const atendimentoDatado = {...atendimento, dataCriacao, data}
        const sql = 'INSERT INTO Atendimentos SET ?'

        conexao.query(sql, atendimentoDatado, (erro, resultados) => {
            
            if (erro) {
                res.status(400).json(erro)
            } else {
                res.status(201).json(resultados)
            }
        })
    }
}

module.exports = new Atendimento