export function executar(){
    // array que armazena as pessoas que fizeram o plantão
    const plantoes = ["Emerson", "Jorge", "Emerson", "Eris", "Jorge", "Emerson", "Rafael"];

    // Método para realizar a contagem de quantas vezes "Emerson" apareceu no Plantão
    const totalEmerson = plantoes.reduce((contador, nome) => {
        return nome === "Emerson" ? contador + 1 : contador;
    }, 0)

    // Método para realizar a contagem de quantas vezes "Jorge" apareceu no Plantão
    const totalJorge = plantoes.reduce((contador, nome) => {
        return nome === "Jorge" ? contador + 1 : contador;
    }, 0)

    // Escreve o resultado da contagem do plantão de "Emerson" e "Jorge" no console
    console.log("Plantões do Emerson:", totalEmerson);
    console.log("Plantões do Jorge:", totalJorge);

    return {
        titulo: "Plantões do fim de semana",
        linhas: [
            `Emerson → ${totalEmerson}`,
            `Jorge → ${totalJorge}`
        ]
    };
}