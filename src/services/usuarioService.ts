import axios from "axios";

const api = axios.create({
  baseURL: "https://localhost:55873/",
});

export interface UsuarioRequestDTO {
  nome: string;
  email: string;
  senha: string;
}

export interface UsuarioRequestLoginDTO {
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

export const cadastrarUsuario = async (dados: UsuarioRequestDTO) => {
  try {
    const response = await api.post("/api/Usuario", dados);
    return response.data;
  } catch (error) {
    console.error("Erro ao cadastrar usuário:", error);
    throw error;
  }
};