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
  margin-bottom: 8px;
`;

export const Descricao = styled.Text`
  font-size: 16px;
  color: ${theme.colors.gray};
  font-family: ${theme.fonts.regular};
  margin-bottom: 32px;
  line-height: 24px;
`;

// Novos estilos para a seção de ajuda
export const AjudaContainer = styled.View`
  background-color: ${theme.colors.primary}15;
  border-radius: 16px;
  padding: 20px;
  margin-bottom: 24px;
  border: 1px solid ${theme.colors.primary}20;
`;

export const AjudaTitulo = styled.Text`
  font-size: 18px;
  font-weight: 700;
  color: ${theme.colors.text};
  font-family: ${theme.fonts.bold};
  margin-bottom: 8px;
`;

export const AjudaDescricao = styled.Text`
  font-size: 14px;
  color: ${theme.colors.gray};
  font-family: ${theme.fonts.regular};
  line-height: 20px;
  margin-bottom: 16px;
`;

export const AjudaButton = styled.TouchableOpacity`
  background-color: ${theme.colors.primary};
  padding: 12px 16px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
`;

export const AjudaButtonText = styled.Text`
  color: white;
  font-size: 14px;
  font-weight: 600;
  font-family: ${theme.fonts.bold};
`;

export const ListaTrilhas = styled.View`
  gap: 16px;
`;