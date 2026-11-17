var quizModel = require("../models/quizModel");

function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var bairro = req.body.bairroServer;
    var zona = req.body.zonaServer;
    var nota = req.body.notaServer;
    var descricao = req.body.descricaoServer;

    // Faça as validações dos valores
    if (bairro == undefined) {
        res.status(400).send("Seu bairro está undefined!");
    } else if (nota == undefined) {
        res.status(400).send("Sua nota está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        quizModel.cadastrar(bairro, zona, nota, descricao)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    cadastrar
}