export function executar( ) {
    // Array de horas extras
    const horasExtras = [6, 2, 8, 0, 5, 7, 3, 9, 4, 10, 1, 6, 0, 12, 5, 2];

    // Filtra as horas extras que estão entre 5 e 10 (inclusive)
    const entre5E10 = horasExtras.filter(horas => horas >= 5 && horas <= 10);

    // Exibe as horas extras filtradas no console
    console.log("Horas extras entre 5 e 10:", entre5E10);

    // Retorna o resultado como um objeto com título e linhas
    const linhas = entre5E10.map((horas, index) => `Horas extras: ${horas}`);

    // Retorna o resultado como um objeto com título e linhas
    return {
        titulo: "Horas extras para assinar",
        linhas: linhas
    };
}