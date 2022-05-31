"use strict";
exports.__esModule = true;
var Aluno = (function () {
    function Aluno(nomeDoAluno, cpf, dataDeNasc) {
        this.nomeDoAluno = nomeDoAluno;
        this.cpf = cpf;
        this.dataDeNasc = dataDeNasc;
    }
    Aluno.prototype.getNomedoAluno = function () {
        return this.nomeDoAluno;
    };
    Aluno.prototype.getCpf = function () {
        return this.cpf;
    };
    Aluno.prototype.getdataDeNasc = function () {
        return this.dataDeNasc;
    };
    Aluno.prototype.setNomedoAluno = function (nomeDoAluno) {
        this.nomeDoAluno = nomeDoAluno;
    };
    Aluno.prototype.setCpf = function (cpf) {
        this.cpf = cpf;
    };
    Aluno.prototype.setDataNasc = function (dataDeNasc) {
        this.dataDeNasc = dataDeNasc;
    };
    return Aluno;
}());
var alunoInfo = new Aluno("Ana Ester", "05985778312", "2004-07-08");
console.log(aluno.Info.getNomedoAluno());
console.log(alunoInfo.getCpf());
console.log(alunoInfo.getdataDeNasc);
