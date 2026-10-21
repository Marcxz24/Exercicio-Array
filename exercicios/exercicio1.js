export function executar({ formatarResultado }) {
    const escalaManha = ["Heloa", "Erick", "Vinícius", "Davi", "Luiz"];

    return {
        titulo: "Escala da manhã",
        linhas: [
            `Quem abre a loja: ${formatarResultado(escalaManha[0])}`,
            `Quem fecha o turno: ${formatarResultado(escalaManha[4])}`,
            `Pessoas escaladas: ${escalaManha.length}`
        ]
    };
}
