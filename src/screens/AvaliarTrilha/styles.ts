import styled from 'styled-components/native';
import theme from '../../styles/theme';

export const Container = styled.View`
  flex: 1;
  background-color: ${theme.colors.background};
`;

export const Content = styled.View`
  padding: 24px 20px;
`;

export const Titulo = styled.Text`
  font-size: 28px;
  font-weight: 700;
  color: ${theme.colors.text};
  font-family: ${theme.fonts.bold};
  margin-bottom: 12px;
  text-align: center;
`;

export const Descricao = styled.Text`
  font-size: 16px;
  color: ${theme.colors.gray};
  font-family: ${theme.fonts.regular};
  line-height: 24px;
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

export const Label = styled.Text`
  font-size: 16px;
  font-weight: 600;
  color: ${theme.colors.text};
  font-family: ${theme.fonts.bold};
  margin-bottom: 12px;
`;

export const EstrelasContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  margin-bottom: 16px;
  gap: 8px;
`;

export const EstrelaButton = styled.TouchableOpacity`
  padding: 8px;
`;

export const Estrela = styled.Image`
  width: 40px;
  height: 40px;
`;

export const EstrelaVazia = styled.Image`
  width: 40px;
  height: 40px;
  opacity: 0.5;
`;

export const AvaliacaoAtual = styled.Text`
  font-size: 14px;
  color: ${theme.colors.success};
  font-family: ${theme.fonts.regular};
  text-align: center;
  margin-bottom: 24px;
  font-weight: 600;
`;

export const InputObservacao = styled.TextInput`
  background-color: ${theme.colors.background};
  border: 1px solid ${theme.colors.lightgray};
  border-radius: 12px;
  padding: 16px;
  font-size: 16px;
  color: ${theme.colors.text};
  font-family: ${theme.fonts.regular};
  min-height: 120px;
  margin-bottom: 8px;
`;

export const ContadorCaracteres = styled.Text`
  font-size: 12px;
  color: ${theme.colors.gray};
  font-family: ${theme.fonts.regular};
  text-align: right;
  margin-bottom: 24px;
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

export const BotoesContainer = styled.View`
  flex-direction: row;
  gap: 12px;
`;

export const ConfirmarButton = styled.TouchableOpacity`
  flex: 1;
  background-color: ${props => 
    props.disabled ? theme.colors.gray : theme.colors.success};
  padding: 16px;
  border-radius: 12px;
  align-items: center;
  justify-content: center;
  opacity: ${props => props.disabled ? 0.6 : 1};
`;

export const ConfirmarButtonText = styled.Text`
  color: white;
  font-size: 16px;
  font-weight: 600;
  font-family: ${theme.fonts.bold};
`;

export const CancelarButton = styled.TouchableOpacity`
  flex: 1;
  background-color: ${theme.colors.lightgray};
  padding: 16px;
  border-radius: 12px;
  align-items: center;
  justify-content: center;
  border: 1px solid ${theme.colors.gray};
  opacity: ${props => props.disabled ? 0.6 : 1};
`;

export const CancelarButtonText = styled.Text`
  color: ${theme.colors.text};
  font-size: 16px;
  font-weight: 600;
  font-family: ${theme.fonts.bold};
`;