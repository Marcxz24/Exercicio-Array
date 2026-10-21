export function executar(){
    // Arrays que irá armazenar os horaios de horas extra, e o valor por hora.
    const horasExtras = [6, 2, 8, 0, 5, 7, 3, 9, 4, 10, 1, 6, 0, 12, 5, 2];
    const valorPorHora = 25;

    // horas trabalhadas recebe todas as horas extras maior que zero.
    const horasTrabalhadas = horasExtras.filter(horas => horas > 0);

    // valores a pagar recebe horas trabalhadasm e multiplica pelo valor por horas.
    const valoresAPagar = horasTrabalhadas.map(horas => horas * valorPorHora);

    // total geral recebe os valores a pagar, e soma com o valor de valore a pagar.
    const totalGeral = valoresAPagar.reduce((acumulador, valor) => acumulador + valor, 0);

    // escreve os valores no console.
    console.log("Horas filtradas (> 0):", horasTrabalhadas);
    console.log("Valores a pagar:", valoresAPagar);
    console.log("Total geral:", totalGeral);

    return {
        titulo: "Pagamento das horas extras",
        linhas: [
            `Horas trabalhadas: ${horasTrabalhadas.join(", ")}`,
            `Valores individuais: R$ ${valoresAPagar.join(", R$ ")}`,
            `Total a pagar: R$ ${totalGeral}`
        ]
    };
}