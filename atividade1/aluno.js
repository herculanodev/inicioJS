class Aluno {
    constructor(nome, notas) {
        this.nome = nome;
        this.notas = notas;

        // Validação: notas deve ser um array
        if (!Array.isArray(notas)) {
            throw new Error('Notas devem ser um array');
        }

        // Validação: cada nota deve ser um número no intervalo de 0 a 10
        this.notas.forEach((nota) => {
            if (typeof nota !== 'number' || nota < 0 || nota > 10) {
                throw new Error('Todas as notas devem estar no intervalo de 0 a 10');
            }
        });
    }

    calcularMedia() {
        // Validação: array de notas não pode estar vazio
        if (this.notas.length === 0) {
            throw new Error('Notas não podem estar vazias');
        }

        // Cálculo da média
        const soma = this.notas.reduce((acc, nota) => acc + nota, 0);
        return soma / this.notas.length;
    }

    obterMencao() {
        const media = this.calcularMedia();

        // Retornar menção com base na média
        if (media >= 9) return 'SS';
        if (media >= 7) return 'MS';
        if (media >= 5) return 'MM';
        return 'MI';
    }

    statusAprovacao() {
        const mencao = this.obterMencao();

        // Verificar se o aluno está aprovado ou reprovado
        return mencao === 'MI' || mencao === 'II' ? 'reprovad@' : 'aprovad@';
    }
}

module.exports = Aluno;
