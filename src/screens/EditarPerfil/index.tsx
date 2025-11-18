import React, { useState } from 'react';
import { ScrollView, Alert } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types/navigation';
import Cabecalho from '../../components/Cabecalho';
import { 
  Container,
  Content,
  Titulo,
  FormContainer,
  InputContainer,
  Label,
  Input,
  BotoesContainer,
  SalvarButton,
  SalvarButtonText,
  CancelarButton,
  CancelarButtonText,
  BotaoVoltar,
  BotaoVoltarTexto,
  MensagemContainer,
  Sucesso,
  Erro,
  Icone
} from './styles';
import { Usuario } from '../../types/types';
import { editarUsuario } from '../../services/usuarioService';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

interface RouteParams {
  usuario: Usuario;
}

const EditarPerfil = () => {
  const navigation = useNavigation<NavigationProp>();
  const route = useRoute();
  const { usuario } = route.params as RouteParams;
  const [sucesso, setSucesso] = useState<string>('');
  const [erro, setErro] = useState<string>('');
  
  const [formData, setFormData] = useState({
    nome: usuario.nome,
    email: usuario.email,
    senha: usuario.senha,
  });
  const [salvando, setSalvando] = useState(false);

  const handleSalvar = async () => {
    // Validações
    if (!formData.nome.trim() || !formData.email.trim()) {
      setErro('Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    if (formData.senha && formData.senha.length < 6) {
      setErro('A senha deve ter pelo menos 6 caracteres.');
      return;
    }

    setSalvando(true);

    try {

      await editarUsuario(usuario.id, formData);

      setErro('');
      setSucesso('Seus dados foram atualizados com sucesso!');
      setTimeout(() => {
            navigation.navigate('Perfil');
      }, 2000);
      
    } catch (error) {
      setErro('Não foi possível atualizar seus dados. Tente novamente.');
    } finally {
      setSalvando(false);
    }
  };

  const handleCancelar = () => {
    navigation.goBack();
  };

  const handleVoltar = () => {
    navigation.goBack();
  };

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

          <Titulo>Editar Perfil</Titulo>

          <FormContainer>
            <InputContainer>
              <Label>Nome completo *</Label>
              <Input
                placeholder="Seu nome completo"
                placeholderTextColor="#8C8C9A"
                value={formData.nome}
                onChangeText={(text:string) => setFormData(prev => ({ ...prev, nome: text }))}
              />
            </InputContainer>

            <InputContainer>
              <Label>E-mail *</Label>
              <Input
                placeholder="seu@email.com"
                placeholderTextColor="#8C8C9A"
                value={formData.email}
                onChangeText={(text:string) => setFormData(prev => ({ ...prev, email: text }))}
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </InputContainer>

            <InputContainer>
              <Label>Nova senha *</Label>
              <Input
                placeholder="Sua senha"
                placeholderTextColor="#8C8C9A"
                value={formData.senha}
                onChangeText={(text:string) => setFormData(prev => ({ ...prev, senha: text }))}
                secureTextEntry
              />
            </InputContainer>

            <>
                {sucesso ? (
                    <MensagemContainer>
                    <Sucesso>{sucesso}</Sucesso>
                    </MensagemContainer>
                ) : null}
                {erro ? (
                    <MensagemContainer>
                    <Erro>{erro}</Erro>
                    </MensagemContainer>
                ) : null}
            </>

            <BotoesContainer>              
              <SalvarButton onPress={handleSalvar} disabled={salvando}>
                <SalvarButtonText>
                  {salvando ? 'Salvando...' : 'Salvar Alterações'}
                </SalvarButtonText>
              </SalvarButton>

              <CancelarButton onPress={handleCancelar} disabled={salvando}>
                <CancelarButtonText>Cancelar</CancelarButtonText>
              </CancelarButton>
            </BotoesContainer>
          </FormContainer>
        </Content>
      </ScrollView>
    </Container>
  );
};

export default EditarPerfil;