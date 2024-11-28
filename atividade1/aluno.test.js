const Aluno = require('./aluno');

describe('Testes da classe Aluno', () => {
    test('1. Calcular a média corretamente', () => {
        const aluno = new Aluno('João', [7, 9]);
        expect(aluno.calcularMedia()).toBe(8);
    });

    test('2. Retornar menção "MS"', () => {
        const aluno = new Aluno('Maria', [7.5, 7]);
        expect(aluno.obterMencao()).toBe('MS');
    });

    test('3. Verificar se o aluno foi aprovado', () => {
        const aluno = new Aluno('Ana', [6, 8]);
        expect(aluno.statusAprovacao()).toBe('aprovad@');
    });

    test('4. Retornar menção "SS"', () => {
        const aluno = new Aluno('Carlos', [9, 10]);
        expect(aluno.obterMencao()).toBe('SS');
    });

    test('5. Aluno aprovado com menção SS', () => {
        const aluno = new Aluno('Luiza', [9.5, 9]);
        expect(aluno.statusAprovacao()).toBe('aprovad@');
    });

    test('6. Retornar menção "MM"', () => {
        const aluno = new Aluno('Pedro', [5, 5]);
        expect(aluno.obterMencao()).toBe('MM');
    });

    test('7. Aluno aprovado com menção MM', () => {
        const aluno = new Aluno('Clara', [5.5, 6]);
        expect(aluno.statusAprovacao()).toBe('aprovad@');
    });

    test('8. Retornar menção "MI"', () => {
        const aluno = new Aluno('Lucas', [4, 5]);
        expect(aluno.obterMencao()).toBe('MI');
    });

    test('9. Aluno reprovado com menção MI', () => {
        const aluno = new Aluno('Paula', [4, 4.5]);
        expect(aluno.statusAprovacao()).toBe('reprovad@');
    });

    test('10. Array vazio retorna erro', () => {
        const aluno = new Aluno('Rafael', []);
        expect(() => aluno.calcularMedia()).toThrow('Notas não podem estar vazias');
    });

    test('11. Notas decimais são calculadas corretamente', () => {
        const aluno = new Aluno('Sofia', [6.5, 8.3]);
        expect(aluno.calcularMedia()).toBeCloseTo(7.4);
    });

    test('12. Notas fora do intervalo geram erro', () => {
        expect(() => new Aluno('André', [11, 9])).toThrow('Todas as notas devem estar no intervalo de 0 a 10');
    });

    test('13. Notas devem ser números', () => {
        expect(() => new Aluno('Thiago', ['A', 7])).toThrow('Todas as notas devem estar no intervalo de 0 a 10');
    });

    test('14. Aprovação com nota máxima em uma única prova', () => {
        const aluno = new Aluno('Débora', [0, 10]);
        expect(aluno.statusAprovacao()).toBe('aprovad@');
    });

    test('15. Todas as notas zero retornam "MI"', () => {
        const aluno = new Aluno('Felipe', [0, 0]);
        expect(aluno.obterMencao()).toBe('MI');
    });

    test('16. Notas próximas de 7 retornam menção correta', () => {
        const aluno = new Aluno('Camila', [6.9, 7.1]);
        expect(aluno.obterMencao()).toBe('MS');
    });

    test('17. Uma única nota zero afeta a aprovação', () => {
        const aluno = new Aluno('Henrique', [0, 9]);
        expect(aluno.statusAprovacao()).toBe('reprovad@');
    });

    test('18. Soma total das notas está correta', () => {
        const aluno = new Aluno('Natália', [6, 4]);
        const soma = aluno.notas.reduce((acc, nota) => acc + nota, 0);
        expect(soma).toBe(10);
    });

    test('19. Função aprovado funciona com menção MM', () => {
        const aluno = new Aluno('Juliana', [5, 6]);
        expect(aluno.statusAprovacao()).toBe('aprovad@');
    });

    test('20. Aluno com notas abaixo de 5 é reprovado', () => {
        const aluno = new Aluno('Ricardo', [4, 3]);
        expect(aluno.statusAprovacao()).toBe('reprovad@');
    });
});

