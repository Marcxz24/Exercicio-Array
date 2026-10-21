export function executar(){
    // registra todas as vendas no array vendas.
    const vendas = [120, 45, 0, 300, 80, 0, 15, 210];

    // 1. filter(): Cria vendasValidas sem os cancelamentos (removendo o 0)
    const vendasValidas = vendas.filter(valor => valor > 0);

    // 2. Descobre quantas vendas foram canceladas (contando os zeros)
    const canceladas = vendas.filter(valor => valor === 0).length;

    // 3. map(): Transforma as vendas válidas em textos como "R$ 120"
    const textosVendas = vendasValidas.map(valor => `R$ ${valor}`);

    // 4. find(): Encontra a primeira venda acima de R$ 100 nas vendas válidas
    const primeiraAcima100 = vendasValidas.find(valor => valor > 100);

    // 5. some(): Verifica se houve alguma venda acima de R$ 250
    const algumaAcima250 = vendasValidas.some(valor => valor > 250);

    // 6. reduce(): Calcula o total vendido e descobre a maior venda
    const totalVendido = vendasValidas.reduce((acumulador, valor) => acumulador + valor, 0);
    const maiorVenda = vendasValidas.reduce((maior, valor) => (valor > maior ? valor : maior), vendasValidas[0]);

    // 7. Mensagem final
    const quantidadeVendas = vendasValidas.length;
    const mensagemFinal = `Vinícius fez ${quantidadeVendas} vendas, total de R$ ${totalVendido}`;

    // Logs no console para acompanhamento
    console.log("Vendas válidas:", vendasValidas);
    console.log("Canceladas:", canceladas);
    console.log("Textos:", textosVendas);
    console.log("Primeira acima de 100:", primeiraAcima100);
    console.log("Alguma acima de 250:", algumaAcima250);
    console.log("Total:", totalVendido, "| Maior venda:", maiorVenda);
    console.log("Mensagem:", mensagemFinal);

    return {
        titulo: "Fechamento do caixa do Vinícius",
        linhas: [
            `Vendas válidas: [${vendasValidas.join(", ")}]`,
            `Vendas canceladas: ${canceladas}`,
            `Textos formatados: ${JSON.stringify(textosVendas)}`,
            `Primeira venda acima de 100: ${primeiraAcima100}`,
            `Houve venda acima de 250? ${algumaAcima250}`,
            `Total vendido: R$ ${totalVendido} | Maior venda: R$ ${maiorVenda}`,
            `Mensagem final: "${mensagemFinal}"`
        ]
    };
}