export function executar({ equipe }) {
    // 1. Conta a quantidade de pessoas usando o length
    const quantidade = equipe.length;
    const mensagemQuantidade = `Total da equipe: ${quantidade} pessoas.`;

    // 2. Cria um novo array com a saudação para cada membro usando o map()
    const saudacoes = equipe.map(nome => `Bom dia equipe, especialmente para o(a) ${nome}!`);

    // 3. Exibe os resultados no console para conferir
    console.log(mensagemQuantidade);
    saudacoes.forEach(saudacao => console.log(saudacao));

    // 4. Retorna a estrutura organizada para o front-end
    return {
        titulo: "Saudação da Equipe",
        linhas: [
            mensagemQuantidade,
            ...saudacoes // Espalha todas as saudações geradas pelo map dentro das linhas
        ]
    };
}