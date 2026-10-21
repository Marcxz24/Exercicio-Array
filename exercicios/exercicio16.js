export function executar(){
    // Array que lista a Fila do almoço dos funcionários.
    const filaAlmoco = ["Davi", "Erick", "Vinícius", "Heloa", "Nickson"];

    // a constante `indiceVinicius` recebe a fila do almoço com a propriedade `findIndex` para localizar o indice de Vinícius
    const indiceVinicius = filaAlmoco.findIndex(nome => nome === "Vinícius");

    // Como no Array a posição começa a ser contada do 0, soma 1 para ficar com o valor correto da posição.
    const posicaoVinicius = indiceVinicius + 1;

    // Escreva no console a posição de Vinícius
    console.log(`Vinícius é o ${posicaoVinicius}º da Fila`);

    // Localiza o indice de breno no Array filaAlmoco.
    const indiceBreno = filaAlmoco.findIndex(nome => nome === "Breno")

    // Como não foi localizado o indice ele retorna -1.
    console.log(`Breno → ${indiceBreno}, porque ele não está na fila`);

    return{
        titulo: "Fila do almoço",
        linhas: [
            `Vinícius → índice ${indiceVinicius} (${posicaoVinicius}º da fila)`,
            `Breno → ${indiceBreno}, porque ele não está na fila`
        ]
    };
}