export function executar() {
    // Array que contém os nomes dos participantes da reunião
    const apresentacoes = ["Isabelle", "Francisco", "Guilherme"];

    // Array para armazenar as linhas formatadas das apresentações
    const linhas = [];

    // Exibe cada apresentação no console, numerando-as a partir de 1
    for (let index = 0; index < apresentacoes.length; index++) {
        const element = apresentacoes[index];

        // Cria uma string formatada para cada apresentação, incluindo o número da apresentação e o nome do participante
        const textoLinha = `${index + 1}° Apresentação: ${element}`;
        
        // Exibe a apresentação no console
        console.log(`${index + 1}° Apresentação: ${element}`);

        // Adiciona a linha formatada ao array de linhas
        linhas.push(textoLinha);
    }

    // Retorna um objeto com o título e as linhas das apresentações
    // o método map() é usado para mapear cada posição do array para mostrar a ordem da apresentação de cada participante.
    return {
        titulo: "Ordem da reunião",
        linhas: linhas
    }
}