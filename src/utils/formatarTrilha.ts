import { Nota } from "../types/types";

export const formatarNivelTrilha = (nivel: string) => {
    switch (nivel) {
        case "INICIANTE":
            return "Iniciante";
        case "INTERMEDIARIO":
            return "Intermediário";
        case "AVANCADO":
            return "Avançado";
        default:
            break;
    }
}

export const calcularMediaNotas = (notas: Nota[]) => {
    if (!notas || notas.length === 0) return 0;

    const soma = notas.reduce((acc, nota) => acc + nota.valorNota, 0);
    const media = soma / notas.length;
    return Number(media.toFixed(1));
};