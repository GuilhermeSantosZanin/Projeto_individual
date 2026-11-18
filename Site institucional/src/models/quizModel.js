var database = require("../database/config")

function cadastrar(bairro, zona, nota, descricao, fk_usuarios) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", bairro, zona, nota, descricao, fk_usuarios);

    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        INSERT INTO avaliacao (bairro, zona, nota, descricao, fk_usuarios) VALUES ('${bairro}', '${zona}', '${nota}', '${descricao}', '${fk_usuarios}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function listar() {

    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        SELECT bairro, ROUND(AVG(nota),2) AS Media FROM avaliacao GROUP BY bairro ORDER BY media DESC;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function contarAvaliacao() {

    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        SELECT COUNT(*) AS TotalAvaliacoes FROM avaliacao ;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function contarZona() {

    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        SELECT zona, COUNT(*) AS TotalZona FROM avaliacao group by zona order by totalZona desc limit 1 ;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    cadastrar,
    listar,
    contarAvaliacao,
    contarZona
};