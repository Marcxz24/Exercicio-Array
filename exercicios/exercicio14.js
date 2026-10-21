export function executar({ equipe }) {
    // 1. find() para "Octavio" e depois "Otavio"
    const achaOctavio = equipe.find(nome => nome === "Octavio");
    const achaOtavio = equipe.find(nome => nome === "Otavio");

    // 2. findIndex() para ver a posição de "Otávio" e de "Octavio"
    const indiceOtavioComAcento = equipe.findIndex(nome => nome === "Otávio");
    const indiceOctavio = equipe.findIndex(nome => nome === "Octavio");

    // 3. Bônus: filter() com includes("Otávio")
    const filtradosOtavio = equipe.filter(nome => nome.includes("Otávio"));

    // Logs no console para acompanhamento
    console.log("Octavio:", achaOctavio);
    console.log("Otavio:", achaOtavio);
    console.log("Posição Octavio:", indiceOctavio);
    console.log("Posição Otávio:", indiceOtavioComAcento);
    console.log("Bônus filter:", filtradosOtavio);

    return {
        titulo: "Otávio ou Octavio?",
        linhas: [
            `Octavio encontrado: ${achaOctavio}`,
            `Otavio encontrado: ${achaOtavio}`,
            `Posição de Octavio: ${indiceOctavio}`,
            `Posição de Otávio: ${indiceOtavioComAcento}`,
            `Bônus (filter): ${JSON.stringify(filtradosOtavio)}`
        ]
    };
}