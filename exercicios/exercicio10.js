export function executar({ equipe }) {

    // Filtra os nomes que começam com a letra "G" (ignorando maiúsculas e minúsculas)
    const nomes = equipe.filter(nomesG => nomesG.toLowerCase().startsWith('g'));

    // Exibe os nomes filtrados no console
    console.log("Nomes que começam com G:", nomes);

    // Retorna o resultado como um objeto com título e linhas
    const linhas = nomes;

    // Retorna o resultado como um objeto com título e linhas
    return {
        titulo: "Camisetas do time de futebol",
        linhas: linhas
    };
}