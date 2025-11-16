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
  BotaoTexto
} from './styles';

interface Trilha {
  id: string;
  titulo: string;
  descricao: string;
  nivel: string;
  avaliacao: number;
  totalAvaliacoes: number;
  duracao: string;
  modulos: number;
}

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
        estrelas.push('⭐');
      } else if (i === estrelasCheias + 1 && temMeiaEstrela) {
        estrelas.push('🌟');
      } else {
        estrelas.push('☆');
      }
    }

    return estrelas;
  };

  return (
    <Container>
      <Header>
        <Titulo>{trilha.titulo}</Titulo>
        <Nivel nivel={trilha.nivel}>{trilha.nivel}</Nivel>
      </Header>
      
      <Descricao>{trilha.descricao}</Descricao>
      
      <InfoContainer>
        <AvaliacaoContainer>
          <EstrelasContainer>
            {renderEstrelas(trilha.avaliacao).map((estrela, index) => (
              <Estrela key={index}>{estrela}</Estrela>
            ))}
          </EstrelasContainer>
          <AvaliacaoTexto>
            {trilha.avaliacao} ({trilha.totalAvaliacoes} avaliações)
          </AvaliacaoTexto>
        </AvaliacaoContainer>
        
        <DetalhesContainer>
          <Detalhe>
            <DetalheTexto>📚 {trilha.modulos} conteúdos</DetalheTexto>
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