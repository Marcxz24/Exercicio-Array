export function executar() {
    const equipeEstoque = ["Ezequiel", "Pedro Junio"];
    const linhas = [];

    // 1. Estado original
    console.log("Equipe Original:", equipeEstoque);
    linhas.push(`Equipe Original: ${JSON.stringify(equipeEstoque)}`);
 
    // 2. Adiciona o Nickson e captura o array atualizado
    equipeEstoque.push("Nickson");
    console.log("Equipe Atualizada:", equipeEstoque);
    linhas.push(`Equipe Atualizada: ${JSON.stringify(equipeEstoque)}`);

    // 3. Remove o Nickson e captura o array final
    equipeEstoque.pop();
    console.log("Nickson saiu e a equipe voltou a ser", equipeEstoque);
    linhas.push(`Nickson saiu e a equipe voltou a ser: ${JSON.stringify(equipeEstoque)}`);

    // Retorna para a interface exibir
    return {
        titulo: "Reforço no estoque",
        linhas: linhas
    };
}