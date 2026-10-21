import { executar as executarExercicio1 } from "./exercicios/exercicio1.js";
import { executar as executarExercicio2 } from "./exercicios/exercicio2.js";
import { executar as executarExercicio3 } from "./exercicios/exercicio3.js";
import { executar as executarExercicio4 } from "./exercicios/exercicio4.js";
import { executar as executarExercicio5 } from "./exercicios/exercicio5.js";
import { executar as executarExercicio6 } from "./exercicios/exercicio6.js";
import { executar as executarExercicio7 } from "./exercicios/exercicio7.js";
import { executar as executarExercicio8 } from "./exercicios/exercicio8.js";
import { executar as executarExercicio9 } from "./exercicios/exercicio9.js";
import { executar as executarExercicio10 } from "./exercicios/exercicio10.js";
import { executar as executarExercicio11 } from "./exercicios/exercicio11.js";
import { executar as executarExercicio12 } from "./exercicios/exercicio12.js";
import { executar as executarExercicio13 } from "./exercicios/exercicio13.js";
import { executar as executarExercicio14 } from "./exercicios/exercicio14.js";
import { executar as executarExercicio15 } from "./exercicios/exercicio15.js";
import { executar as executarExercicio16 } from "./exercicios/exercicio16.js";
import { executar as executarExercicio17 } from "./exercicios/exercicio17.js";
//import { executar as executarExercicio18 } from "./exercicios/exercicio18.js";
//import { executar as executarExercicio19 } from "./exercicios/exercicio19.js";
//import { executar as executarExercicio20 } from "./exercicios/exercicio20.js";
//import { executar as executarExercicio21 } from "./exercicios/exercicio21.js";

// 1. DADOS COMPARTILHADOS

const equipe = [
    "André Luiz", "Arthur", "Breno", "Carlos Eduardo",
    "Cauã", "Davi", "Davi", "Eduardo",
    "Emerson", "Erick", "Eris", "Ezequiel",
    "Felipe", "Francisco", "Gabrielly", "Guilherme",
    "Gustavo Alexandre", "Gustavo Augusto", "Heloa", "Isabelle",
    "Ivaneide", "Jayme", "Jorge", "João Pedro",
    "João Vitor", "Kaio", "Luis Otávio", "Layson",
    "Lorenzzo", "Lucas", "Lucas Matheus", "Luis Gustavo",
    "Luiz", "Magsdene", "Marco Antônio", "Mateus",
    "Nickson", "Octavio", "Otávio", "Patrick",
    "Pedro Junio", "Rafael", "Victor Hugo", "Victor Hugo",
    "Vinícius", "Willky"
];

const horasExtras = [
    6, 2, 8, 0, 5, 7, 3, 9,
    4, 10, 1, 6, 0, 12, 5, 2
];

// 2. CARREGAMENTO DO MARKDOWN

async function carregarMarkdown() {
    const conteudoMarkdown = document.getElementById("conteudo-md");

    try {
        const resposta = await fetch(
            "Exercícios de Arrays — Supermercado Bom Dia.md"
        );

        if (!resposta.ok) {
            throw new Error("Não foi possível carregar o Markdown.");
        }

        const textoMarkdown = await resposta.text();
        conteudoMarkdown.innerHTML = marked.parse(textoMarkdown);
    } catch (erro) {
        conteudoMarkdown.textContent =
            "Erro ao carregar o conteúdo da atividade. " +
            "Verifique se o arquivo Markdown está na pasta correta.";

        console.error(erro);
    }
}

// 3. FORMATAÇÃO DOS RESULTADOS

function formatarResultado(valor) {
    if (valor === undefined) {
        return "undefined";
    }

    return JSON.stringify(valor);
}

// 4. CRIAÇÃO DOS CARTÕES

function criarExercicio(numero, titulo, linhas) {
    const card = document.createElement("article");
    card.className = "exercicio";

    const cabecalho = document.createElement("h3");
    cabecalho.textContent = `${numero}. ${titulo}`;

    const resultado = document.createElement("div");
    resultado.className = "resultado";
    resultado.textContent = linhas.join("\n");

    card.append(cabecalho, resultado);

    return card;
}

// 5. ORGANIZAÇÃO DOS NÍVEIS

