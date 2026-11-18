var quizModel = require("../models/quizModel");

function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var bairro = req.body.bairroServer;
    var zona = req.body.zonaServer;
    var nota = req.body.notaServer;
    var descricao = req.body.descricaoServer;
    var fk_usuarios = req.body.fk_usuariosServer

    // Faça as validações dos valores
    if (bairro == undefined) {
        res.status(400).send("Seu bairro está undefined!");
    } else if (nota == undefined) {
        res.status(400).send("Sua nota está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        quizModel.cadastrar(bairro, zona, nota, descricao, fk_usuarios)
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

function listar(req, res) {


    console.log(`Buscando média das avaliações dos bairros`);

    quizModel.listar().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(200).json([]);
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function contarAvaliacao(req, res) {


    console.log(`Buscando a quantidade de avaliações`);

    quizModel.contarAvaliacao().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as  avaliações.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function contarZona(req, res) {


    console.log(`Buscando a quantidade de zonas`);

    quizModel.contarZona().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as zonas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}


module.exports = {
    cadastrar,
    listar,
    contarAvaliacao,
    contarZona
}