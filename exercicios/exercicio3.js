export function executar() {
    const filaCafe = ["Lucas", "Mateus", "Otávio"];
    const linhas = [];

    // 1. Fila do café original
    console.log("Fila Original:", filaCafe);
    linhas.push(`Fila Original: ${JSON.stringify(filaCafe)}`);

    // 2. Adiciona Isabelle no inicio da fila com o unshift() e captura o array atualizado
    filaCafe.unshift("Isabelle");
    console.log("Fila Atualizada:", filaCafe);
    linhas.push(`Fila Atualizada: ${JSON.stringify(filaCafe)}`);

    // 3. Isabelle foi atendida e saiu da fila com o shift() e captura o array final
    filaCafe.shift();
    console.log("Isabelle saiu e a fila fica", filaCafe);
    linhas.push(`Isabelle saiu e a fila fica: ${JSON.stringify(filaCafe)}`);

    return {
        titulo: "Fila do cafezinho",
        linhas: linhas
    };
}

