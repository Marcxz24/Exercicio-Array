export function executar( { equipe }) {

    const nomesCompostos = equipe.filter( nome => nome.includes(" "));

    const textoQuantidade = `Quantidade de nomes compostos: ${nomesCompostos.length}`;

    console.log(textoQuantidade);
    console.log("Nomes compostos:", nomesCompostos);

    return{
        titulo: "Nomes compostos no ponto",
        linhas: [
            textoQuantidade,
            ...nomesCompostos.map(nome => `• ${nome}`)]
    }
}