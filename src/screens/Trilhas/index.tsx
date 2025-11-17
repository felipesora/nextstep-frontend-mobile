import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import Cabecalho from '../../components/Cabecalho';
import { 
  Container,
  Content,
  Titulo,
  Descricao,
  ListaTrilhas
} from './styles';
import CardTrilha from './components/CardTrilha';
import { listarTrilhasAtivas } from '../../services/trilhaService';
import { Trilha } from '../../types/types';

// Dados mockados - substitua pela sua API
const trilhasMock = [
  {
    id: '1',
    titulo: 'Desenvolvimento Frontend',
    descricao: 'Aprenda React, Vue.js e Angular do zero ao avançado',
    nivel: 'Iniciante',
    avaliacao: 4.5,
    totalAvaliacoes: 128,
    duracao: '40h',
    modulos: 12
  },
  {
    id: '2',
    titulo: 'Backend com Node.js',
    descricao: 'Domine APIs REST, bancos de dados e arquitetura de software',
    nivel: 'Intermediário',
    avaliacao: 4.8,
    totalAvaliacoes: 95,
    duracao: '60h',
    modulos: 15
  },
  {
    id: '3',
    titulo: 'Mobile com React Native',
    descricao: 'Crie aplicativos mobile para iOS e Android',
    nivel: 'Intermediário',
    avaliacao: 4.3,
    totalAvaliacoes: 76,
    duracao: '50h',
    modulos: 14
  },
  {
    id: '4',
    titulo: 'Data Science',
    descricao: 'Python, Machine Learning e análise de dados',
    nivel: 'Avançado',
    avaliacao: 4.7,
    totalAvaliacoes: 64,
    duracao: '80h',
    modulos: 18
  },
  {
    id: '5',
    titulo: 'UX/UI Design',
    descricao: 'Design thinking, Figma e prototipagem',
    nivel: 'Iniciante',
    avaliacao: 3.5,
    totalAvaliacoes: 89,
    duracao: '35h',
    modulos: 10
  }
];

const Trilhas = () => {
  const [trilhas, setTrilhas] = useState<Trilha[]>([]);

  useEffect(() => {
    const buscarTrilhas = async () => {
          try {
              const response = await listarTrilhasAtivas();
  
              const lista: Trilha[] = response.data;
  
              setTrilhas(lista);
  
              console.log("Trilhas ativas:", lista);
          } catch (error) {
              console.error("Erro ao buscar trilhas", error);
          }
          
      };
  
      buscarTrilhas();
  }, []);

  const handleAcessarTrilha = (trilhaId: string) => {
    console.log('Acessar trilha:', trilhaId);
    // Navegar para detalhes da trilha
    // navigation.navigate('DetalhesTrilha', { id: trilhaId });
  };

  return (
    <Container>
      <Cabecalho />
      <ScrollView>
        <Content>
          <Titulo>Trilhas de estudo</Titulo>
          <Descricao>
            Escolha sua jornada de aprendizado e dê o próximo passo na sua carreira
          </Descricao>
          
          <ListaTrilhas>
            {trilhas.map(trilha => (
              <CardTrilha
                key={trilha.id}
                trilha={trilha}
                onAcessar={() => handleAcessarTrilha(trilha.id)}
              />
            ))}
          </ListaTrilhas>
        </Content>
      </ScrollView>
    </Container>
  );
};

export default Trilhas;