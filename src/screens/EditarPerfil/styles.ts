import styled from 'styled-components/native';
import theme from '../../styles/theme';

export const Container = styled.View`
  flex: 1;
  background-color: ${theme.colors.background};
`;

export const Content = styled.View`
  padding: 24px 20px;
`;

export const BotaoVoltar = styled.TouchableOpacity`
  padding: 12px 0;
  margin-bottom: 16px;
  align-self: flex-start;
`;

export const BotaoVoltarTexto = styled.Text`
  font-size: 16px;
  color: ${theme.colors.primary};
  font-family: ${theme.fonts.regular};
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const Titulo = styled.Text`
  font-size: 28px;
  font-weight: 700;
  color: ${theme.colors.text};
  font-family: ${theme.fonts.bold};
  margin-bottom: 32px;
  text-align: center;
`;

export const FormContainer = styled.View`
  background-color: ${theme.colors.card};
  border-radius: 16px;
  padding: 24px;
  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.1;
  shadow-radius: 8px;
  elevation: 3;
`;

export const InputContainer = styled.View`
  margin-bottom: 20px;
`;

export const Label = styled.Text`
  font-size: 16px;
  font-weight: 600;
  color: ${theme.colors.text};
  font-family: ${theme.fonts.bold};
  margin-bottom: 8px;
`;

export const Input = styled.TextInput`
  background-color: ${theme.colors.background};
  border: 1px solid ${theme.colors.lightgray};
  border-radius: 12px;
  padding: 16px;
  font-size: 16px;
  color: ${theme.colors.text};
  font-family: ${theme.fonts.regular};
`;

export const BotoesContainer = styled.View`
  flex-direction: column;
  gap: 12px;
  margin-top: 8px;
`;

export const SalvarButton = styled.TouchableOpacity`
  flex: 1;
  background-color: ${props => 
    props.disabled ? theme.colors.gray : theme.colors.primary};
  padding: 20px;
  border-radius: 12px;
  align-items: center;
  justify-content: center;
`;

export const SalvarButtonText = styled.Text`
  color: white;
  font-size: 16px;
  font-weight: 600;
  font-family: ${theme.fonts.bold};
`;

export const CancelarButton = styled.TouchableOpacity`
  flex: 1;
  background-color: ${theme.colors.lightgray};
  padding: 20px;
  border-radius: 12px;
  align-items: center;
  justify-content: center;
  border: 1px solid ${theme.colors.gray};
`;

export const CancelarButtonText = styled.Text`
  color: ${theme.colors.text};
  font-size: 16px;
  font-weight: 600;
  font-family: ${theme.fonts.bold};
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

export const Icone = styled.Image`
  width: 20px;
  height: 20px;
  margin-right: 4px;
`;