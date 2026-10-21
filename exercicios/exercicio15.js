export function executar( ) {
    // Nomes da equipe do Açougue
    const equipeAcougue = ["Otávio", "Gustavo Augusto", "Pedro Junio"];
    const usandoLuva = [true, true, false];

    // 1. Verifica se todos estão usando luva
    const todosDeLuva = usandoLuva.every(status => status === true);

    // 2. Verifica se pelo menos alguém está sem luva (esqueceu)
    const alguemEsqueceu = usandoLuva.some(status => status === false);

    // 3. Acha a posição (índice) do primeiro 'false' em usandoLuva
    const indiceFalse = usandoLuva.findIndex(status => status === false);

    // 4. Descobre quem é o funcionário usando o índice encontrado
    const quemEsqueceu = equipeAcougue[indiceFalse];

    // Logs no console para acompanhamento
    console.log("every:", todosDeLuva);
    console.log("some:", alguemEsqueceu);
    console.log(`posição ${indiceFalse}:`, quemEsqueceu);

    return {
        titulo: "Checagem de luvas no açougue",
        linhas: [
            `every → ${todosDeLuva}`,
            `some → ${alguemEsqueceu}`,
            `posição ${indiceFalse} → "${quemEsqueceu}"`
        ]
    };
}