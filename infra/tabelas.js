class Tabelas {
    init(conexao) {
        this.conexao = conexao

        this.criarAtendimentos()
    }

    criarAtendimentos() {

        const sql = "CREATE TABLE IF NOT EXISTS Atendimentos (id int NOT NULL AUTO_INCREMENT, nomeCliente varchar(50) NOT NULL, nomePet varchar(20), servico varchar(20) NOT NULL, data datetime not null, dataCriacao datetime not null, observacoes text, status varchar(20) NOT NULL, PRIMARY KEY(id)) "


        this.conexao.query(sql, (erro) => {
            if (erro) {
                console.log(erro)
            } else {
                console.log("Tabela criada com sucesso")
            }
        })
    }

    

}
module.exports = new Tabelas