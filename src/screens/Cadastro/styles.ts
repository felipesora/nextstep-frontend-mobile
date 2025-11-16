import styled from 'styled-components/native';
import theme from '../../styles/theme';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: ${theme.colors.background};
`;

export const LoginCard = styled.View`
  width: 100%;
  max-width: 400px;
  background-color: ${theme.colors.card};
  border-radius: 20px;
  shadow-color: #000;
  shadow-offset: 0px 4px;
  shadow-opacity: 0.1;
  shadow-radius: 30px;
  elevation: 8;
  overflow: hidden;
`;

export const LoginHeader = styled.View`
  background-color: ${theme.colors.primary};
  padding: 40px 30px 30px;
  align-items: center;
`;

export const Logo = styled.Image`
  align-self: center;
  margin-bottom: 20px;
  width: 200px;
  height: 50px;
`;

export const LogoSubtitle = styled.Text`
  font-size: 14px;
  opacity: 0.9;
  color: white;
  font-family: ${theme.fonts.regular};
`;

export const LoginForm = styled.View`
  padding: 30px;
`;

export const FormGroup = styled.View`
  margin-bottom: 20px;
`;

export const FormLabel = styled.Text`
  margin-bottom: 8px;
  color: ${theme.colors.text};
  font-weight: 500;
  font-size: 14px;
  font-family: ${theme.fonts.regular};
`;

export const FormInput = styled.TextInput`
  width: 100%;
  padding: 15px;
  border: 1px solid ${theme.colors.lightgray};
  border-radius: 10px;
  font-size: 16px;
  color: ${theme.colors.text};
  background-color: ${theme.colors.background};
  font-family: ${theme.fonts.regular};
`;

export const PasswordContainer = styled.View`
  position: relative;
`;

export const TogglePassword = styled.TouchableOpacity`
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-12px);
  padding: 0;
  width: 24px;
  height: 24px;
  justify-content: center;
  align-items: center;
`;

TogglePassword.Text = styled.Text`
  font-size: 16px;
  color: ${theme.colors.gray};
`;

export const LoginButton = styled.TouchableOpacity`
  width: 100%;
  padding: 15px;
  background-color: ${props => 
    props.disabled ? theme.colors.gray : theme.colors.primary};
  border-radius: 10px;
  margin-bottom: 20px;
  align-items: center;
  justify-content: center;
  opacity: ${props => props.disabled ? 0.6 : 1};
`;

export const LoginButtonText = styled.Text`
  color: white;
  font-size: 16px;
  font-weight: 600;
  font-family: ${theme.fonts.bold};
`;

export const SignupLink = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const SignupText = styled.Text`
  font-size: 14px;
  color: ${theme.colors.gray};
  font-family: ${theme.fonts.regular};
`;

export const SignupLinkText = styled.Text`
  font-size: 14px;
  color: ${theme.colors.primary};
  font-weight: 500;
  font-family: ${theme.fonts.regular};
  text-decoration-line: underline;
`;

export const MensagemContainer = styled.View`
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

export const Sucesso = styled.Text`
  font-size: 14px;
  color: ${theme.colors.success};
  font-weight: 600;
  font-family: ${theme.fonts.regular};
  text-align: center;
`;

export const Erro = styled.Text`
  font-size: 14px;
  color: ${theme.colors.error};
  font-weight: 600;
  font-family: ${theme.fonts.regular};
  text-align: center;
`;