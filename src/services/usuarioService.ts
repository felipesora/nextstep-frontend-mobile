import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:56500/",
});

export interface UsuarioRequestDTO {
  nome: string;
  email: string;
  senha: string;
}

export const listarUsuarios = async () => {
  try {
    const response = await api.get(
      "/api/Usuario",
      {
        params: {
          deslocamento: 0,
          registrosRetornados: 100
        }
      }
    );

    return response.data; // retorna a lista
  } catch (error) {
    console.error("Erro ao listar usuários:", error);
    throw error;
  }
};

export const buscarUsuarioPorId = async (id: number) => {
  try {
    const response = await api.get(`/api/Usuario/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Erro ao buscar usuário com ID ${id}:`, error);
    throw error;
  }
};

export const cadastrarUsuario = async (dados: UsuarioRequestDTO) => {
  try {
    const response = await api.post("/api/Usuario", dados);
    return response.data;
  } catch (error) {
    console.error("Erro ao cadastrar usuário:", error);
    throw error;
  }
};

export const editarUsuario = async (id: number, dados: UsuarioRequestDTO) => {
  try {
    const response = await api.put(`/api/Usuario/${id}`, dados);
    return response.data;
  } catch (error) {
    console.error(`Erro ao editar usuário com ID ${id}:`, error);
    throw error;
  }
};

export const deletarUsuario = async (id: number) => {
  try {
    const response = await api.delete(`/api/Usuario/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Erro ao deletar usuário com ID ${id}:`, error);
    throw error;
  }
};