const niveis = [
    {
        titulo: "Nível 1 — Fundamentos",
        exercicios: []
    },
    {
        titulo: "Nível 2 — map()",
        exercicios: []
    },
    {
        titulo: "Nível 3 — filter()",
        exercicios: []
    },
    {
        titulo: "Nível 4 — find(), findIndex(), some() e every()",
        exercicios: []
    },
    {
        titulo: "Nível 5 — reduce()",
        exercicios: []
    },
    {
        titulo: "Nível 6 — Combinando métodos",
        exercicios: []
    }
];

// Cada exercício está vinculado ao seu respectivo arquivo.
// Os índices dos níveis começam em zero.

const exerciciosPorNivel = [
    // Nível 1: exercícios 1 a 4
    [
        { numero: 1, executar: executarExercicio1 },
        { numero: 2, executar: executarExercicio2 },
        { numero: 3, executar: executarExercicio3 },
        { numero: 4, executar: executarExercicio4 }
    ],

    // Nível 2: exercícios 5 a 8
    [
        { numero: 5, executar: executarExercicio5 },
        { numero: 6, executar: executarExercicio6 },
        { numero: 7, executar: executarExercicio7 },
        { numero: 8, executar: executarExercicio8 }
    ],

    // Nível 3: exercícios 9 a 12
    [
        { numero: 9, executar: executarExercicio9 },
        { numero: 10, executar: executarExercicio10 },
        { numero: 11, executar: executarExercicio11 },
        { numero: 12, executar: executarExercicio12 }
    ],

    // Nível 4: exercícios 13 a 16
    [
        { numero: 13, executar: executarExercicio13 },
        { numero: 14, executar: executarExercicio14 },
        { numero: 15, executar: executarExercicio15 },
        { numero: 16, executar: executarExercicio16 }
    ],

    // Nível 5: exercícios 17 a 19
    [
        { numero: 17, executar: executarExercicio17 },
        //{ numero: 18, executar: executarExercicio18 },
        //{ numero: 19, executar: executarExercicio19 }
    ],

    // Nível 6: exercícios 20 e 21
    [
        //{ numero: 20, executar: executarExercicio20 },
        //{ numero: 21, executar: executarExercicio21 }
    ]
];

// 6. EXECUÇÃO DOS EXERCÍCIOS

function executarExercicios() {
    const conteudoResultados =
        document.getElementById("conteudoResultados");

    conteudoResultados.replaceChildren();

    const contexto = {
        equipe,
        horasExtras,
        formatarResultado
    };

    exerciciosPorNivel.forEach((lista, indiceNivel) => {
        lista.forEach(({ numero, executar }) => {
            const resultado = executar(contexto);

            const card = criarExercicio(
                numero,
                resultado.titulo,
                resultado.linhas
            );

            niveis[indiceNivel].exercicios.push(card);
        });
    });

    // 7. EXIBIÇÃO DOS NÍVEIS E EXERCÍCIOS

    niveis.forEach(nivel => {
        const tituloNivel = document.createElement("h2");
        tituloNivel.className = "nivel";
        tituloNivel.textContent = nivel.titulo;

        const grupo = document.createElement("div");
        grupo.append(...nivel.exercicios);

        conteudoResultados.append(tituloNivel, grupo);
    });

    // Limpa os cartões armazenados para não duplicá-los
    // caso o usuário oculte e abra os resultados novamente.
    niveis.forEach(nivel => {
        nivel.exercicios = [];
    });
}

// 8. BOTÃO PARA MOSTRAR OU OCULTAR OS RESULTADOS

function configurarBotaoResultados() {
    const botao = document.getElementById("btnResultados");
    const container = document.getElementById("containerResultados");

    botao.addEventListener("click", () => {
        const vaiMostrar = container.hidden;

        if (vaiMostrar) {
            executarExercicios();
            container.hidden = false;
            botao.textContent = "Ocultar resultados";
        } else {
            container.hidden = true;
            botao.textContent = "Mostrar resultados";
        }

        botao.setAttribute("aria-expanded", String(vaiMostrar));
    });
}

// 9. INICIALIZAÇÃO

document.addEventListener("DOMContentLoaded", () => {
    carregarMarkdown();
    configurarBotaoResultados();
});
