export function executar( { equipe }) {

    // Filtra os nomes compostos da equipe (nomes que contêm espaço)
    const nomesCompostos = equipe.filter( nome => nome.includes(" "));

    // Cria uma string com a quantidade de nomes compostos encontrados
    const textoQuantidade = `Quantidade de nomes compostos: ${nomesCompostos.length}`;

    // Exibe a quantidade de nomes compostos e os próprios nomes compostos no console
    console.log(textoQuantidade);

    // Exibe os nomes compostos encontrados no console
    console.log("Nomes compostos:", nomesCompostos);

    // Retorna um objeto com o título e as linhas de saída
    return{
        titulo: "Nomes compostos no ponto",
        linhas: [
            textoQuantidade,
            ...nomesCompostos.map(nome => `• ${nome}`)]
    }
}