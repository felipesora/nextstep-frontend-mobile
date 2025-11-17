import React, { useCallback, useEffect, useState } from 'react';
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
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types/navigation';
import { useFocusEffect, useNavigation } from '@react-navigation/native';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const Trilhas = () => {
  const navigation = useNavigation<NavigationProp>();
  const [trilhas, setTrilhas] = useState<Trilha[]>([]);

  // useEffect(() => {
  //   const buscarTrilhas = async () => {
  //         try {
  //             const response = await listarTrilhasAtivas();
  
  //             const lista: Trilha[] = response.data;
  
  //             setTrilhas(lista);
  
  //             console.log("Trilhas ativas:", lista);
  //         } catch (error) {
  //             console.error("Erro ao buscar trilhas", error);
  //         }
          
  //     };
  
  //     buscarTrilhas();
  // }, []);

  useFocusEffect(
    useCallback(() => {
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
    }, [])
  );

  const handleAcessarTrilha = (trilhaId: number) => {
    console.log('Acessar trilha:', trilhaId);
    navigation.navigate('DetalhesTrilha', { idTrilha: trilhaId });
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