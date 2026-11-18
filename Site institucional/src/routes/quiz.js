var express = require("express");
var router = express.Router();

var quizController = require("../controllers/quizController");

//Recebendo os dados do html e direcionando para a função cadastrar de quizController.js
router.post("/cadastrar", function (req, res) {
    quizController.cadastrar(req, res);
})

router.get("/listar", function (req, res) {
    quizController.listar(req, res);
});

router.get("/contarAvaliacao", function (req, res) {
    quizController.contarAvaliacao(req, res);
});

router.get("/contarZona", function (req, res) {
    quizController.contarZona(req, res);
});


module.exports = router;