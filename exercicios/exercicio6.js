export function executar() {
    // 1. Array que lista os valores atuais do vale-alimentação
    const valesAtuais = [400, 450, 500, 380];

    // Lista os valores atuais no console para referência
    console.log("Valores atuais:", valesAtuais);

    // 2. Mapeia cada valor do vale alimentação e soma 50 em cada um, criando um novo array com os valores ajustados.
    const valoresAjustados = valesAtuais.map(valor => valor + 50);

    // 3. Lista os valores ajustados no console para referência
    console.log("Valores ajustados:", valoresAjustados);

    // 4. Retorna o título e os valores ajustados para a interface exibir
    return {
        titulo: "Reajuste do vale-alimentação",
        linhas: valoresAjustados
    }
}