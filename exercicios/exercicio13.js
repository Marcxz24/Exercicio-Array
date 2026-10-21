export function executar( { equipe }) {
    // Cria o crachá com um nome similar a "Nick" localizado na equipe, caso exista
    const crachaNick = equipe.find(nome => nome.startsWith("Nick"));
    let resultadoNick;

    if (crachaNick === undefined) {
        console.log("Crachá não pertence a ninguém da equipe");
        resultadoNick = "Crachá não pertence a ninguém da equipe";
    } else {
        console.log("Crachá do Nick:", crachaNick);
        resultadoNick = crachaNick;
    }

    // Cria o crachá com um nome similar a "Ze" ou "Zé" localizado na equipe, caso exista
    const crachaZe = equipe.find(nome => nome.startsWith("Ze") || nome.startsWith("Zé"));

    // Verifica se o crachá do Ze foi encontrado e exibe a mensagem apropriada no console
    let resultadoZe;
    if (crachaZe === undefined) {
        console.log("Crachá não pertence a ninguém da equipe");
        resultadoZe = "Crachá não pertence a ninguém da equipe";
    } else {
        console.log("Crachá do Ze:", crachaZe);
        resultadoZe = crachaZe;
    }


    return {
        titulo: "Crachá rasgado",
        linhas: [
            `Crachá do Nick: ${crachaNick}`,
            `Crachá do Ze: ${resultadoZe}`
        ]
    };
}