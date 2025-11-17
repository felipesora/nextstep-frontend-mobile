import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:56500/",
});

export interface NotaRequestDTO {
  valorNota: number;
  observacao: string;
  idTrilha: number;
  idUsuario: number;
};

export const cadastrarNota = async (dados: NotaRequestDTO) => {
  try {
    const response = await api.post("/api/NotaTrilha", dados);
    return response.data;
  } catch (error) {
    console.error("Erro ao cadastrar nota:", error);
    throw error;
  }
};