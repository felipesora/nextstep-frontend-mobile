import styled from 'styled-components/native';
import theme from '../../styles/theme';

export const Container = styled.View`
  flex: 1;
  background-color: ${theme.colors.background};
`;

export const Content = styled.View`
  padding: 24px 20px;
`;

// Container para os botões de ação
export const ActionsContainer = styled.View`
  margin-bottom: 20px;
`;

// Botão Voltar
export const VoltarButton = styled.TouchableOpacity`
  padding: 12px 16px;
  background-color: ${theme.colors.lightgray};
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  border: 1px solid ${theme.colors.gray};
`;

export const VoltarButtonText = styled.Text`
  font-size: 14px;
  color: ${theme.colors.text};
  font-family: ${theme.fonts.regular};
  font-weight: 500;
`;

// Container para avaliação + botão
export const AvaliacaoContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 8px;
`;

// Botão Avaliar
export const AvaliarButton = styled.TouchableOpacity`
  padding: 10px 16px;
  background-color: rgba(0, 200, 150, 0.1);
  border-radius: 8px;
  border: 1px solid ${theme.colors.success};
  margin-top: 5px;
`;

export const AvaliarButtonText = styled.Text`
  font-size: 12px;
  color: ${theme.colors.success};
  font-family: ${theme.fonts.regular};
  font-weight: 600;
`;

// Estilos existentes mantidos...
export const TrilhaCabecalho = styled.View`
  background-color: ${theme.colors.card};
  border-radius: 16px;
  padding: 24px;
  margin-bottom: 20px;
  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.1;
  shadow-radius: 8px;
  elevation: 3;
`;

export const TrilhaInfo = styled.View`
  margin-bottom: 20px;
`;

export const Titulo = styled.Text`
  font-size: 24px;
  font-weight: 700;
  color: ${theme.colors.text};
  font-family: ${theme.fonts.bold};
  margin-bottom: 16px;
`;

export const TrilhaMeta = styled.View`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: flex-start;
`;

export const AreaBadge = styled.Text<{ area: string }>`
  font-size: 12px;
  font-weight: 600;
  color: white;
  font-family: ${theme.fonts.regular};
  padding: 6px 12px;
  border-radius: 12px;
  background-color: ${props => {
    switch (props.area) {
      case 'BACKEND':
        return '#8B5CF6';
      case 'WEB':
        return '#06B6D4';
      case 'DATA_SCIENCE':
        return '#10B981';
      case 'MOBILE':
        return '#F59E0B';
      case 'DESIGN':
        return '#EC4899';
      case 'DEVOPS':
        return '#EF4444';
      case 'IA':
        return '#7C3AED';
      default:
        return theme.colors.gray;
    }
  }};
`;

export const MetaItem = styled.View``;

export const MetaItemText = styled.Text`
  font-size: 14px;
  color: ${theme.colors.gray};
  font-family: ${theme.fonts.regular};
  display: flex;
  align-items: center;
`;

export const Nivel = styled.Image`
  width: 16px;
  height: 16px;
  margin-right: 4px;
`;

export const ContainerAvaliacao = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 8px;
  flex: 1;
`;

export const EstrelasContainer = styled.View`
  flex-direction: row;
`;

export const Estrela = styled.Image`
  width: 16px;
  height: 16px;
  margin-right: 2px;
`;

export const RatingValue = styled.Text`
  font-size: 14px;
  font-weight: 700;
  color: ${theme.colors.text};
  font-family: ${theme.fonts.bold};
`;

export const QuantidadeAvaliacoes = styled.Text`
  font-size: 14px;
  color: ${theme.colors.gray};
  font-family: ${theme.fonts.regular};
`;

export const TrilhaDescricao = styled.Text`
  font-size: 16px;
  color: ${theme.colors.text};
  font-family: ${theme.fonts.regular};
  line-height: 24px;
  margin-bottom: 24px;
`;

export const ConteudoSecao = styled.View`
  margin-top: 8px;
`;

export const ConteudoSecaoCabecalho = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const SectionTitle = styled.Text`
  font-size: 20px;
  font-weight: 700;
  color: ${theme.colors.text};
  font-family: ${theme.fonts.bold};
`;

export const EmptyText = styled.Text`
  font-size: 16px;
  color: ${theme.colors.gray};
  font-family: ${theme.fonts.regular};
  text-align: center;
  margin-top: 20px;
`;