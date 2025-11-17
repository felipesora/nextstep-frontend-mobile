import React from 'react';
import { Linking } from 'react-native';
import { 
  Container,
  Header,
  Numero,
  TituloContainer,
  Titulo,
  TipoConteudo,
  Descricao,
  LinkButton,
  LinkButtonText,
  LinkIcon
} from './styles';
import { Conteudo } from '../../../../types/types';
import { formatarTipoConteudo, getTextoLink } from '../../../../utils/formatarTrilha';

interface CardConteudoProps {
  conteudo: Conteudo;
  index: number;
}

const CardConteudo: React.FC<CardConteudoProps> = ({ conteudo, index }) => {
  
  const handleAbrirLink = async () => {
    if (conteudo.link) {
      const canOpen = await Linking.canOpenURL(conteudo.link);
      if (canOpen) {
        await Linking.openURL(conteudo.link);
      }
    }
  };

  return (
    <Container>
      {/* <Header>
        <Numero>{index + 1}</Numero>
        <TituloContainer>
          <Titulo>{conteudo.titulo}</Titulo>
          <TipoConteudo tipo={conteudo.tipo}>
            {formatarTipoConteudo(conteudo.tipo)}
          </TipoConteudo>
        </TituloContainer>
      </Header> */}

      <Header>
        <TituloContainer>
            <Numero>{index + 1}</Numero>
            <Titulo>{conteudo.titulo}</Titulo>
        </TituloContainer>
        <TipoConteudo tipo={conteudo.tipo}>
            {formatarTipoConteudo(conteudo.tipo)}
        </TipoConteudo>
      </Header>
      
      <Descricao>{conteudo.descricao}</Descricao>

      {conteudo.link && (
        <LinkButton onPress={handleAbrirLink}>
          <LinkIcon source={require("../../../../../assets/images/link-icon.png")} />
          <LinkButtonText>
            {getTextoLink(conteudo.tipo)}
          </LinkButtonText>
        </LinkButton>
      )}
    </Container>
  );
};

export default CardConteudo;