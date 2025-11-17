import React, { useEffect, useState } from 'react';
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
import { listarUsuarios } from '../../services/usuarioService';
import { Usuario } from '../../types/types';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Cabecalho from '../../components/Cabecalho';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const Login = () => {
  const navigation = useNavigation<NavigationProp>();
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
  const [email, setEmail] = useState<string>('');
  const [senha, setSenha] = useState<string>('');
  const [sucesso, setSucesso] = useState<string>('');
  const [erro, setErro] = useState<string>('');

  useEffect(() => {
    const buscarTodosUsuarios = async () => {
        try {
            const response = await listarUsuarios();

            // Caso sua API retorne: { data: Usuario[] }
            const lista: Usuario[] = response.data;

            setUsuarios(lista);

            console.log("Usuários carregados:", lista);
        } catch (error) {
            console.error("Erro ao buscar usuários", error);
        }
        
    };

    buscarTodosUsuarios();
  }, []);

  const handleSubmit = async () => {
        if (!email || !senha) {
            setErro("Por favor, preencha todos os campos.");
            setSucesso("");
            return;
        }

        // Procura o usuário na lista
        const usuarioEncontrado = usuarios.find(
            (u) => u.email === email && u.senha === senha
        );

        if (usuarioEncontrado) {
            setErro("");
            setSucesso("Login realizado com sucesso!");
            await AsyncStorage.setItem("usuarioId", String(usuarioEncontrado.id));

            setTimeout(() => {
                navigation.navigate('Trilhas');
            }, 2000);
            
        } else {
            setSucesso("");
            setErro("E-mail ou senha inválidos.");
        }
    };

  return (
    <Container>
      <LoginCard>
        <LoginHeader>
          <Logo source={require("../../../assets/images/logo-branca.png")} />
          <LogoSubtitle>Dê o próximo passo na sua jornada</LogoSubtitle>
        </LoginHeader>
        
        <LoginForm>
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
          
          <LoginButton onPress={handleSubmit}>
            <LoginButtonText>Entrar</LoginButtonText>
          </LoginButton>
          
          <SignupLink>
            <SignupText>Não tem uma conta? </SignupText>
            <SignupLinkText onPress={() => navigation.navigate('Cadastro')}>Cadastre-se</SignupLinkText>
            {/* onPress={navigation.navigate('Cadastro')} */}
          </SignupLink>
        </LoginForm>
      </LoginCard>
    </Container>
  );
};

export default Login;