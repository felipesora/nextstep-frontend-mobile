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

export const AvatarContainer = styled.View`
  align-items: center;
  margin-bottom: 32px;
`;

export const Avatar = styled.View`
  width: 80px;
  height: 80px;
  border-radius: 40px;
  background:  ${theme.colors.primary};
  justify-content: center;
  align-items: center;
  margin-bottom: 12px;
  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.1;
  shadow-radius: 4px;
  elevation: 3;
`;

export const AvatarTexto = styled.Text`
  font-size: 24px;
  font-weight: 700;
  color: white;
  font-family: ${theme.fonts.bold};
`;

export const NomeUsuario = styled.Text`
  font-size: 20px;
  font-weight: 600;
  color: ${theme.colors.text};
  font-family: ${theme.fonts.bold};
`;

export const InfoContainer = styled.View`
  background-color: ${theme.colors.card};
  border-radius: 16px;
  padding: 20px;
  margin-bottom: 24px;
  shadow-color: #000;
  shadow-offset: 0px 1px;
  shadow-opacity: 0.1;
  shadow-radius: 4px;
  elevation: 2;
`;

export const InfoItem = styled.View`
  margin-bottom: 16px;
`;

export const InfoLabel = styled.Text`
  font-size: 14px;
  color: ${theme.colors.gray};
  font-family: ${theme.fonts.regular};
  margin-bottom: 4px;
`;

export const InfoValue = styled.Text`
  font-size: 16px;
  color: ${theme.colors.text};
  font-family: ${theme.fonts.regular};
  font-weight: 500;
`;

export const Divisor = styled.View`
  height: 1px;
  background-color: ${theme.colors.lightgray};
  margin-vertical: 24px;
`;

export const BotoesContainer = styled.View`
  gap: 12px;
`;

export const BotaoEditar = styled.TouchableOpacity`
  padding: 16px;
  border-radius: 12px;
  align-items: center;
  justify-content: center;
  background-color: ${theme.colors.primary};
`;

export const BotaoTextoEditar = styled.Text`
  font-size: 16px;
  font-weight: 600;
  font-family: ${theme.fonts.bold};
  color: white;
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const BotaoSair = styled.TouchableOpacity`
  padding: 16px;
  border-radius: 12px;
  align-items: center;
  justify-content: center;
  background-color: ${theme.colors.lightgray};
`;

export const BotaoTextoSair = styled.Text`
  font-size: 16px;
  font-weight: 600;
  font-family: ${theme.fonts.bold};
  color: ${theme.colors.text};
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const BotaoDeletarConta = styled.TouchableOpacity`
  padding: 16px;
  border-radius: 12px;
  align-items: center;
  justify-content: center;
  background-color: #FF4757;
`;

export const BotaoTextoDeletarConta = styled.Text`
  font-size: 16px;
  font-weight: 600;
  font-family: ${theme.fonts.bold};
  color: white;
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const Icone = styled.Image`
  width: 20px;
  height: 20px;
  margin-right: 4px;
`;