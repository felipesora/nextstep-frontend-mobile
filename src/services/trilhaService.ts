import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:56500/",
});

export const listarTrilhasAtivas = async () => {
  try {
    const response = await api.get(
      "/api/Trilha/ativas",
      {
        params: {
          deslocamento: 0,
          registrosRetornados: 100
        }
      }
    );

    return response.data; // retorna a lista
  } catch (error) {
    console.error("Erro ao listar trilhas:", error);
    throw error;
  }
};

export const buscarTrilhaPorId = async (id: number) => {
  try {
    const response = await api.get(`/api/Trilha/${id}`);
    return response.data; // retorna a trilha específica
  } catch (error) {
    console.error(`Erro ao buscar trilha com ID ${id}:`, error);
    throw error;
  }
};