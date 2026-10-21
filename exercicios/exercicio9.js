export function executar( ) {
    // 1. Cria um array com a quantidade de bolos vendidos por dia
    const bolosPorDia = [32, 18, 25, 40, 12, 27];

    // 2. Filtra os dias em que foram vendidos 25 ou mais bolos usando o método filter()
    const maisVendidos = bolosPorDia.filter(quantidade => quantidade >= 25);

    // 3. Exibe os resultados no console para conferir
    console.log("Bolos vendidos por dia:", bolosPorDia);

    // 4. Exibe os dias com 25 ou mais bolos vendidos
    console.log("Bolos vendidos em dias com 25 ou mais vendas:", maisVendidos);

    // 5. Retorna a estrutura organizada para o front-end
    const linhas = maisVendidos;

    // 6. Retorna o resultado formatado para o front-end
    return {
        titulo: "Dias de muito bolo",
        linhas: linhas
    };
}