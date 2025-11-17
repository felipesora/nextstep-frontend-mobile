import React, { useState } from 'react';
import { ScrollView, Alert } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types/navigation';
import Cabecalho from '../../components/Cabecalho';
import { 
  Container,
  Content,
  Titulo,
  Descricao,
  FormContainer,
  EstrelasContainer,
  EstrelaButton,
  Estrela,
  EstrelaVazia,
  Label,
  InputObservacao,
  ContadorCaracteres,
  BotoesContainer,
  ConfirmarButton,
  ConfirmarButtonText,
  CancelarButton,
  CancelarButtonText,
  AvaliacaoAtual,
  MensagemContainer,
  Sucesso,
  Erro
} from './styles';
import FullStar from '../../../assets/images/estrela-cheia.png';
import EmptyStar from '../../../assets/images/estrela-vazia.png';
import { cadastrarNota } from './services/notaService';
import AsyncStorage from '@react-native-async-storage/async-storage';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const AvaliarTrilha = () => {
  const navigation = useNavigation<NavigationProp>();
  const route = useRoute();
  const { idTrilha } = route.params as { idTrilha: number };
  
  
  const [avaliacao, setAvaliacao] = useState<number>(0);
  const [observacao, setObservacao] = useState<string>('');
  const [enviando, setEnviando] = useState<boolean>(false);
  const [sucesso, setSucesso] = useState<string>('');
  const [erro, setErro] = useState<string>('');

  const handleSelecionarEstrela = (quantidade: number) => {
    setAvaliacao(quantidade);
  };

  const handleConfirmar = async () => {
    if (avaliacao === 0) {
      setErro('Por favor, selecione uma avaliação com as estrelas.');
      return;
    }

    setEnviando(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));

      const idUsuarioStorage = await AsyncStorage.getItem("usuarioId");

      const nota = {
        valorNota: avaliacao,
        observacao: observacao,
        idTrilha: idTrilha,
        idUsuario: Number(idUsuarioStorage)
      };

      await cadastrarNota(nota);
      
      setErro('');
      setSucesso('Obrigado pela avaliação!');

      setTimeout(() => {
            navigation.goBack();
      }, 2000);

    } catch (error) {
      setErro('Não foi possível enviar sua avaliação. Tente novamente.');
    } finally {
      setEnviando(false);
    }
  };

  const handleCancelar = () => {
    navigation.goBack();
  };

  const renderEstrelas = () => {
    const estrelas = [];
    
    for (let i = 1; i <= 5; i++) {
      estrelas.push(
        <EstrelaButton
          key={i}
          onPress={() => handleSelecionarEstrela(i)}
          activeOpacity={0.7}
        >
          {i <= avaliacao ? (
            <Estrela source={FullStar} />
          ) : (
            <EstrelaVazia source={EmptyStar} />
          )}
        </EstrelaButton>
      );
    }
    
    return estrelas;
  };

  return (
    <Container>
      <Cabecalho />
      <ScrollView>
        <Content>
          <Titulo>Avaliar Trilha</Titulo>
          <Descricao>
            Sua opinião é muito importante! Avalie esta trilha de estudo para 
            ajudar outros alunos a escolherem o melhor caminho de aprendizado.
          </Descricao>

          <FormContainer>
            {/* Seleção de Estrelas */}
            <Label>Sua Avaliação *</Label>
            <EstrelasContainer>
              {renderEstrelas()}
            </EstrelasContainer>
            
            {avaliacao > 0 && (
              <AvaliacaoAtual>
                {avaliacao} estrela(s) selecionada(s)
              </AvaliacaoAtual>
            )}

            {/* Campo de Observação */}
            <Label>Observação (Opcional)</Label>
            <InputObservacao
              placeholder="Compartilhe sua experiência com esta trilha... 
O que você mais gostou? O que poderia melhorar?"
              placeholderTextColor="#8C8C9A"
              value={observacao}
              onChangeText={setObservacao}
              multiline
              textAlignVertical="top"
              maxLength={400}
            />
            <ContadorCaracteres>
              {observacao.length}/400 caracteres
            </ContadorCaracteres>

            <>
                {sucesso ? (
                    <MensagemContainer>
                    <Sucesso>{sucesso}</Sucesso>
                    </MensagemContainer>
                ) : null}
                {erro ? (
                    <MensagemContainer>
                    <Erro>{erro}</Erro>
                    </MensagemContainer>
                ) : null}
            </>

            {/* Botões de Ação */}
            <BotoesContainer>
              <CancelarButton onPress={handleCancelar} disabled={enviando}>
                <CancelarButtonText>Cancelar</CancelarButtonText>
              </CancelarButton>
              
              <ConfirmarButton onPress={handleConfirmar} disabled={enviando}>
                <ConfirmarButtonText>
                  {enviando ? 'Enviando...' : 'Avaliar'}
                </ConfirmarButtonText>
              </ConfirmarButton>
            </BotoesContainer>
          </FormContainer>
        </Content>
      </ScrollView>
    </Container>
  );
};

export default AvaliarTrilha;