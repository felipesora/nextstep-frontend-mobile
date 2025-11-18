import styled from 'styled-components/native';
import theme from '../../styles/theme';

export const Container = styled.View`
  flex: 1;
  background-color: ${theme.colors.background};
`;

export const Content = styled.View`
  flex: 1;
  padding: 40px 24px;
  justify-content: center;
  align-items: center;
`;

export const IconeAtencao = styled.Image`
  width: 80px;
  height: 80px;
  margin-bottom: 24px;
`;

export const Titulo = styled.Text`
  font-size: 24px;
  font-weight: 700;
  color: ${theme.colors.error};
  font-family: ${theme.fonts.bold};
  margin-bottom: 20px;
  text-align: center;
`;

export const Mensagem = styled.Text`
  font-size: 16px;
  color: ${theme.colors.text};
  font-family: ${theme.fonts.regular};
  line-height: 24px;
  text-align: center;
  margin-bottom: 40px;
`;

Mensagem.Destaque = styled.Text`
  font-weight: 700;
  color: ${theme.colors.error};
`;

export const BotoesContainer = styled.View`
  flex-direction: column;
  gap: 16px;
  width: 100%;
`;

export const BotaoDeletar = styled.TouchableOpacity`
  flex: 1;
  background-color: ${theme.colors.error};
  padding: 20px;
  border-radius: 12px;
  align-items: center;
  justify-content: center;
`;

export const BotaoTextoDeletar = styled.Text`
  color: white;
  font-size: 16px;
  font-weight: 600;
  font-family: ${theme.fonts.bold};
`;

export const BotaoCancelar = styled.TouchableOpacity`
  flex: 1;
  background-color: ${theme.colors.lightgray};
  padding: 20px;
  border-radius: 12px;
  align-items: center;
  justify-content: center;
  border: 1px solid ${theme.colors.gray};
`;

export const BotaoTextoCancelar = styled.Text`
  color: ${theme.colors.text};
  font-size: 16px;
  font-weight: 600;
  font-family: ${theme.fonts.bold};
`;