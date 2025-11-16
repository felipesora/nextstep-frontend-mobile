import styled from 'styled-components/native';
import theme from '../../styles/theme';

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 16px 20px;
  background-color: ${theme.colors.card};
  border-bottom-width: 1px;
  border-bottom-color: ${theme.colors.lightgray};
  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.1;
  shadow-radius: 8px;
  elevation: 4;
`;

export const Logo = styled.TouchableOpacity`
  padding: 8px;
`;

export const LogoImage = styled.Image`
  width: 120px;
  height: 30px;
  resize-mode: contain;
`;

export const ProfileButton = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background-color: ${theme.colors.lightgray};
  justify-content: center;
  align-items: center;
  border: 2px solid ${theme.colors.primary};
`;

export const ProfileText = styled.Text`
  font-size: 20px;
`;

// Remova estas linhas se não for usar (são da versão SVG):
// export const ProfileIconContainer = styled.View`
//   width: 40px;
//   height: 40px;
//   border-radius: 20px;
//   background-color: ${theme.colors.lightgray};
//   justify-content: center;
//   align-items: center;
//   border: 2px solid ${theme.colors.primary};
// `;

// export const ProfileIcon = styled.View`
//   justify-content: center;
//   align-items: center;
// `;