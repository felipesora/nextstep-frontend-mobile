import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:56500/",
});

export interface NotaRequestDTO {
  nivelExperiencia: string;
  objetivoCarreira: string;
  areaTecnologia1: string;
  areaTecnologia2: string;
  areaTecnologia3: string;
  horasEstudo: string;
  habilidades: string;
  idUsuario: number
};

export const cadastrarRespostaFormulario = async (dados: NotaRequestDTO) => {
  try {
    const response = await api.post("/api/Formulario", dados);
    return response.data;
  } catch (error) {
    console.error("Erro ao cadastrar resposta do formulário:", error);
    throw error;
  }
};