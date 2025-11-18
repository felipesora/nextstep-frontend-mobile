export type Usuario = {
  id: number;
  nome: string;
  email: string;
  senha: string;
  dataCadastro: string;
};

export type Trilha = {
  id: number;
  nome: string;
  descricao: string;
  area: string;
  nivel: string;
  status: string;
  dataCriacao: string;
  conteudos: Conteudo[];
  notas: Nota[];
};

export type Conteudo = {
  id: number;
  titulo: string;
  descricao: string;
  tipo: string;
  link: string | null;
  idTrilha: number;
  dataCriacao: string;
};

export type Nota = {
  id: number;
  valorNota: number;
  observacao: string | null;
  idTrilha: number;
  idUsuario: number;
};