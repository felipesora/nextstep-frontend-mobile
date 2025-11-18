import { Usuario } from "./types";

export type RootStackParamList = {
    Login: undefined;
    Cadastro: undefined;
    Trilhas: undefined;
    DetalhesTrilha: { idTrilha: number };
    AvaliarTrilha: { idTrilha: number };
    Formulario: undefined;
    Perfil: undefined;
    EditarPerfil: { usuario: Usuario };
    ConfirmarDelecaoConta: { idUsuario: number };
};