import styled from 'styled-components/native';
import theme from '../../../../styles/theme';

export const Container = styled.View`
  background-color: ${theme.colors.card};
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 12px;
  shadow-color: #000;
  shadow-offset: 0px 1px;
  shadow-opacity: 0.1;
  shadow-radius: 4px;
  elevation: 2;
  border: 1px solid ${theme.colors.lightgray};
`;

export const Header = styled.View`
  display: flex;
  flex-direction: column;
  margin-bottom: 12px;
  gap: 10px;
`;

export const Numero = styled.Text`
  font-size: 14px;
  font-weight: 700;
  color: ${theme.colors.primary};
  font-family: ${theme.fonts.bold};
  margin-right: 12px;
  background-color: rgba(0, 120, 255, 0.1);
  padding: 4px 8px;
  border-radius: 6px;
  min-width: 30px;
  text-align: center;
`;

export const TituloContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Titulo = styled.Text`
  font-size: 16px;
  font-weight: 600;
  color: ${theme.colors.text};
  font-family: ${theme.fonts.bold};
`;

export const TipoConteudo = styled.Text<{ tipo: string }>`
  font-size: 12px;
  font-weight: 600;
  padding: 4px 10px;
  border-radius: 12px;
  align-self: flex-start;
  font-family: ${theme.fonts.regular};
  
  /* Cores baseadas no tipo */
  background-color: ${props => {
    switch(props.tipo) {
      case 'CURSO':
        return 'rgba(0, 120, 255, 0.1)';
      case 'ARTIGO':
        return 'rgba(108, 99, 255, 0.1)';
      case 'PODCAST':
        return 'rgba(0, 200, 150, 0.1)';
      case 'VIDEO':
        return 'rgba(255, 71, 87, 0.1)';
      case 'DESAFIO':
        return 'rgba(255, 159, 28, 0.1)';
      default:
        return 'rgba(108, 99, 255, 0.1)';
    }
  }};
  
  color: ${props => {
    switch(props.tipo) {
      case 'CURSO':
        return theme.colors.primary;
      case 'ARTIGO':
        return theme.colors.secondary;
      case 'PODCAST':
        return theme.colors.success;
      case 'VIDEO':
        return '#FF4757';
      case 'DESAFIO':
        return '#FF9F1C';
      default:
        return theme.colors.secondary;
    }
  }};
`;

export const Descricao = styled.Text`
  font-size: 14px;
  color: ${theme.colors.gray};
  font-family: ${theme.fonts.regular};
  line-height: 20px;
  margin-bottom: 12px;
`;

export const LinkButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  padding: 10px 14px;
  background-color: rgba(0, 120, 255, 0.05);
  border-radius: 8px;
  border: 1px solid rgba(0, 120, 255, 0.2);
`;

export const LinkIcon = styled.Image`
  width: 20px;
  height: 20px;
  margin-right: 4px;
`;

export const LinkButtonText = styled.Text`
  font-size: 14px;
  color: ${theme.colors.primary};
  font-family: ${theme.fonts.regular};
  font-weight: 600;
`;