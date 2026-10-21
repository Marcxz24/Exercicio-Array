export function executar() {
    const confirmados = [
        "Gustavo Alexandre", "João Vitor", "Heloa", "Victor Hugo",
        "Breno", "Octavio", "Kaio", "Lorenzzo",
    ];

    console.log("Lista de confirmados:", confirmados);

    // Adiciona "Heloa" à lista de confirmados apenas se ela ainda não estiver presente
    if (!confirmados.includes("Heloa")) {
        confirmados.push("Heloa");
    }

    console.log("Lista de confirmados após tentativa de adicionar Heloa:", confirmados);

    // Adiciona "Pedro Junio" à lista de confirmados apenas se ele ainda não estiver presente
    if (!confirmados.includes("Pedro Junio")) {
        confirmados.push("Pedro Junio");
    }

    console.log("Lista de confirmados após tentativa de adicionar Pedro Junio:", confirmados);

    return {
        titulo: " Churrasco de fim de ano",
        linhas: confirmados.map((nome) => `• ${nome}`)
    };
}