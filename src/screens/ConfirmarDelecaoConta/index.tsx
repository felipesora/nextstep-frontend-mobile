import React from 'react';
import { Alert } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types/navigation';
import Cabecalho from '../../components/Cabecalho';
import { 
  Container,
  Content,
  IconeAtencao,
  Titulo,
  Mensagem,
  BotoesContainer,
  BotaoDeletar,
  BotaoTextoDeletar,
  BotaoCancelar,
  BotaoTextoCancelar
} from './styles';
import { deletarUsuario } from '../../services/usuarioService';
import AsyncStorage from '@react-native-async-storage/async-storage';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const ConfirmarDelecaoConta = () => {
  const navigation = useNavigation<NavigationProp>();
  const route = useRoute();
  const { idUsuario } = route.params as { idUsuario: number };

  const handleDeletarConta = async () => {
    try {
        await deletarUsuario(idUsuario);
        await AsyncStorage.removeItem('usuarioId');
        navigation.navigate('Login');
        
    } catch (error) {
        console.error('Erro ao deletar conta: ', error);
    }
  };

  const handleCancelar = () => {
    navigation.goBack();
  };

  return (
    <Container>
      <Cabecalho />
      <Content>
        <IconeAtencao source={require("../../../assets/images/atencao-icon.png")} />
        
        <Titulo>Deletar Conta</Titulo>
        
        <Mensagem>
          Tem certeza que deseja deletar sua conta?{'\n\n'}
          Esta ação <Mensagem.Destaque>não pode ser desfeita</Mensagem.Destaque> e todos os seus dados serão permanentemente perdidos, incluindo:
          {'\n\n'}
          • Seu perfil de usuário{'\n'}
          • Histórico de progresso{'\n'}
          • Avaliações realizadas{'\n'}
          • Dados pessoais
        </Mensagem>

        <BotoesContainer>
          <BotaoCancelar onPress={handleCancelar}>
            <BotaoTextoCancelar>Cancelar</BotaoTextoCancelar>
          </BotaoCancelar>
          
          <BotaoDeletar onPress={handleDeletarConta}>
            <BotaoTextoDeletar>Sim, Deletar Conta</BotaoTextoDeletar>
          </BotaoDeletar>
        </BotoesContainer>
      </Content>
    </Container>
  );
};

export default ConfirmarDelecaoConta;