import React, { useState } from 'react';
import { 
  Container,
  LoginCard,
  LoginHeader,
  Logo,
  LogoSubtitle,
  LoginForm,
  FormGroup,
  FormLabel,
  FormInput,
  PasswordContainer,
  TogglePassword,
  LoginButton,
  SignupLink,
  SignupText,
  SignupLinkText,
  MensagemContainer,
  Sucesso,
  Erro,
  LoginButtonText
} from './styles';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types/navigation';
import { Usuario } from '../../types/types';
import { cadastrarUsuario, UsuarioRequestDTO } from '../../services/usuarioService';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const Cadastro = () => {
  const navigation = useNavigation<NavigationProp>();
  const [nome, setNome] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [senha, setSenha] = useState<string>('');
  const [confirmarSenha, setConfirmarSenha] = useState<string>('');
  const [sucesso, setSucesso] = useState<string>('');
  const [erro, setErro] = useState<string>('');
  const [carregando, setCarregando] = useState<boolean>(false);

  const handleSubmit = async () => {
    if (!nome || !email || !senha || !confirmarSenha) {
      setErro("Por favor, preencha todos os campos.");
      setSucesso("");
      return;
    }

    if (nome.length < 3) {
      setErro("O nome deve ter pelo menos 3 caracteres.");
      setSucesso("");
      return;
    }

    if (senha !== confirmarSenha) {
      setErro("As senhas não coincidem.");
      setSucesso("");
      return;
    }

    if (senha.length < 6) {
      setErro("A senha deve ter pelo menos 6 caracteres.");
      setSucesso("");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setErro("Por favor, insira um e-mail válido.");
      setSucesso("");
      return;
    }

    setCarregando(true);
    setErro("");

    try {
      const novoUsuario: UsuarioRequestDTO = {
        nome,
        email,
        senha,
      };

      await cadastrarUsuario(novoUsuario);
      
      setSucesso("Cadastro realizado com sucesso!");
      setNome('');
      setEmail('');
      setSenha('');
      setConfirmarSenha('');

      setTimeout(() => {
        navigation.navigate('Login');
      }, 2000);

    } catch (error: any) {
      console.error("Erro ao cadastrar:", error);
      setErro(error.message || "Erro ao realizar cadastro. Tente novamente.");
    } finally {
      setCarregando(false);
    }
  };

  return (
    <Container>
      <LoginCard>
        <LoginHeader>
          <Logo source={require("../../../assets/images/logo-branca.png")} />
          <LogoSubtitle>Crie sua conta e dê o próximo passo</LogoSubtitle>
        </LoginHeader>
        
        <LoginForm>
          <FormGroup>
            <FormLabel>Nome completo</FormLabel>
            <FormInput
              placeholder="Seu nome completo"
              placeholderTextColor="#8C8C9A"
              value={nome}
              onChangeText={setNome}
              autoCapitalize="words"
            />
          </FormGroup>

          <FormGroup>
            <FormLabel>E-mail</FormLabel>
            <FormInput
              placeholder="seu@email.com"
              placeholderTextColor="#8C8C9A"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </FormGroup>
          
          <FormGroup>
            <FormLabel>Senha</FormLabel>
            <PasswordContainer>
              <FormInput
                placeholder="Sua senha"
                placeholderTextColor="#8C8C9A"
                value={senha}
                onChangeText={setSenha}
                secureTextEntry={true}
              />
            </PasswordContainer>
          </FormGroup>

          <FormGroup>
            <FormLabel>Confirmar senha</FormLabel>
            <PasswordContainer>
              <FormInput
                placeholder="Confirme sua senha"
                placeholderTextColor="#8C8C9A"
                value={confirmarSenha}
                onChangeText={setConfirmarSenha}
                secureTextEntry={true}
              />
            </PasswordContainer>
          </FormGroup>

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
          
          <LoginButton onPress={handleSubmit} disabled={carregando}>
            <LoginButtonText>
              {carregando ? 'Cadastrando...' : 'Cadastrar'}
            </LoginButtonText>
          </LoginButton>
          
          <SignupLink>
            <SignupText>Já tem uma conta? </SignupText>
            <SignupLinkText onPress={() => navigation.navigate('Login')}>
              Fazer login
            </SignupLinkText>
          </SignupLink>
        </LoginForm>
      </LoginCard>
    </Container>
  );
};

export default Cadastro;