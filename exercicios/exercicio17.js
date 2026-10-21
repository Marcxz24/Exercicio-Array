export function executar(){
    // array vaquinha recebe os valores: 10, 15, 20, 5, 10.
    const vaquinha = [10, 15, 20, 5, 10];

    // Variável custoBolo recebe o valor 80.
    const custoBolo = 80;

    // Total arrecadado recebe o valor da vaquinha somando os valores do array.
    const totalArrecadado = vaquinha.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);

    // Calcula quanto falta, subtraindo o valor arrecadado no custo do bolo.
    const quantoFalta = custoBolo - totalArrecadado;

    // Lista os resultados no console.
    console.log(`Valor do Bolo: R$ ${custoBolo}`);
    console.log("Arrecadado:", totalArrecadado);
    console.log("Faltam:", quantoFalta);

    return {
        titulo: "Vaquinha do bolo",
        linhas: [
            `Valor do Bolo: R$ ${custoBolo}`,
            `Arrecadado: R$ ${totalArrecadado}`,
            `Faltam: R$ ${quantoFalta}`
        ]
    };
}