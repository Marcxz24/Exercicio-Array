export function executar() {
    // array que armazena os cadastros da Heloa
    const cadastrosHeloa = [14, 9, 21, 17, 11];;

    // Array que armazena
    const diasDaSemana = ["Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira"];

    // variavel constante que irá receber o maior número do Array cadastrosHeloa, utilizando o método reduce();
    const maiorCadastro = cadastrosHeloa.reduce((max, atual) => (atual > max ? atual : max), cadastrosHeloa[0]);

    // variável constante que recebe a posição do array com o maior número, e que representa a mesma posição dos dias da semana.
    const indiceMelhorDia = cadastrosHeloa.indexOf(maiorCadastro);

    // Variável constante recebe o indice do dia da semana com a mesma posição do maior número do array.
    const melhorDia = diasDaSemana[indiceMelhorDia];

    // Escreve os valores na console.
    console.log("Maior número de cadastros:", maiorCadastro);
    console.log("Índice do melhor dia:", indiceMelhorDia);
    console.log("Melhor dia:", melhorDia);

    // retorna o titulo e os valores do array para listar no front-end.
    return {
        titulo: "Melhor dia da Heloa",
        linhas: [
            `Maior número de cadastros: ${maiorCadastro}`,
            `Melhor dia: ${melhorDia} (índice ${indiceMelhorDia})`
        ]
    };
}