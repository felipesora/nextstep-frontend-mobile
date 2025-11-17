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

export const ListaTrilhas = styled.View`
  gap: 16px;
`;