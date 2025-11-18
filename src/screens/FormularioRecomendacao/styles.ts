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

export const FormContainer = styled.View``;

export const PerguntaContainer = styled.View`
  background-color: ${theme.colors.card};
  border-radius: 16px;
  padding: 20px;
  margin-bottom: 16px;
  shadow-color: #000;
  shadow-offset: 0px 1px;
  shadow-opacity: 0.1;
  shadow-radius: 4px;
  elevation: 2;
`;

export const PerguntaTitulo = styled.Text`
  font-size: 16px;
  font-weight: 600;
  color: ${theme.colors.text};
  font-family: ${theme.fonts.bold};
  margin-bottom: 16px;
`;

export const OpcoesContainer = styled.View`
  gap: 12px;
`;

export const Opcao = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  padding: 12px;
  border-radius: 8px;
  background-color: ${theme.colors.background};
`;

export const OpcaoSelecionada = styled.Text`
  font-size: 16px;
  color: ${theme.colors.primary};
  margin-right: 12px;
`;

export const OpcaoTexto = styled.Text<{ selecionado: boolean }>`
  font-size: 14px;
  color: ${props => props.selecionado ? theme.colors.text : theme.colors.gray};
  font-family: ${theme.fonts.regular};
  flex: 1;
`;

export const MultiSelectContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  gap: 8px;
`;

export const MultiSelectOpcao = styled.TouchableOpacity<{ selecionado: boolean }>`
  padding: 10px 16px;
  border-radius: 20px;
  background-color: ${props => 
    props.selecionado ? theme.colors.primary : theme.colors.background};
  border: 1px solid ${props => 
    props.selecionado ? theme.colors.primary : theme.colors.lightgray};
`;

export const MultiSelectTexto = styled.Text<{ selecionado: boolean }>`
  font-size: 12px;
  color: ${props => props.selecionado ? 'white' : theme.colors.text};
  font-family: ${theme.fonts.regular};
  font-weight: 500;
`;

export const InputHabilidades = styled.TextInput`
  background-color: ${theme.colors.background};
  border: 1px solid ${theme.colors.lightgray};
  border-radius: 12px;
  padding: 16px;
  font-size: 14px;
  color: ${theme.colors.text};
  font-family: ${theme.fonts.regular};
  min-height: 80px;
`;

export const ContadorCaracteres = styled.Text`
  font-size: 12px;
  color: ${theme.colors.gray};
  font-family: ${theme.fonts.regular};
  text-align: right;
  margin-top: 8px;
`;

export const BotoesContainer = styled.View`
  flex-direction: column;
  gap: 12px;
  margin-top: 24px;
`;

export const EnviarButton = styled.TouchableOpacity`
  flex: 1;
  background-color: ${props => 
    props.disabled ? theme.colors.gray : theme.colors.primary};
  padding: 20px;
  border-radius: 12px;
  align-items: center;
  justify-content: center;
`;

export const EnviarButtonText = styled.Text`
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

// Estilos para o resultado
export const ResultadoContainer = styled.View`
  background-color: ${theme.colors.card};
  border-radius: 16px;
  padding: 24px;
  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.1;
  shadow-radius: 8px;
  elevation: 3;
`;

export const ResultadoTitulo = styled.Text`
  font-size: 24px;
  font-weight: 700;
  color: ${theme.colors.primary};
  font-family: ${theme.fonts.bold};
  margin-bottom: 16px;
  text-align: center;
`;

export const ResultadoDescricao = styled.Text`
  font-size: 16px;
  color: ${theme.colors.text};
  font-family: ${theme.fonts.regular};
  line-height: 24px;
  margin-bottom: 24px;
  text-align: center;
`;

export const ResultadoAcoes = styled.View`
  flex-direction: column;
  gap: 12px;
`;

export const AcessarButton = styled.TouchableOpacity`
  flex: 1;
  background-color: ${theme.colors.success};
  padding: 20px;
  border-radius: 12px;
  align-items: center;
  justify-content: center;
`;

export const AcessarButtonText = styled.Text`
  color: white;
  font-size: 16px;
  font-weight: 600;
  font-family: ${theme.fonts.bold};
`;

export const VoltarButton = styled.TouchableOpacity`
  flex: 1;
  background-color: ${theme.colors.lightgray};
  padding: 20px;
  border-radius: 12px;
  align-items: center;
  justify-content: center;
  border: 1px solid ${theme.colors.gray};
`;

export const VoltarButtonText = styled.Text`
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

export const Erro = styled.Text`
  font-size: 14px;
  color: ${theme.colors.error};
  font-weight: 600;
  font-family: ${theme.fonts.regular};
  text-align: center;
`;