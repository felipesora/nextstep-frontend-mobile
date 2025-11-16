import styled from 'styled-components/native';
import theme from '../../../../styles/theme';

export const Container = styled.View`
  background-color: ${theme.colors.card};
  border-radius: 16px;
  padding: 20px;
  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.1;
  shadow-radius: 8px;
  elevation: 3;
  border: 1px solid ${theme.colors.lightgray};
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 12px;
`;

export const Titulo = styled.Text`
  font-size: 18px;
  font-weight: 600;
  color: ${theme.colors.text};
  font-family: ${theme.fonts.bold};
  flex: 1;
  margin-right: 12px;
`;

export const Nivel = styled.Text<{ nivel: string }>`
  font-size: 12px;
  font-weight: 600;
  color: white;
  font-family: ${theme.fonts.regular};
  padding: 4px 12px;
  border-radius: 12px;
  background-color: ${props => {
    switch (props.nivel.toLowerCase()) {
      case 'iniciante':
        return theme.colors.success;
      case 'intermediário':
        return theme.colors.secondary;
      case 'avançado':
        return theme.colors.primary;
      default:
        return theme.colors.gray;
    }
  }};
`;

export const Descricao = styled.Text`
  font-size: 14px;
  color: ${theme.colors.gray};
  font-family: ${theme.fonts.regular};
  line-height: 20px;
  margin-bottom: 16px;
`;

export const InfoContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

export const AvaliacaoContainer = styled.View`
  flex: 1;
`;

export const EstrelasContainer = styled.View`
  flex-direction: row;
  margin-bottom: 4px;
`;

export const Estrela = styled.Text`
  font-size: 16px;
  margin-right: 2px;
`;

export const AvaliacaoTexto = styled.Text`
  font-size: 12px;
  color: ${theme.colors.gray};
  font-family: ${theme.fonts.regular};
`;

export const DetalhesContainer = styled.View`
  align-items: flex-end;
`;

export const Detalhe = styled.View`
  margin-bottom: 4px;
`;

export const DetalheTexto = styled.Text`
  font-size: 12px;
  color: ${theme.colors.gray};
  font-family: ${theme.fonts.regular};
`;

export const BotaoAcessar = styled.TouchableOpacity`
  background-color: ${theme.colors.primary};
  padding: 12px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
`;

export const BotaoTexto = styled.Text`
  color: white;
  font-size: 14px;
  font-weight: 600;
  font-family: ${theme.fonts.bold};
`;