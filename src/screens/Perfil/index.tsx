import React, { useState, useEffect, useCallback } from 'react';
import { ScrollView, Alert, ActivityIndicator } from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types/navigation';
import Cabecalho from '../../components/Cabecalho';
import { 
  Container,
  Content,
  Titulo,
  InfoContainer,
  InfoItem,
  InfoLabel,
  InfoValue,
  BotoesContainer,
  BotaoVoltar,
  BotaoVoltarTexto,
  Divisor,
  AvatarContainer,
  Avatar,
  AvatarTexto,
  NomeUsuario,
  BotaoEditar,
  BotaoTextoEditar,
  BotaoSair,
  BotaoTextoSair,
  BotaoDeletarConta,
  BotaoTextoDeletarConta,
  Icone,
} from './styles';
import { buscarUsuarioPorId } from '../../services/usuarioService';
import { Usuario } from '../../types/types';
import AsyncStorage from '@react-native-async-storage/async-storage';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const Perfil = () => {
  const navigation = useNavigation<NavigationProp>();
  const [usuario, setUsuario] = useState<Usuario | null>(null);
  const [carregando, setCarregando] = useState(true);

  useFocusEffect(
      useCallback(() => {
        let ativo = true;

        const buscarUsuarioLogado = async () => {
          try {
            const idUsuarioStorage = await AsyncStorage.getItem("usuarioId");
            setCarregando(true);
            const dados = await buscarUsuarioPorId(Number(idUsuarioStorage));
            if (ativo) setUsuario(dados);
            
          } catch (error) {
            console.error("Erro ao buscar usuário:", error);
            Alert.alert('Erro', 'Não foi possível carregar os detalhes do usuário');
          } finally {
            if (ativo) setCarregando(false);
          }
        };

        buscarUsuarioLogado();

        return () => {
          ativo = false;
        };
      }, [])
  );

  const handleEditarPerfil = () => {
    if (usuario) {
      navigation.navigate('EditarPerfil', { usuario });
    }
  };

  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem('usuarioId');
      navigation.navigate('Login');

    } catch (error) {
      console.error('Erro ao remover item:', error);
    }
  };

  const handleDeletarConta = () => {
    if (!usuario || !usuario.id) {
      Alert.alert("Erro", "ID do usuário não encontrado.");
      return;
    }

    navigation.navigate('ConfirmarDelecaoConta', { idUsuario: usuario.id });
  };

  const handleVoltar = () => {
    navigation.goBack();
  };

  const getIniciais = (nome: string) => {
    return nome
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase()
      .substring(0, 2);
  };

  if (carregando) {
    return (
      <Container>
        <Cabecalho />
        <Content>
          <ActivityIndicator size="large" color="#0078FF" />
        </Content>
      </Container>
    );
  }

  if (!usuario) {
    return (
      <Container>
        <Cabecalho />
        <Content>
          <Titulo>Usuário não encontrado</Titulo>
        </Content>
      </Container>
    );
  }

  return (
    <Container>
      <Cabecalho />
      <ScrollView>
        <Content>
          {/* Botão Voltar */}
          <BotaoVoltar onPress={handleVoltar}>
            <BotaoVoltarTexto>
              <Icone source={require("../../../assets/images/voltar-azul-icon.png")}/>
              Voltar
            </BotaoVoltarTexto>
          </BotaoVoltar>

          <Titulo>Meu Perfil</Titulo>

          {/* Avatar e Nome */}
          <AvatarContainer>
            <Avatar>
              <AvatarTexto>{getIniciais(usuario.nome)}</AvatarTexto>
            </Avatar>
            <NomeUsuario>{usuario.nome}</NomeUsuario>
          </AvatarContainer>

          {/* Informações do Usuário */}
          <InfoContainer>
            <InfoItem>
              <InfoLabel>Nome completo</InfoLabel>
              <InfoValue>{usuario.nome}</InfoValue>
            </InfoItem>

            <InfoItem>
              <InfoLabel>E-mail</InfoLabel>
              <InfoValue>{usuario.email}</InfoValue>
            </InfoItem>
          </InfoContainer>

          <Divisor />

          {/* Botões de Ação */}
          <BotoesContainer>
            <BotaoEditar onPress={handleEditarPerfil}>
              <BotaoTextoEditar>
                <Icone source={require("../../../assets/images/edit-icon.png")}/>
                Editar Dados
              </BotaoTextoEditar>
            </BotaoEditar>

            <BotaoSair onPress={handleLogout}>
              <BotaoTextoSair>
                <Icone source={require("../../../assets/images/logout-icon.png")}/>
                Sair da Conta
              </BotaoTextoSair>
            </BotaoSair>

            <BotaoDeletarConta onPress={handleDeletarConta}>
              <BotaoTextoDeletarConta>
                <Icone source={require("../../../assets/images/delete-icon.png")}/>
                Deletar Conta
              </BotaoTextoDeletarConta>
            </BotaoDeletarConta>
          </BotoesContainer>
        </Content>
      </ScrollView>
    </Container>
  );
};

export default Perfil;