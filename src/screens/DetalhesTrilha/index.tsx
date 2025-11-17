import React, { useCallback, useEffect, useState } from 'react';
import { ScrollView, ActivityIndicator, Alert } from 'react-native';
import { useFocusEffect, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types/navigation';
import Cabecalho from '../../components/Cabecalho';
import { 
  Container,
  Content,
  TrilhaCabecalho,
  TrilhaInfo,
  Titulo,
  TrilhaMeta,
  AreaBadge,
  MetaItem,
  ContainerAvaliacao,
  EstrelasContainer,
  Estrela,
  RatingValue,
  QuantidadeAvaliacoes,
  TrilhaDescricao,
  ConteudoSecao,
  ConteudoSecaoCabecalho,
  SectionTitle,
  EmptyText,
  MetaItemText,
  Nivel,
  // Novos componentes
  ActionsContainer,
  VoltarButton,
  VoltarButtonText,
  AvaliarButton,
  AvaliarButtonText,
  AvaliacaoContainer
} from './styles';
import { buscarTrilhaPorId } from '../../services/trilhaService';
import { Trilha } from '../../types/types';
import { calcularMediaNotas, formatarAreaTrilha, formatarNivelTrilha } from '../../utils/formatarTrilha';
import FullStar from '../../../assets/images/estrela-cheia.png';
import HalfStar from '../../../assets/images/estrela-metade.png';
import EmptyStar from '../../../assets/images/estrela-vazia.png';
import CardConteudo from './components/CardConteudo';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const DetalhesTrilha = () => {
  const navigation = useNavigation<NavigationProp>();
  const route = useRoute();
  const { idTrilha } = route.params as { idTrilha: number };
  const [trilha, setTrilha] = useState<Trilha | null>(null);
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const buscarTrilha = async () => {
  //     try {
  //       if (idTrilha) {
  //         const trilhaData = await buscarTrilhaPorId(idTrilha);
  //         setTrilha(trilhaData);
  //       }
  //     } catch (error) {
  //       console.error("Erro ao buscar trilha:", error);
  //       Alert.alert('Erro', 'Não foi possível carregar os detalhes da trilha');
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   buscarTrilha();
  // }, [idTrilha]);

  useFocusEffect(
    useCallback(() => {
      let ativo = true;

      const buscarTrilha = async () => {
        try {
          setLoading(true);
          const dados = await buscarTrilhaPorId(idTrilha);
          if (ativo) setTrilha(dados);
        } catch (error) {
          console.error("Erro ao buscar trilha:", error);
          Alert.alert('Erro', 'Não foi possível carregar os detalhes da trilha');
        } finally {
          if (ativo) setLoading(false);
        }
      };

      buscarTrilha();

      return () => {
        ativo = false;
      };
    }, [idTrilha])
  );

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

  const handleVoltar = () => {
    navigation.goBack();
  };

  const handleAvaliarTrilha = () => {
    navigation.navigate('AvaliarTrilha', { idTrilha });
  };

  if (loading) {
    return (
      <Container>
        <Cabecalho />
        <Content>
          <ActivityIndicator size="large" color="#0078FF" />
        </Content>
      </Container>
    );
  }

  if (!trilha) {
    return (
      <Container>
        <Cabecalho />
        <Content>
          <EmptyText>Trilha não encontrada</EmptyText>
        </Content>
      </Container>
    );
  }

  return (
    <Container>
      <Cabecalho />
      <ScrollView>
        <Content>
          {/* Botão Voltar no topo */}
          <ActionsContainer>
            <VoltarButton onPress={handleVoltar}>
              <VoltarButtonText>← Voltar para Trilhas</VoltarButtonText>
            </VoltarButton>
          </ActionsContainer>

          {/* Detalhes da Trilha */}
          <TrilhaCabecalho>
            <TrilhaInfo>
              <Titulo>{trilha.nome}</Titulo>
              <TrilhaMeta>
                <AreaBadge area={trilha.area}>
                  {formatarAreaTrilha(trilha.area)}
                </AreaBadge>
                <MetaItem>
                  <MetaItemText>
                    <Nivel source={require("../../../assets/images/nivel-icon.png")}/>
                    Nível: {formatarNivelTrilha(trilha.nivel)}
                  </MetaItemText>
                </MetaItem>
                
                <AvaliacaoContainer>
                  <ContainerAvaliacao>
                    <EstrelasContainer>
                      {renderEstrelas(calcularMediaNotas(trilha.notas))}
                    </EstrelasContainer>
                    {trilha.notas.length > 0 && (
                      <RatingValue>{calcularMediaNotas(trilha.notas)}</RatingValue>
                    )}
                    <QuantidadeAvaliacoes>({trilha.notas.length} avaliações)</QuantidadeAvaliacoes>
                  </ContainerAvaliacao>
                </AvaliacaoContainer>
                    {/* Botão Avaliar ao lado da avaliação */}
                    <AvaliarButton onPress={handleAvaliarTrilha}>
                        <AvaliarButtonText>Avaliar Trilha</AvaliarButtonText>
                    </AvaliarButton>
              </TrilhaMeta>
            </TrilhaInfo>
          </TrilhaCabecalho>

          <TrilhaDescricao>{trilha.descricao}</TrilhaDescricao>

          {/* Conteúdos da Trilha */}
          <ConteudoSecao>
            <ConteudoSecaoCabecalho>
              <SectionTitle>Conteúdos da Trilha</SectionTitle>
            </ConteudoSecaoCabecalho>

            {trilha.conteudos && trilha.conteudos.length > 0 ? (
              trilha.conteudos.map((conteudo, index) => (
                <CardConteudo
                  key={conteudo.id}
                  conteudo={conteudo}
                  index={index}
                />
              ))
            ) : (
              <EmptyText>Nenhum conteúdo cadastrado para esta trilha.</EmptyText>
            )}
          </ConteudoSecao>
        </Content>
      </ScrollView>
    </Container>
  );
};

export default DetalhesTrilha;