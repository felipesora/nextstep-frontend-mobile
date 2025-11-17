import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types/navigation';
import { Container, Logo, LogoImage, ProfileButton, ProfileIcon, ProfileText } from './styles';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

interface CabecalhoProps {
  mostrarBotaoPerfil?: boolean;
}

const Cabecalho: React.FC<CabecalhoProps> = ({ mostrarBotaoPerfil = true }) => {
  const navigation = useNavigation<NavigationProp>();

  const handleProfilePress = () => {
    navigation.navigate('Perfil');
  };

  const handleLogoPress = () => {
    navigation.navigate('Trilhas');
  };

  return (
    <Container>
      <Logo onPress={handleLogoPress}>
        <LogoImage source={require("../../../assets/images/logo-azul.png")} />
      </Logo>
      
      {mostrarBotaoPerfil && (
        <ProfileButton onPress={handleProfilePress}>
          <ProfileIcon source={require("../../../assets/images/user-icon.png")} />
        </ProfileButton>
      )}
    </Container>
  );
};

export default Cabecalho;