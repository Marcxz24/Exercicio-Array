export function executar() {
    // 1. Criação do array de novatos
    const novatos = ["patrick", "magsdene", "willky"];

    console.log("Novatos originais:", [...novatos]);

    // 2. Criação do array de crachás usando map()
    // Transformamos cada nome para maiúsculo e adicionamos o prefixo do crachá
    const crachas = novatos.map((nome) => `CRACHÁ - ${nome.toUpperCase()}`);

    console.log("Crachás gerados:", crachas);

    // 3. Retorna o título e os crachás para a interface exibir
    return {
        titulo: "Crachás dos novatos",
        linhas: crachas
    };
}