import React from 'react';
import { 
  Container,
  Header,
  Titulo,
  Descricao,
  InfoContainer,
  Nivel,
  AvaliacaoContainer,
  EstrelasContainer,
  Estrela,
  AvaliacaoTexto,
  DetalhesContainer,
  Detalhe,
  DetalheTexto,
  BotaoAcessar,
  BotaoTexto,
  Conteudo
} from './styles';
import FullStar from '../../../../../assets/images/estrela-cheia.png';
import HalfStar from '../../../../../assets/images/estrela-metade.png';
import EmptyStar from '../../../../../assets/images/estrela-vazia.png';
import { Trilha } from '../../../../types/types';
import { calcularMediaNotas, formatarNivelTrilha } from '../../../../utils/formatarTrilha';

interface CardTrilhaProps {
  trilha: Trilha;
  onAcessar: () => void;
}

const CardTrilha: React.FC<CardTrilhaProps> = ({ trilha, onAcessar }) => {
  
  // Função para renderizar estrelas
  const renderEstrelas = (avaliacao: number) => {
    const estrelas = [];
    const estrelasCheias = Math.floor(avaliacao);
    const temMeiaEstrela = avaliacao % 1 !== 0;

    for (let i = 1; i <= 5; i++) {
      if (i <= estrelasCheias) {
        estrelas.push(<Estrela key={i} source={FullStar} />);
      } else if (i === estrelasCheias + 1 && temMeiaEstrela) {
        estrelas.push(<Estrela key={i} source={HalfStar} />);
      } else {
        estrelas.push(<Estrela key={i} source={EmptyStar} />);
      }
    }

    return estrelas;
  };

  return (
    <Container>
      <Header>
        <Titulo>{trilha.nome}</Titulo>
        <Nivel nivel={trilha.nivel}>{formatarNivelTrilha(trilha.nivel)}</Nivel>
      </Header>
      
      <Descricao>{trilha.descricao}</Descricao>
      
      <InfoContainer>
        <AvaliacaoContainer>
          <EstrelasContainer>
            <EstrelasContainer>
              {renderEstrelas(calcularMediaNotas(trilha.notas))}
            </EstrelasContainer>
          </EstrelasContainer>
          <AvaliacaoTexto>
            {calcularMediaNotas(trilha.notas)} ({trilha.notas.length} avaliações)
          </AvaliacaoTexto>
        </AvaliacaoContainer>
        
        <DetalhesContainer>
          <Detalhe>
            <DetalheTexto>
              <Conteudo source={require("../../../../../assets/images/conteudo-icon.png")}/>
            {trilha.conteudos.length} conteúdos
            </DetalheTexto>
          </Detalhe>
        </DetalhesContainer>
      </InfoContainer>
      
      <BotaoAcessar onPress={onAcessar}>
        <BotaoTexto>Acessar Trilha</BotaoTexto>
      </BotaoAcessar>
    </Container>
  );
};

export default CardTrilha;